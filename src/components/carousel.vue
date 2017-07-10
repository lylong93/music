<template>
  <div class="block">
    <el-carousel height="350px">
      <el-carousel-item v-for="item in arr " :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
  </div> 
</template>

<script>
const arr = [
  'http://p3.music.126.net/s25q2x5QyqsAzilCurD-2w==/7973658325212564.jpg',
  'http://p3.music.126.net/s25q2x5QyqsAzilCurD-2w==/7973658325212564.jpg',
  'http://p3.music.126.net/s25q2x5QyqsAzilCurD-2w==/7973658325212564.jpg',
];

export default {
  // name: 'hello',
  data() {
    return {
      msg: 7,
      test: 5,
      arr,
    };
  },
  computed: {
    count() {
      console.log(this.$store.state.count);
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
