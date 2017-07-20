<template>
  <div class="one">
    <div class="tab">
      <router-link to="one" class="now">个性推荐</router-link>
      <router-link to="tow" >歌单</router-link>
      <router-link to="tow" >歌手</router-link>
      <router-link to="tow" >歌手</router-link>
      <router-link to="tow" >歌手</router-link>
    </div>
    <v-carousel></v-carousel>
    <div class="list">
      <div class="list-head">
        <span class="title">推荐歌单</span>
        <span class="more">更多</span>
      </div>
      <div v-for="item in list" class='item'>{{item.name}}</div>
    </div>
  </div>
</template>
<script>
import carousel from './carousel';

export default {
  data() {
    return {
      msg: 'one',
      list: this.$store.state.recomList,
    };
  },
  computed: {
    count() {
      console.log(this.$store.state.recomList);
      return this.list[0];
    },
  },
  created() {
    this.init();
    this.$nextTick(() => {
      this.init();
      // this.con();
    });
  },
  watch: {
    list: 'init',
  },
  methods: {
    init() {
      this.$store.commit('getC');
      // console.log(this.$store.state.banners);
      // console.log('ok');
    },
  },
  components: {
    'v-carousel': carousel,
  },
};
</script>
<style lang="scss">
  .one{
    // width: 1000px;
    height: 900px;
    .tab{
      display: flex;
      justify-content: center;
      height: 30px;
      border-bottom: 1px solid black;
      margin:10px 0;
      a{
        color:black;
        margin: 0 30px;
        padding: 0 20px;
        text-decoration: none;
        &:hover{
          color: red;
        }
      }
      @media screen and (max-width: 480px) {
        justify-content: space-around;
        a{
          margin: 0;
          padding: 0;
          font-size: 12px;
        }
      }
      .now {
        border-bottom: 3px solid red;
        margin: 0 0 -1px 0;
        color: red;
      }
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
      justify-content: center;
      .list-head{
        border-bottom:1px solid red;
        display: flex;
        flex:1 1 1000px;
        justify-content: space-between;
        margin: 10px;
        font-size: 25px;
        line-height: 25px;
        .more, .title {
          margin: 0 30px 10px 30px;
        }
        .more{
          font-size: 16px;
        }
        @media screen and (max-width: 480px) {
          font-size: 12px;
          line-height: 12px;
          .more{
            font-size: 12px;
          }
        }
      }
      .item{
        width: 150px;
        height: 150px;
        margin: 10px;
        border: 1px solid red;
        @media screen and (max-width: 480px){
          width: 100px;
          height: 100px;
        }
      }
    }
  }
</style>
