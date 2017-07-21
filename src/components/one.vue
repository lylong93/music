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
      <div @click="detail($event)" v-for="item in list" class='item'>
        <img :src="item.picUrl" height="100%">
        <div class="name">{{item.name}}</div>
        <span class="playCount">{{item.playCount}}</span>
        <span class="copywriter">{{item.copywriter}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import carousel from './carousel';
import api from '../api';

const a = api.forvue.getrecomList();

export default {
  data() {
    return {
      msg: 'one',
      list: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      a.then((res) => {
        const list = res.data.result.slice(0, 5);
        this.list = list;
        // console.log(list);
      })
      .catch((err) => {
        console.log(err);
      });
    },
    detail(event) {
      /* eslint-disable , no-underscore-dangle, */
      // if (!event._constructed) {
      //   return;
      // }
      event.stopPropagation();
      event.preventDefault();
      console.log(event);
      // const id = 123;
      this.$router.push({ path: 'applist', query: { userId: 123 } });
    },
  },
  components: {
    'v-carousel': carousel,
  },
};
</script> 
<style lang="scss">
  .one{
    .tab{
      display: flex;
      justify-content: center;
      height: 30px;
      border-bottom: 1px solid black;
      margin-bottom: 10px;
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
        position: relative;
        width: 150px;
        height: 150px;
        margin: 10px;
        &:hover{
          cursor: pointer;
          .playCount{
            display: none;
          }
          .copywriter{
            display: block;
          }
        }
        @media screen and (max-width: 480px){
          width: 100px;
          height: 100px;
        }
        .name{
          font-size: 10px;
        }
        .playCount{
          position: absolute;
          top:0;
          right:0;
          font-size: 12px;
          color:rgb(255,255,255);
        }
        .copywriter{
          display: none;
          position: absolute;
          top:0;
          left:0;
          width: 100%;
          padding: 5px 0;
          line-height: 12px;
          font-size: 12px;
          background: rgba(0,0,0,.3);
          color:rgb(255,255,255);
        }
      }
    }
  }
</style>
