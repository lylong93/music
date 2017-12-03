<template>
  <div class="applist">
    <div class="applist-head">
      <div class="applist-head-covering">
        <img :src="list.coverImgUrl" height="100%" width="100%" >
      </div>
      <div class="applist-head-name">
        <span class="al-h-h">歌单</span><span class="al-h-t">{{list.name}}</span>
        <div class="applist-h-i">
          <span class="al-h-i"><img :src="list.creator.avatarUrl" height="100%" ></span>
          <span class="al-h-n">{{list.creator.nickname}}</span>
          <span class="al-h-time">2017-08-16创建</span>
        </div> 
        <div> &nbsp; </div>
        <div class="applist-h-it">标签: &nbsp; &nbsp;
          <span v-for="item in list.creator.expertTags" style="color:blue">{{item}}/</span>
        </div> 
        <div><span>简介: &nbsp; &nbsp;</span> <span class="applist-h-d">{{list.description}}</span></div>
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
      haveAdd: false,
    };
  },
  created() {
    this.init();
  },
  computed: {
  },
  watch: {
    list() {
      this.haveAdd = false;
    },
  },
  methods: {
    init() {
      const id = this.$route.query.id;
      api.forvue.getAppList(id).then((res) => {
        this.list = res.data.playlist;
        console.log(this.list);
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
          console.log('go');
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
.applist{
  .applist-head{
    height: 250px;
    display: flex;
    .applist-head-covering{
      flex: 0 0 180px;
      width: 180px;
      height: 180px;
      margin: 10px 50px;
    }
    .applist-head-name{
      flex: 0 0 700px;
      margin-top:10px;
      .al-h-h{
        display: inline-block;
        height: 28px;
        width: 50px;
        line-height: 28px;
        text-align: center;
        font-size: 10px;
        color:rgb(255,255,255);
        background: rgb(203, 61, 61);
       
      }
      .al-h-t{
        margin-left: 8px;
        font-size: 23px;
        vertical-align: bottom;
      }
      .applist-h-i{
        color: rgba(0, 0, 0, .5);
        margin: 10px 0;
        .al-h-i img{
          display: inline-block;
          height: 50px;
          width: 50px;
          border-radius: 50%;
        }
        .al-h-n{
          font-size: 17px;
          margin: 0 15px;
          color:rgba(0, 0, 0, .7);
        }
        .al-h-time{
          font-size: 15px;
        }
      }
      .applist-h-it {
        margin: 8px 0;
      }
      .applist-h-d{
        display: inline-block;
        height: 30px;
        width: 500px;
        font-size: 15px;
        color:rgba(0, 0, 0, .7);
        white-space:nowrap; 
        text-overflow:ellipsis;
        overflow: hidden;
        vertical-align: top;
      };
    }
  }
  .applist-main{
    .applist-main-head{
      height: 30px;
      padding: 0 30px;
      border-bottom: 1px solid rgb(203, 61, 61);
      .a-m-h-tab{
        float: left;
        display: inline-block;
        width: 100px;
        line-height: 30px;
        text-align: center;
        margin: 0 3px;
        background: rgb(203, 61, 61);
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
