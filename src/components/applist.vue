<template>
  <div class="applist" v-if='this.list'>
    <v-appListHead :tab=this.tab :list='this.list'></v-appListHead>
    <v-appListMain :tab=this.tab :list='this.list'></v-appListMain>
  </div>
</template>
<script>
import appListHead from '@/components/appListHead';
import appListMain from '@/components/appListMain';
import { SongSheet, Evalbum, Album } from '@/common/js/filterList';
import api from '../api';

export default {
  data() {
    return {
      msg: 'one',
      list: {},
      songList: [],
      listHead: {},
      d: null,
      haveAdd: false,
      tab: '',
    };
  },
  created() {
    this.init();
    // this.filterSongSheet();
    this.filerEvalbum();
    // this.filerAlbum();
  },
  watch: {
    list() {
      this.haveAdd = false; // 已经添加到列表
    },
  },
  methods: {
    init() {
      const id = this.$route.query.id;
      const tab = this.$route.query.tab;
      api.forvue.getAppList(id).then((res) => {
        this.list = res.data.playlist;
        this.tab = tab;
      });
    },
    // 歌单
    filterSongSheet() {
      const id = this.$route.query.id;
      api.forvue.getAppList(id).then((res) => {
        const odata = res.data;
        this.listHead = {
          coverImgUrl: odata.coverImgUrl,
          description: odata.description,
          tags: odata.tags,
          name: odata.name,
          createTime: odata.createTime,
          trackCount: odata.trackCount,
          playCount: odata.playCount,
          commentCount: odata.commentCount,
          nickname: odata.nickname,
        };
        const data = odata.playlist.tracks;
        data.forEach((item) => {
          const itemid = item.id;
          const name = item.name;
          const song = item.ar;
          const album = item.al;

          const obj = new SongSheet(itemid, name, song, album);
          this.songList.push(obj);
        });
      });
    },
    // 歌手
    filerEvalbum() {
      const id = 6452;
      api.forvue.getsongAlbum(id).then((res) => {
        const odata = res.data;
        this.listHead = {
          picUrl: odata.picUrl,
          name: odata.name,
          alias: odata.alias,
          musicSize: odata.musicSize,
          albumSize: odata.albumSize,
        };
        const data = odata.hotAlbums;
        data.forEach((item) => {
          const avart = item.picUrl;
          const name = item.name;
          const itemid = item.id;
          const time = item.publishTime;
          const obj = new Evalbum(avart, time, itemid, name);
          this.songList.push(obj);
          console.log(this.songList);
        });
      });
    },
    // 专辑
    filerAlbum() {
      const id = 18907;
      api.forvue.getalbumDetail(id).then((res) => {
        const odata = res.data;
        this.listHead = {
          name: odata.album.name,
          picUrl: odata.album.picUrl,
          publishTime: odata.album.publishTime,
          commentCount: odata.album.info.commentCount,
        };
        const data = odata.songs;
        data.forEach((item) => {
          const name = item.name;
          const song = item.ar;
          const album = item.al;
          const time = item.dt;

          const obj = new Album(name, song, album, time);
          this.songList.push(obj);
        });
      });
    },
  },
  components: {
    'v-appListHead': appListHead,
    'v-appListMain': appListMain,
  },
};

</script>
<style lang='scss'>


</style>
