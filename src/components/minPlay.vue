<template>
  <div class="minPlay">
    om
    <!-- <div class="minPlay-pic">
  <img :src="detail.songs[0].al.picUrl">
</div>
<div class="minPlay-detali">
  <div class="m-d-name">{{detail.songs[0].name}}</div>
  <div class="m-d-player">{{detail.songs[0].ar[0].name}}</div>
</div>
 -->
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
.minPlay {
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid rgb(128, 128, 128);
  color: black;
  .minPlay-pic {
    height: 79px;
    width: 79px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .minPlay-detali {
    display: felx;
    align-items: center;
    flex: 0 1 110px;
    height: 60px;
    margin: 0 10px;
    background: blue;
    .m-d-player {
      height: 30px;
      width: 110px;
      border: 1px solid red;
      font-size: 14px;
      text-align: 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}

</style>
