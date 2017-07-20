<template>
  <div id="app">
    <div class="head"></div>
    <div class="body-wrapper">
      <div class="side">
        <router-link to="one" >one</router-link>
        <router-link to="tow" >tow</router-link>
      </div>
      <div class='body' ref = 'scorll'>
        <router-view class='test'></router-view>
      </div>
    </div>
    <v-play></v-play>
  </div>
</template>

<script>
import BSscroll from 'better-scroll';
import play from './components/play';

export default {
  name: 'app',
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
      // this.con();
    });
  },
  methods: {
    initScroll() {
      this.meunScroll = new BSscroll(this.$refs.scorll, {
        click: true,
      });
    },
    con() {
      this.$nextTick(() => {
        this.initScroll();
      // this.con();
      });
      console.log(this.$route);
    },
  },
  components: {
    'v-play': play,
  },
  watch: {
    $route: 'con',
  },
};
</script>

<style lang='scss'>
// @import './common/sass/index.scss';

// #app {
//   /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   /*text-align: center;*/
//   color: #2c3e50;
//   background: yellow;
// /*  margin: 0 auto;
// /*  padding: 0;
//   width: 1300px;
//   box-shadow: 0 0 2px;*/
//   height: 500px;
//   width: 100px;
// }
body{
  // overflow: hidden;
  // overflow-x:hidden;
  // overflow-y:hidden;
}
#app {
  overflow: hidden;
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
    bottom:70px;
    overflow: hidden;
    .side{
      // height: 500px;
      flex: 1 1 350px;
      border: 1px solid red;
    }
    .body {
      display: flex;
      flex: 6 1 auto;
      justify-conten:center;
      height: 500px;
      background: rgb(255,255,135);
      .test{
        flex: 0 1 1000px;
        margin: 0 auto;
        height: 1000px;
        overflow: hidden;
        background: rgb(255,255,255);
      }
    }
  }
}
</style>
