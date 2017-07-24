<template>
  <div class="applist">
    <div class="applist-head">
      <div class="applist-head-covering">
        <!-- <img :src="list.coverImgUrl" height="100%" width="100%" > -->
      </div>
      <div class="applist-head-name">
        <!-- <span>歌单</span>{{list.name}} -->
        <div>lll</div>
      </div>
    </div>
    <div class="applist-main">
      <div class="applist-main-head">
        <span class="a-m-h-tab">歌曲列表</span>
        <span class="a-m-h-tab">评论</span>
        <span class="a-m-h-tab">收藏</span>
      </div>
      <table class="evreylist">
        <tr>
          <th class='el-th'></th>
          <th class='el-th'>操作</th>
          <th class='el-th'>音乐标题</th>
          <th class='el-th'>歌手</th>
          <th class='el-th'>专辑</th>
        </tr>
        <tr v-for="(item, index) in list.tracks" class="el-every" :data-id="item.id" @click="addclass($event, index)" :class="{light: now(index)}"
        @dblclick='toPlay($event)'>
          <td>{{index+1}}</td>
          <td>*</td>
          <td>{{item.name}}</td>
          <td>{{item.ar[0].name}}</td>
          <td>{{item.al.name}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import api from '../api';

export default {
  data() {
    return {
      msg: 'one',
      list: {},
      d: null,
    };
  },
  created() {
    this.init();
  },
  computed: {
  },
  methods: {
    init() {
      const id = this.$route.query.id;
      console.log(id);
      api.forvue.getAppList(id).then((res) => {
        this.list = res.data.playlist;
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
    },
  },
};
</script>
<style lang='scss'>
.applist{
  .applist-head{
    height: 250px;
    .applist-head-covering{
      // display: inline-block;
      width: 180px;
      height: 180px;
      margin: 5px;
      background: red;
    }
    .applist-head-name{
      display: inline-block;
      vertical-align: top;
    }
  }
  .applist-main{
    .applist-main-head{
      height: 30px;
      padding: 0 30px;
      border-bottom: 1px solid red;
      .a-m-h-tab{
        float: left;
        display: inline-block;
        width: 100px;
        line-height: 30px;
        margin: 0 3px;
        background: red;
        color:rgb(255,255,255);
      }
    }
    .evreylist{
      width: 1000px;
      margin: 0 auto;
      border-collapse:collapse;
      .el-th{
        border:1px solid black;
        border-top:none;
        &:first-child{
          border-left:none;
        }
        &:last-child{
          border-right:none;
        }
      }
      tr{
        &:nth-child(odd){
          background: rgba(128,128,128,.15);
        }
        &:first-child{
          background: rgb(255,255,255);
        }
      }
    }
    .light{
      background: yellow;
    }
  }
}
</style>
