<template>
  <div class="one">
    <v-topRoute/>
    <v-carousel></v-carousel>
    <div class="list">
      <div class="list-head">
        <span class="title">推荐歌单</span>
        <span class="more">更多</span>
      </div>
      <div @click="detail($event)" v-for="item in list" class='item' :data-id="item.id">
        <img v-lazy="item.picUrl" height="100%">
        <div class="name">{{item.name}}</div>
        <span class="playCount">{{item.playCount}}</span>
        <span class="copywriter">{{item.copywriter}}</span>
      </div>
    </div>
    <div class="newSong">
      <div class="list-head">
        <span class="ns-head-title">最新音乐</span>
        <span class="more">更多</span>
      </div>
      <div class="ns-body">
        <div v-for="(item, index) in newSong" class='nsitem'>
          <div class="nsit-index">{{index + 1}}</div>
          <div class="nsit-pic">
            <img v-lazy="item.song.album.picUrl" height="100%">
          </div>
          <div class="nsit-name">
            <div>{{item.name}}</div>
            <div>{{item.song.artists[0].name}}</div>
          </div>
          <!-- <div>{{item.name}}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topRoute from '@/base/topRoute';
import carousel from './carousel';

import api from '../api';

const getrecomList = api.forvue.getrecomList();
const getPerNewSong = api.forvue.getPerNewSong();
export default {
  data() {
    return {
      msg: 'one',
      list: [],
      newSong: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      getrecomList.then((res) => {
        const list = res.data.result.slice(0, 5);
        this.list = list;
      }).catch((err) => {
        console.log(err);
      });
      getPerNewSong.then((res) => {
        const newSong = res.data.result;
        this.newSong = newSong;
      }).catch((err) => {
        console.log(err);
      });
    },
    detail(event) {
      const id = event.currentTarget.dataset.id;
      const tab = 'A';
      this.$router.push({ path: 'applist', query: { id, tab } });
    },
  },
  components: {
    'v-carousel': carousel,
    'v-topRoute': topRoute,
  },
};

</script>
<style lang="scss">
.one {
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    .list-head {
      border-bottom: 1px solid red;
      display: flex;
      flex: 1 1 1000px;
      justify-content: space-between;
      margin: 10px;
      font-size: 25px;
      line-height: 25px;
      .title {
        margin: 0 30px 10px 30px;
      }
      .more {
        font-size: 16px;
      }
      @media screen and (max-width: 480px) {
        font-size: 12px;
        line-height: 12px;
        .more {
          font-size: 12px;
        }
      }
    }
    .item {
      position: relative;
      width: 150px;
      height: 150px;
      margin: 10px;
      &:hover {
        cursor: pointer;
        .playCount {
          display: none;
        }
        .copywriter {
          display: block;
        }
      }
      @media screen and (max-width: 480px) {
        width: 100px;
        height: 100px;
      }
      .name {
        font-size: 10px;
      }
      .playCount {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 12px;
        color: rgb(255, 255, 255);
      }
      .copywriter {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 5px 0;
        line-height: 12px;
        font-size: 12px;
        background: rgba(0, 0, 0, .3);
        color: rgb(255, 255, 255);
      }
    }
  }
  .newSong {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .list-head {
      border-bottom: 1px solid red;
      display: flex;
      flex: 1 1 1000px;
      justify-content: space-between;
      margin: 10px;
      font-size: 25px;
      line-height: 25px;
      .more,
      .title {
        margin: 0 30px 10px 30px;
      }
      .more {
        font-size: 16px;
      }
      @media screen and (max-width: 480px) {
        font-size: 12px;
        line-height: 12px;
        .more {
          font-size: 12px;
        }
      }
    }
    .ns-body {
      display: flex;
      flex-wrap: wrap;
      width: 96%;
      border: 1px solid rgb(128, 128, 138);
      .nsitem {
        display: flex;
        align-items: center;
        flex: 0 1 50%;
        height: 55px;
        .nsit-index {
          margin: 0 10px;
        }
        .nsit-pic {
          width: 40px;
          height: 40px;
        }
        .nsit-name {
          margin: 0 10px;
        }
        &:hover {
          cursor: pointer;
          background: rgba(128, 128, 128, .3);
        }
      }
    }
  }
}

</style>
