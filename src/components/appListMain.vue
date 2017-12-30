<template>
  <div class="applist-main">
    <div class="applist-main-head" v-if="tab === 'A'">
      <span class="a-m-h-tab">歌曲列表</span>
      <span class="a-m-h-tab">评论</span>
      <span class="a-m-h-tab">收藏</span>
    </div>
    <div class="applist-main-head" v-else-if="tab ==='B'">
      <span class="a-m-h-tab">专辑</span>
      <span class="a-m-h-tab">mv</span>
      <span class="a-m-h-tab">歌手详情</span>
      <span class="a-m-h-tab">相似歌手</span>
    </div>
    <div class="applist-main-head" v-else-if="tab ==='C'">
      <span class="a-m-h-tab">歌曲列表</span>
      <span class="a-m-h-tab">评论</span>
      <span class="a-m-h-tab">专辑详情</span>
    </div>
    <div v-if="tab === 'B'">
      <div v-for="(item,index) in songList" class="evreyablum">
        <div class="evreyablum-left">
          <div class="ab-pic">
            <img v-lazy="item.avart" style="width:100%;">
          </div>
          <div>{{item.time}}</div>
          <div>{{item.id}}</div>
        </div>
        <div class="evreyablum-right">
          <div class="e-r-i" :key="item.id" @click='detail(item.id)'>{{item.name}}</div>
          <div class="e-r-c">(点击查看详情)</div>
        </div>
      </div>
    </div>
    <table class="evreylist " v-else>
      <tr>
        <th class='el-th' style="width:10%;text-align:center">序列</th>
        <th class='el-th' style="width:30%">音乐标题</th>
        <th class='el-th' style="width:30%">歌手</th>
        <th class='el-th' style="width:30%">专辑</th>
      </tr>
      <tr v-for="(item, index) in songList " :data-id="item.id " :class="{light: now(index)} " @dblclick='toPlay($event)'>
        <td class="index">0{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>
          <span v-for="k in item.song">{{k.name}}<span v-if="item.song.length > 1">/</span></span>
        </td>
        <td>{{item.album.name}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import api from '../api';

export default {
  props: {
    tab: {
      type: String,
      default: 'A',
    },
    songList: {},
  },
  data() {
    return {
      d: [],
      t: [],
    };
  },
  mounted() {
    // console.log('ok2');
  },
  created() {
    console.log(this.songList);
  },
  methods: {
    // 获取专辑歌单 信息量大 被拦截
    go() {
      const list = this.songList;
      list.forEach((item) => {
        this.do(item.id);
      });
    },
    do(id) {
      api.forvue.getalbumDetail(id).then((res) => {
        const data = res.data.songs;
        data.forEach((item) => {
          const oname = item.name;
          const time = item.dt;
          const obj = {
            name: oname,
            tiem: time,
          };
          this.d.push(obj);
        });
        this.t.push(this.d);
        this.d = [];
      });
    },

    now(index) {
      if (this.d === index) {
        return true;
      } else {
        return false;
      }
    },
    toPlay(event) {
      const id = event.currentTarget.dataset.id;
      this.$store.commit('getMusicURl', id);
      this.$store.commit('startPlay');
      this.$store.commit('changeMusicId', id);
      this.$store.commit('getMusicDetail', id);
      if (this.haveAdd === true) {
        return;
      } else {
        for (let i = 0; i < this.list.tracks.length; i += 1) {
          const n = this.list.tracks[i].id;
          this.$store.commit('addPalyList', n);
          this.haveAdd = true;
        }
      }
    },
    detail(id) {
      const tab = 'C';
      this.$router.push({ path: 'album', query: { id, tab } });
      window.location.reload();
    },
  },
};

</script>
<style lang='scss'>
.applist-main {
  .applist-main-head {
    height: 30px;
    padding: 0 30px;
    border-bottom: 1px solid rgb(203, 61, 61);
    .a-m-h-tab {
      float: left;
      display: inline-block;
      width: 100px;
      line-height: 30px;
      text-align: center;
      margin: 0 3px;
      background: rgb(203, 61, 61);
      color: rgb(255, 255, 255);
    }
  }
  .evreylist {
    width: 1000px;
    margin: 0 auto;
    border-collapse: collapse;
    text-align: left;
    .el-th {
      border: 1px solid black;
      border-top: none;
      padding-left: 10px;
      &:first-child {
        border-left: none;
      }
      &:last-child {
        border-right: none;
      }
    }
    tr {
      &:nth-child(odd) {
        background: rgba(128, 128, 128, .15);
      }
      &:first-child {
        background: rgb(255, 255, 255);
      }
    }
    td {
      padding-left: 5px;
    }
    .index {
      text-align: center;
    }
  }
  .evreyablum {
    margin: 30px;
    display: flex;
    .evreyablum-left {
      flex: 0, 1, 200px;
      margin-right: 100px;
      .ab-pic {
        width: 150px;
        height: 150px;
      }
    }
    .evreyablum-right {
      margin-left: 100px;
      min-width: 500px;
      height: 20px;
      .e-r-i {
        font-weight: 600;
        font-size: 25px;
      }
      .e-r-c {
        font-weight: 300;
      }
    }
  }
  .light {
    background: yellow;
  }
}

</style>
