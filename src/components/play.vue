<template>
  <div class="play-wrapper">
    <div class="play-contral">
      <div class="btn prev">prev</div>
      <div class="btn" @click='wo()'>{{playState}}</div>
      <div class="btn next" @click='go()'>next</div>
    </div>
    <div class="progress-wrapper">
      <span class="progress-time">{{currentTime}}</span>
      <span ref= "span" @click="go()" class="progress-bar" >
        <i ref="i" class="progress-scroll">k</i>
      </span>
      <span class="progress-timeEnd">{{duration}}</span>
      <span class="progress-timeEnd">{{duration}}</span>
    </div>
    <audio ref = 'hidPlay' @timeupdate='con' :src=misurl controls="controls"></audio>
  </div>
</template>
<script>
// import formatDate from '.././common/js/date';

export default {
  data() {
    return {
      d: 123,
      currentTime: 0,
      doo: 0,
      msg: 'play',
      play: false,
      misurl: 'http://dl.stream.qqmusic.qq.com/C4000017Aiq80Jdn6s.m4a?vkey=7004E36E5C9E0391877E7C57C567627EBBD9254A87A9788D1A32A846957F98E1C3EC7F351923587DE0ECCEDA80ACCA4827B6DE1EBFD45B5B&guid=2530953995&uin=0&fromtag=66',
    };
  },
  watch: {
    currentTime() {
      this.do();
    },
  },
  methods: {
    wo() {
      this.play = !this.play;
      this.d = this.$refs.hidPlay.duration;
      // console.log(this.$refs.hidPlay.duration);
      if (this.play === true) {
        this.$refs.hidPlay.play();
      } else {
        this.$refs.hidPlay.pause();
      }
    },
    con() {
      this.currentTime = this.$refs.hidPlay.currentTime;
    },
    go() {
      this.$refs.i.style.width = '30px';
      // console.log(this.$refs.i);
    },
    do() {
      const a = this.$refs.span.offsetWidth;
      const b = this.$refs.hidPlay.duration;
      const c = a / b;
      this.doo = this.doo + c;
      this.$refs.i.style.width = (c * this.currentTime) + 'px';
      console.log(this.doo);
    },
  },
  computed: {
    playState() {
      if (this.play) {
        return '||';
      } else {
        return '^';
      }
    },
    duration() {
      // console.log(this.$refs);
      // this.d = this.$refs;
      return this.d;
    },
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
      flex:0 1 200px;
      display: flex;
      // flex: 0 1 100px;
      align-items:center;
      justify-content:space-between;
      // width: 200px;
      height: 70px;
      // border: 1px solid black;
      margin: 0 20px;
      .btn{
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 50%;
        background: rgb(203,61,61);
        color: rgb(255,255,255);
        &:hover {
          cursor: pointer;
          background:rgb(192,52,52);
        }
      }
      .prev, .next {
        width: 40px;
        height: 40px;
        line-height: 40px;
      }
    }
    .progress-wrapper {
      display: flex;
      flex: 1 1 300px;
      width: 300px;
      // line-height: 70px;;
      // background: yellow;
      margin-left:50px;
      .progress-bar {
        margin:30px 30px;
        flex:5 1 400px;
        position: relative;
        width: 400px;
        height: 6px;
        cursor: pointer;
        border-radius: 10px;
        background: rgb(128,128,128);
        .progress-scroll {
          position: absolute;
          top: 0;
          left: 0;
          height: 6px;
          width: 10px;
          background: red;
        }
      }
      .progress-time, .progress-timeEnd{
        margin:30px 10px;
        flex:0 1 50px;
        background: red;
        width: 50px;
        height: 20px;
      }
      // .bar-scroll{
      //   display:inline-block;
      //   width: 109px;
      //   height: 10px;
      //   background: red;
      // }
    }
    // .play-contral {
    //   background: red;
    //   flex:1 1 150px;
    // }
    // .progress-wrapper {
    //   background: black;
    //   flex:2 1 200px;
    // }
  }
</style>
