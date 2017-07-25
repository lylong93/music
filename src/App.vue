<template>
  <div id="app">
    <div class="head" @click="g()"></div>
    <div class="body-wrapper">
      <div class="side">
        <router-link to="one" >发现音乐</router-link>
        <router-link to="tow" >私人FM</router-link>
        <div class="minPlay" v-show="ifshow" @click="show"></div>
      </div>
      <div class='body' ref = 'scorll'>
        <router-view class='test'></router-view>
      </div>
    </div>
    <v-play></v-play>
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
  // overflow: hidden;
  text-align: center;
  .head{
    width:100%;
    height: 70px;
    background: red;
  }
  .body-wrapper {
    display: flex;
    width: 100%;
    position:absolute;
    top:70px;
    bottom: 75px;
    .side{
      position:relative;
      flex: 0 1 300px;
      border: 1px solid red;
      color: rgb(128, 128, 128);
      .minPlay{
        width: 100%;
        height: 100px;
        position: absolute;
        bottom: 0;
        border-top:1px solid rgb(128, 128, 128);
        background: red;
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
      background: rgb(255,255,123);
      .test{
        flex: 0 1 1000px;
        width: 0;
        min-height: 700px;
        margin: 3px auto;
        background: rgb(255,255,255);
      }
    }
  }
}
</style>
