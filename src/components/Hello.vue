<template>
  <div class="hello">
    <div class="head-wrapper">
    </div>
    <div class="body-wrapper">  
      <v-side class="side"></v-side>
      <router-view></router-view>
 <!--      <div class="body-main">  
        <v-carousel class='carousel'></v-carousel>
      </div> -->
    </div>
    <h1>{{ msg }}</h1>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
  </div>
</template>

<script>
import carousel from './carousel';
import side from './side';

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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello {
  .head-wrapper {
    height: 70px;
    background: rgb(198,47,47);
  }
  .body-wrapper {
    display: flex;
    .side {
       flex:0 1 300px;
       width: 300px;
    }
    .body-main { 
      display: flex;
      width: 1000px;
      flex:0 1 1000px;
      padding: 0 50px;
      .carousel {
        flex: 0 1 1000px;
        // width: 1000px;
      }
    }
    }
}
// h1, h2 {
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
