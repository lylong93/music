<template>
  <div>
    <div class="side-tab">
      <span class="s-t-title">推荐</span>
      <router-link to="one" class="s-t-every">发现音乐</router-link>
      <router-link to="tow" class="s-t-every">私人FM</router-link>
      <router-link to="#" class="s-t-every">MV</router-link>
      <router-link to="#" class="s-t-every">朋友</router-link>
    </div>
    <div class="side-tab">
      <span class="s-t-title">我的音乐</span>
      <router-link to="#" class="s-t-every">本地音乐</router-link>
      <router-link to="#" class="s-t-every">下载管理</router-link>
      <router-link to="#" class="s-t-every">我的音乐云盘</router-link>
      <router-link to="#" class="s-t-every">我的歌手</router-link>
      <router-link to="#" class="s-t-every">我的MV</router-link>
    </div>
    <div class="side-tab">
      <span class="s-t-title">收藏的歌单</span>
      <router-link to="#" class="s-t-every">我喜欢的音乐</router-link>
      <router-link to="#" class="s-t-every">收藏
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'ok',
    },
  },
};

</script>
<style lang="scss">
.side-tab {
  display: block;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;
  font-size: 13px;
  text-indent: 30px;
  .s-t-title {
    flex: 0 1 20px;
    text-indent: 15px;
    color: rgba(0, 0, 0, .7);
  }
  .s-t-every {
    width: 100%;
    flex: 1 1 28px;
    line-height: 28px;
    color: rgba(0, 0, 0, .5);
  }
}

</style>
