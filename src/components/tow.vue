<template>
  <div class="tow">
    <div class="tab">
      <router-link to="one" class="now">个性推荐</router-link>
      <router-link to="tow" >歌单</router-link>
      <router-link to="tow" >歌手</router-link>
      <router-link to="tow" >歌手</router-link>
      <router-link to="tow" >歌手</router-link>
    </div>
    <h2>{{con}}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: this.$router.params,
    };
  },
  computed: {
    con() {
      // return this.$router.params;
      console.log(this.$route);
      // console.log(this.$route);
      return 1;
    },
  },
};
</script>
<style lang="scss">
  .tow{
  }
</style>
