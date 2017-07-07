<template>
  <div class="block">
    <span class="demonstration">{{count}}</span>
    <el-carousel height="350px">
      <el-carousel-item v-for="item in msg" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div> 
</template>

<script>
import go from '../api';
// import te from './test';

go.test();

export default {
  // name: 'hello',
  data() {
    return {
      msg: 7,
      test: 5,
      gg: go,
    };
  },
  computed: {
    count() {
      // console.log(this.$store);
      // console.log(this.$store.state.count);
      return this.$store.state.count;
    },
    kkkkk() {
      // console.log(go.test);
      return go.test();
    },
  },
};
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
