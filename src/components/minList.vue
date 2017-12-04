<template>
  <div class="min-list">
    <div class="min-list-head">
      <span class="m-l-h-l m-l-height">播放列表</span>
      <span class="m-l-h-l">历史记录</span>
    </div>
    <div class="min-list-body">
      <div class="min-list-body-t">
        <span>总{{this.playlist.length}}首</span>
        <span>
              <span>收藏全部</span>
        <span>清单</span>
        </span>
      </div>
      {{this.playlist}}
    </div>
  </div>
</template>
<script>


</script>
<style lang='scss'>
.min-list {
  width: 37%;
  height: 70%;
  background: red;
  box-shadow: -1px -1px 1px black;
  position: fixed;
  bottom: 70px;
  right: 0px;
  z-index: 90;
  .min-list-head {
    display: flex;
    justify-content: center;
    height: 50px;
    width: 100%;
    background: rgba(147, 147, 147, .2);
    font-size: 0;
    .m-l-h-l {
      display: inline-block;
      font-size: 16px;
      width: 100px;
      height: 30px;
      margin: auto 0;
      line-height: 30px;
      text-align: center;
      border: 1px solid rgba(147, 147, 147, .3);
      background: rgb(255, 255, 255);
    }
    .m-l-height {
      background: rgb(147, 147, 147);
      color: rgb(255, 255, 255);
    }
  }
  .min-list-body {
    .min-list-body-t {
      display: flex;
      justify-content: space-between;
      padding: 0 30px;
      border: 1px solid rgba(147, 147, 147, .3);
      line-height: 30px;
      font-size: 16px;
    }
  }
}

</style>
