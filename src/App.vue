<template>
  <div id="app">
    <div class="head"></div>
    <div class="side">
      <router-link to="one" >one</router-link>
      <router-link to="tow" >tow</router-link>
    </div>
    <div class='body' ref = 'scorll'>
      <router-view ></router-view>
    </div>
    <v-play></v-play>
    <!-- <div class="foot"></div> -->
  </div>
</template>

<script>
import BSscroll from 'better-scroll';
import play from './components/play';

export default {
  name: 'app',
  // created() {
  //   this.$nextTick(() => {
  //     this.initScroll();
  //     // this.con();
  //   });
  // },
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
@import './common/sass/index.scss';


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
  overflow: hidden;
  text-align: center;
  .head{
    // position:fixed;
    width:100%;
    height: 70px;
    background: red;
    // overflow: hidden;
  }
  .side{
    width: 100px;
    border: 1px solid red;
    // background: blue;
  }
  .body {
    overflow: hidden;
    position:absolute;
    top: 70px;
    bottom: 10px;
    left: 100px;
    // border: 1px solid black;
    background: rgba(0,0,0,.5);
  }
  .foot{
    position:fixed;
    bottom: 0;
    width:100%;
    height: 70px;
    background: yellow;
  }
}
</style>
