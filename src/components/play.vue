<template>
  <div class="play-wrapper">
    <div class="play-contral">
      <div class="btn prev">prev</div>
      <div class="btn">||</div>
      <div class="btn next">next</div>
    </div>
    <div class="progress-wrapper">
      <span class="progress-time">00:22</span>
      <span class="progress-bar"></span>
      <span class="progress-timeEnd">05:00</span>
    </div>
    <audio></audio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'play',
    };
  },
};
</script>
<style lang="scss">
  .play-wrapper{
    display: flex;
    position: fixed;
    bottom:0;
    width: 100%;
    height: 70px;
    border: 1px solid rgb(128,128,128);
    background: rgb(255,255,255);
    .play-contral {
      // flex:0 1 200px;
      display: flex;
      align-items:center;
      justify-content:space-between;
      width: 200px;
      height: 70px;
      border: 1px solid black;
      .btn{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgb(198,47,47);
      }
    }
    .progress-wrapper {
      width: 700px;
      background: yellow;
      .progress-time{
        // font-size: 10px;
        // display: inline-block;
      }
      .progress-bar{
        display: inline-block;
        width: 500px;
        height: 10px;
        background: rgb(128,128,128);
      }
      .bar-scroll{
        display:inline-block;
        width: 109px;
        height: 10px;
        background: red;
      }
    }
  }
</style>
