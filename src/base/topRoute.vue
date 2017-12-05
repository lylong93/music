<template>
  <div class="tab">
    <router-link to="one">个性推荐</router-link>
    <router-link to="#">歌单</router-link>
    <!-- <a to="#">主播电台</a> -->
    <router-link to="#">排行榜</router-link>
    <router-link to="songs">歌手</router-link>
    <!--     <a to="#">最新音乐</a> -->
  </div>
</template>
<script>
export default {};

</script>
<style lang="scss">
.tab {
  display: flex;
  justify-content: center;
  height: 30px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  a {
    color: black;
    margin: 0 20px;
    padding: 0 20px;
    text-decoration: none;
  }
  @media screen and (max-width: 480px) {
    justify-content: space-around;
  }
  .router-link-active {
    border-bottom: 3px solid #cb3d3d;
    margin: 0 0 -1px 0;
    color: #cb3d3d;
  }
}

</style>
