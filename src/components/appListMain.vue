<template>
  <div class="applist-main">
    <div class="applist-main-head" v-if="tab === 'A'">
      <span class="a-m-h-tab">歌曲列表</span>
      <span class="a-m-h-tab">评论</span>
      <span class="a-m-h-tab">收藏</span>
    </div>
    <div class="applist-main-head" v-else-if="tab ==='B'">
      <span>专辑</span>
      <span>mv</span>
      <span>歌手详情</span>
      <span>相似歌手</span>
    </div>
    <div class="applist-main-head" v-else-if="tab ==='C'">
      <span>歌曲列表</span>
      <span>评论</span>
      <span>专辑详情</span>
    </div>
    <div v-if="tab === 'B'">
      <div v-for="item in list">
        <div>{{item.time}}</div>
        <div>
          <div>{{item.name}}</div>
          <!-- <div>{{t}}</div> -->
        </div>
      </div>
    </div>
    <table class="evreylist" v-else>
      <tr>
        <th class='el-th'></th>
        <th class='el-th'>操作</th>
        <th class='el-th'>音乐标题</th>
        <th class='el-th'>歌手</th>
        <th class='el-th'>专辑</th>
      </tr>
      <tr v-for="(item, index) in list" class="el-every" :data-id="item.id" @click="addclass($event, index)" :class="{light: now(index)}" @dblclick='toPlay($event)'>
        <td>{{index+1}}</td>
        <td>*</td>
        <td>{{item.name}}</td>
        <td v-for="k in item.song">
          <span>{{k.name}}</span>
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
    list: {},
  },
  data() {
    return {
      d: [],
      t: [],
    };
  },
  // created() { // console.log('ok'); // },

  mounted() {
    this.go();
  },
  // watch: {
  //   list() {
  //     this.go();
  //     console.log(this.t);
  //   },
  // },
  methods: {
    go() {
      const list = this.list;
      // console.log(this.list);
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
          // console.log(obj);
          this.d.push(obj);
        });
        this.t.push(this.d);
        this.d = [];
      });
    },
    addclass(event, index) {
      this.d = index;
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
  },
};

</script>
<style lang='scss'>
.applist {
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
      .el-th {
        border: 1px solid black;
        border-top: none;
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
    }
    .light {
      background: yellow;
    }
  }
}

</style>
