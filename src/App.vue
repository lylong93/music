<template>
  <div id="app">
    <div class="head" @click="g()"></div>
    <div class="body-wrapper">
      <div class="side">
        <div class="side-tab">
          <span class="s-t-title" @click="dd">推荐</span>
          <router-link to="one" class="s-t-every" :class="{slight: (this.$route.name === 'one' )}">发现音乐</router-link>
          <router-link to="tow" class="s-t-every">私人FM</router-link>
          <router-link to="#" class="s-t-every">MV</router-link>
          <router-link to="#" class="s-t-every">朋友</router-link>
        </div>
        <div class="side-tab">
          <span class="s-t-title">我的音乐</span>
          <router-link to="#" class="s-t-every">本地音乐</router-link>
          <router-link to="#" class="s-t-every">下载管理</router-link>
          <router-link to="#" class="s-t-every">我的音乐云盘</router-link>
          <router-link to="#" class="s-t-every">我的歌手</router-link>
          <router-link to="#" class="s-t-every">我的MV</router-link>
        </div>
        <div class="side-tab">
          <span class="s-t-title">收藏的歌单</span>
          <router-link to="#" class="s-t-every">我喜欢的音乐</router-link>
          <router-link to="#" class="s-t-every">收藏
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fullscreen"></use>
            </svg>
          </router-link>
        </div>
        <!-- <div class="minPlay" v-show="ifshow" @click="show">
          <div class="minPlay-pic">
            <img :src="detail.songs[0].al.picUrl">
          </div>
          <div class="minPlay-detali">
            <div class="m-d-name">{{detail.songs[0].name}}</div>
            <div class="m-d-player">{{detail.songs[0].ar[0].name}}</div>
          </div>
        </div> -->
      </div>
      <div class='body' ref = 'scorll'>
        <router-view class='test'></router-view>
      </div>
    </div>
    <v-play></v-play>
    <div class="min-list" v-show="this.minlist">{{this.playlist.length}}</div>
    <transition name="fade" enter-active-class="animated bounceInLeft"
    leave-active-class="animated flipOutY"> 
      <v-playshow v-show="this.playshow"></v-playshow>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import play from './components/play';
import playshow from './components/playshow';

export default {
  data() {
    return {
    };
  },
  name: 'app',
  computed: {
    ...mapState({
      misurl: state => state.musicUrl,
      playshow: state => state.playshow,
      detail: state => state.detail,
      minlist: state => state.minlist,
      playlist: state => state.playlist,
    }),
    ifshow() {
      if (this.misurl === null) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    show() {
      this.$store.commit('changePlayShow');
    },
    dd() {
      console.log(this.$route.name);
    },
  },
  components: {
    'v-play': play,
    'v-playshow': playshow,
  },
  watch: {
  },
};
</script>

<style lang='scss'>
#app {
  // text-align: center;
  .head{
    width:100%;
    height: 50px;
    background: #cb3d3d;
  }
  .body-wrapper {
    display: flex;
    width: 100%;
    position:absolute;
    top:50px;
    bottom: 75px;
    .side{
      display: flex;
      flex-direction:column;
      position:relative;
      flex: 0 1 220px;
      border: 1px solid rgba(128,128,128,0.15);
      overflow: auto;
      overflow-x:hidden;
      background: rgba(128,128,128,0.15);
      .side-tab{
        display: block;
        display: flex;
        flex-direction:column;
        width: 100%;
        margin-top:8px;
        font-size: 13px;
        text-indent: 30px;
        .s-t-title{
          flex: 0 1 20px;
          text-indent: 15px;
          color: rgba(0,0,0,.7);
        }
        .s-t-every{
          width: 100%;
          flex: 1 1 28px;
          line-height: 28px;
          color: rgba(0,0,0,.5);
          &:hover{
            cursor:pointer;
            color: rgba(0,0,0,1);
          }
        }
        .slight{
          background: rgba(128,128,128,.3);
          color: rgba(0,0,0,1);
        }
      }
      .minPlay{
        display: flex;
        align-items:center;
        width: 100%;
        height: 90px;
        position: absolute;
        bottom: 0;
        border-top:1px solid rgb(128, 128, 128);
        color:black;
        .minPlay-pic{
          height: 79px;
          width: 79px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .minPlay-detali{
          // display: felx;
          // align-items:center;     
          flex:0 1 110px;
          height: 60px;
          margin: 0 10px;
          // background: blue;
          .m-d-name,.m-d-player{
              height: 30px;
              width: 110px;
              // border: 1px solid red;
              font-size: 14px;
              text-align: 30px;
              white-space:nowrap;
              text-overflow:ellipsis;
              overflow: hidden;
          }
        }
        .oshow {
          background: yellow;
        }
      }
    }
    .body {
      display: flex;
      flex: 9 1 auto;
      overflow: auto;
      justify-conten:center;
      // background: rgb(255,255,123);
      .test{
        flex: 0 1 1000px;
        width: 0;
        min-height: 700px;
        margin: 3px auto;
        background: rgb(255,255,255);
      }
    }
  }
  .min-list{
    width: 35%;
    height: 70%;
    background: red;
    position: fixed;
    bottom: 70px;
    right: 0px;
    z-index: 90;
  }
}
</style>
