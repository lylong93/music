<template>
  <div class="block">
    <el-carousel  class='arousel' >
      <el-carousel-item class="el"  v-for="item in arr " :key="item">
        <img :src="item" height="100%">
      </el-carousel-item>
    </el-carousel>
  </div> 
</template>

<script>
const arr = [
  'http://p3.music.126.net/s25q2x5QyqsAzilCurD-2w==/7973658325212564.jpg',
  'http://p4.music.126.net/V9-MXz6b2MNhEKjutoDWIg==/7937374441542745.jpg',
  'http://p3.music.126.net/e0gGadEhjur2UuUpDF9hPg==/7788940372125389.jpg',
];

export default {
  data() {
    return {
      msg: 7,
      test: 5,
      arr,
    };
  },
  computed: {
    count() {
      // console.log(this.$store.state.count);
      return this.$store.state.count;
    },
    cou() {
      return this.$store.state.banner;
    },
  },
  methods: {

  },
  created() {
    this.$store.commit('getB');
    // console.log(this.$store.state.count);
  },
};
</script>

<style lang='scss'>
  .block{
    width: 1000px;
    .el-carousel__container{
        height: 200px;
      }
    @media screen and (max-width: 480px) {
      width: 300px;
      height: 100px;
      .el-carousel__container{
        height: 100px;
      }
      .el {
        height: 100px; 
      }
    }
  }
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
