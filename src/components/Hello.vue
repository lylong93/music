<template>
  <div class="hello">
    <!-- <div class="head-wrapper">
    </div>
    <div class="body-wrapper">  
      <v-side class="body-side"></v-side>
      <router-view class="body-main"></router-view>
    </div> -->
    <!-- <v-play class='play'></v-play>   -->
  </div>
</template>

<script>
import carousel from './carousel';
import side from './side';
import one from './one';
import play from './play';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    'v-carousel': carousel,
    'v-side': side,
    'v-one': one,
    'v-play': play,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
   .hello{
    width: 100%;
   }
// .hello {
//    position: relative;
//    // height: 500px;
//   .head-wrapper {
//     position: fixed;
//     top: 0;
//     left: 0;
//     height: 136px;
//     width:100%;
//     background: rgb(198,47,47);
//   }
//   .body-wrapper {
//     display: flex;
//     .body-side {
//       position :fixed;
//       top:70px;
//       left:0;
//       flex:0 1 300px;
//       width: 300px;
//     }
//     .body-main { 
//       // position: absolute;
//       // top:30px;
//       // left: 300px;
//       // display: flex;
//       // border: 1px solid black;
//       // width: 1000px;
//       // height: 900px;
//       // flex:0 1 1000px;
//       // padding: 10px 50px;
//       // margin: 30px;
//       .carousel {
//         flex: 0 1 1000px;
//         // width: 1000px;
//       }
//     }
//   }
//   .play {
//     width: 700px;
//     position: fixed;
//     bottom: 0;
//     left: 0
//   }
// }
// // h1, h2 {
//   font-weight: normal;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   display: inline-block;
//   margin: 0 10px;
// }

// a {
//   color: #42b983;
// }
</style>
