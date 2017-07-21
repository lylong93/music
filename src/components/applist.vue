<template>
  <div class="applist">
    <div class="applist-head">
      <div class="applist-head-coverimg">
        <img src="http://mpic.tiankong.com/290/73d/29073dc17ac1f443088fd09f67d7e26a/640.jpg@360h" height="100%" width="100%">
      </div>
    </div>
    <div class="applist-main">
      <div class=""></div>
    </div>
  </div>
</template>

<script>
import api from '../api';

// const a = api.forvue.getAppList();
export default {
  data() {
    return {
      msg: 'one',
      list: [],
    };
  },
  created() {
    this.init();
    console.log(this.$router);
  },
  methods: {
    init() {
      // console.log(this.$router);
      api.forvue.getAppList(24381616).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style lang='scss'>
.applist{
  .applist-head{
    height: 250px;
    border: 1px solid black;
    .applist-head-coverimg{
      width: 180px;
      height: 180px;
      margin: 5px;
      background: red;
    }
  }
  .applist-main{

  }
}
</style>
