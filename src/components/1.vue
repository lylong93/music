<template>
  <div id="app">
    <div class="head"></div>
    <div class="body-wrapper">
      <div class="side">
        <router-link to="one" >one</router-link>
        <router-link to="tow" >tow</router-link>
      </div>
      <div class='body' ref = 'scorll'>
        <router-view ></router-view>
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
    overflow: hidden;
    .side{
      flex: 1 1 100px;
      border: 1px solid red;
      // background: blue;
    }
    .body {
      display: flex;
      flex: 6 1 auto;
      overflow: hidden;
      background: rgba(0,0,0,.5);
    }
  }
}
</style>



<template>
  <div id="app">
    <div class="head"></div>
    <div class="body-wrapper">  
      <div class="side">
        <router-link to="one" >one</router-link>
        <router-link to="tow" >tow</router-link>
      </div>
      <div class='body' ref = 'scorll'>
        <div class='main'>
          <router-view ></router-view>
        </div>
      </div>
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
  // mounted() {
  //   this.$nextTick(() => {
  //     this.initScroll();
  //     // this.con();
  //   });
  // },
  methods: {
    initScroll() {
      this.meunScroll = new BSscroll(this.$refs.scorll, {
        click: true,
      });
      console.log('ok');
    },
    con() {
      this.$nextTick(() => {
        this.initScroll();
      });
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
#app {
  overflow: hidden;
  text-align: center;
  .head{
    width:100%;
    height: 70px;
    background: red;
  }
  .body-wrapper{
    display: flex;
    .side{
      flex: 1 1 auto;
      border: 1px solid red;
      height: 600px;
    }
    .body {
      flex: 6 1 auto;
      position: relative;
      height: 500px;
      background: rgba(0,0,0,.5);
      overflow: hidden;
      .main{
        background: yellow;
        height: 900px;
        position:absolute;
        left: 100px;
        top:0;
      }
    }
  }
}
</style>
