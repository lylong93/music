<template>
  <div class="applist">
    <v-appListHead :list='this.listHead' :tab='this.tab'></v-appListHead>
    <v-appListMain :songList='this.songList' :tab='this.tab'></v-appListMain>
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
      songList: [],
      listHead: {},
      d: null,
      haveAdd: false,
      tab: '',
    };
  },
  created() {
    this.init();
  },
  computed: {
    ok() {
      if (Object.keys(this.listHead).length !== 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    init() {
      const id = this.$route.query.id;
      const tab = this.$route.query.tab;
      this.tab = tab;
      if (tab === 'A') {
        this.filterSongSheet(id);
      } else if (tab === 'B') {
        this.filerEvalbum();
      } else if (tab === 'C') {
        this.filerAlbum();
      }
    },
    // 歌单
    filterSongSheet(id) {
      api.forvue.getAppList(id).then((res) => {
        const odata = res.data.playlist;
        this.listHead = {
          coverImgUrl: odata.coverImgUrl,
          description: odata.description,
          tags: odata.tags,
          name: odata.name,
          createTime: odata.createTime,
          createName: odata.creator.nickname,
          createPic: odata.creator.avatarUrl,
          trackCount: odata.trackCount,
          playCount: odata.playCount,
          commentCount: odata.commentCount,
        };
        console.log(this.listHead);
        const data = odata.tracks;
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
        const odata = res.data.artist;
        this.listHead = {
          coverImgUrl: odata.picUrl,
          name: odata.name,
          alias: odata.alias,
          musicSize: odata.musicSize,
          albumSize: odata.albumSize,
        };
        const data = res.data.hotAlbums;
        data.forEach((item) => {
          const avart = item.picUrl;
          const name = item.name;
          const itemid = item.id;
          const time = item.publishTime;

          const obj = new Evalbum(avart, time, itemid, name);
          this.songList.push(obj);
        });
      });
    },
    // 专辑
    filerAlbum() {
      console.log('ok');
      const id = 18907;
      api.forvue.getalbumDetail(id).then((res) => {
        const odata = res.data;
        console.log('odata');
        this.listHead = {
          name: odata.album.name,
          coverImgUrl: odata.album.picUrl,
          song: odata.album.artist.name,
          publishTime: odata.album.publishTime,
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
