<template>
  <div id="app">
    <div class="head"></div>
    <div class="body-wrapper">
      <div class="side">
        <v-item/>
        <!-- <v-minPlay v-if="ifshow" /> -->
      </div>
      <div class='body'>
        <router-view class='test'></router-view>
      </div>
    </div>
    <!-- <v-play/> -->
    <!-- <v-minList v-show="this.minlist" /> -->
    <transition name="fade" enter-active-class="animated bounceInLeft" leave-active-class="animated flipOutY">
      <!-- <v-playshow v-show="this.playshow"></v-playshow> -->
    </transition>
  </div>
</template>
<script>
import { mapState } from 'vuex';
// import play from './components/play';
import playshow from './components/playshow';
import item from './components/item';
import minPlay from './components/minPlay';
import minList from './components/minList';

export default {
  data() {
    return {};
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
    // ifshow() {
    //   if (this.misurl === null) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // },
  },
  methods: {
    show() {
      this.$store.commit('changePlayShow');
    },
    dd() {
      // console.log(this.$route.name);
    },
  },
  components: {
    // 'v-play': play,
    'v-playshow': playshow,
    'v-item': item,
    'v-minPlay': minPlay,
    'v-minList': minList,
  },
};

</script>
<style lang='scss'>
#app {
  .head {
    width: 100%;
    height: 50px;
    background: #cb3d3d;
  }
  .body-wrapper {
    display: flex;
    width: 100%;
    position: absolute;
    top: 50px;
    bottom: 75px;
    .side {
      display: flex;
      flex-direction: column;
      position: relative;
      flex: 0 1 220px;
      border: 1px solid rgba(128, 128, 128, 0.15);
      overflow: auto;
      overflow-x: hidden;
      background: rgba(128, 128, 128, 0.15);
    }
    .body {
      display: flex;
      flex: 9 1 auto;
      overflow: auto;
      justify-conten: center; // background: rgb(255, 255, 123);
      .test {
        flex: 0 1 1000px;
        width: 0;
        margin: 0 auto;
        min-width: 1000px;
        background: rgb(255, 255, 255);
      }
    }
  }
}

</style>
