<template>
  <div class="applist-head">
    <div class="applist-head-covering">
      <img v-lazy="list.coverImgUrl" height="100%" width="100%">
    </div>
    <div class="applist-head-name">
      <span class="al-h-h">{{switchTab}}</span><span class="al-h-t">{{list.name}}</span>
      <div v-if="tab ==='A'">
        <div class="applist-h-i">
          <span class="al-h-i"><img :src="list.createPic" height="100%" ></span>
          <span class="al-h-n">{{list.createName}}</span>
          <span class="al-h-time">{{list.createTime}}</span>
        </div>
        <div class="applist-h-it">标签: &nbsp; &nbsp;
          <span v-for="item in list.tags" style="color:blue">{{item}}/</span>
        </div>
        <div><span>简介: &nbsp; &nbsp;</span> <span class="applist-h-d">{{list.description}}</span></div>
      </div>
      <div v-else-if="tab ==='B'">
        <div>{{list.alias}}</div>
        <div>单曲数:{{list.musicSize}}</div>
        <div>专辑数:{{list.albumSize}}</div>
      </div>
      <div v-else-if="tab ==='C'">
        <div>{{list.song}}</div>
        <div>{{list.publishTime}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tab: {
      type: String,
      default: 'A',
    },
    list: {},
  },
  computed: {
    switchTab() {
      if (this.tab === 'A') {
        return '歌单';
      } else if (this.tab === 'B') {
        return '歌手';
      } else if (this.tab === 'C') {
        return '专辑';
      }
    },
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
