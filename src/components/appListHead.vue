<template>
  <div class="applist-head">
    <div class="applist-head-covering">
      <img v-lazy="list.coverImgUrl" height="100%" width="100%">
    </div>
    <div class="applist-head-name">
      <span class="al-h-h">gg</span><span class="al-h-t">{{list.name}}</span>
      <div class="applist-h-i">
        <span class="al-h-i"><img :src="list.creator.avatarUrl" height="100%" ></span>
        <span class="al-h-n">{{list.creator.nickname}}</span>
        <span class="al-h-time">2017-08-16创建</span>
      </div>
      <div> &nbsp; </div>
      <div class="applist-h-it">标签: &nbsp; &nbsp;
        <span v-for="item in list.creator.expertTags" style="color:blue">{{item}}/</span>
      </div>
      <div><span>简介: &nbsp; &nbsp;</span> <span class="applist-h-d">{{list.description}}</span></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tab: {
      type: String,
      default: 1,
    },
    list: {},
  },
  // computed: {
  //   switchTab() {
  //     if (this.tab === 2) {
  //       return '歌手';
  //     } else {
  //       return '歌单';
  //     }
  //   },
  // },
  created() {
    // console.log(this.list);
  },
};

</script>
<style lang='scss'>
.applist-head {
  height: 250px;
  display: flex;
  .applist-head-covering {
    flex: 0 0 180px;
    width: 180px;
    height: 180px;
    margin: 10px 50px;
  }
  .applist-head-name {
    flex: 0 0 700px;
    margin-top: 10px;
    .al-h-h {
      display: inline-block;
      height: 28px;
      width: 50px;
      line-height: 28px;
      text-align: center;
      font-size: 10px;
      color: rgb(255, 255, 255);
      background: rgb(203, 61, 61);
    }
    .al-h-t {
      margin-left: 8px;
      font-size: 23px;
      vertical-align: bottom;
    }
    .applist-h-i {
      color: rgba(0, 0, 0, .5);
      margin: 10px 0;
      .al-h-i img {
        display: inline-block;
        height: 50px;
        width: 50px;
        border-radius: 50%;
      }
      .al-h-n {
        font-size: 17px;
        margin: 0 15px;
        color: rgba(0, 0, 0, .7);
      }
      .al-h-time {
        font-size: 15px;
      }
    }
    .applist-h-it {
      margin: 8px 0;
    }
    .applist-h-d {
      display: inline-block;
      height: 30px;
      width: 500px;
      font-size: 15px;
      color: rgba(0, 0, 0, .7);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      vertical-align: top;
    }
    ;
  }
}

</style>
