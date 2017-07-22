<template>
  <div id="app">
    <div class="head" @click="g()"></div>
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
// import BSscroll from 'better-scroll';
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
      // this.meunScroll = new BSscroll(this.$refs.scorll, {
      //   click: true,
      // });
    },
    con() {
      this.$nextTick(() => {
        this.initScroll();
      });
    },
    g() {
      this.meunScroll.getCurrentPage();
      console.log(this.meunScroll);
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
    position:relative;
    height: 500px;
    .side{
      flex: 0 1 200px;
      // width: 100px;
      border: 1px solid red;
    }
    .body {
      display: flex;
      flex: 9 1 auto;
      overflow: auto;
      justify-conten:center;
      background: rgb(255,255,123);
      .test{
        flex: 0 1 1000px;
        min-height: 700px;
        margin: 3px auto;
        background: rgb(255,255,255);
      }
    }
  }
}
</style>
