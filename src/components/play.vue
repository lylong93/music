<template>
  <div class="play-wrapper">
    <div class="play-contral">
      <div class="btn prev">prev</div>
      <div class="btn" @click='goplay()'>{{playStated}}</div>
      <div class="btn next" @click='go()'>next</div>
    </div>
    <div class="progress-wrapper">
      <span class="progress-time">{{currentTime}}</span>
      <span ref= "span" @click="go()" class="progress-bar" >
        <i ref="i" class="progress-scroll">k</i>
      </span>
      <span class="progress-timeEnd">{{duration}}</span>
      <span class="progress-voice" @click="voice()">voice</span>
      <span class="progress-list" @click="show()">list</span>
    </div>
    <audio class="audio" ref = 'hidPlay' @timeupdate='con' :src=misurl controls="controls"></audio>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      d: 123,
      currentTime: 0,
      doo: 0,
      msg: 'play',
      kk: this.test,
    };
  },
  watch: {
    currentTime() {
      this.do();
    },
    playState() {
      this.re();
    },
    misurl() {
      this.ee();
    },
  },
  methods: {
    goplay() {
      this.$store.commit('changeState');
    },
    con() {
      const time = this.$refs.hidPlay.currentTime;
      this.$store.commit('updataCurrentTime', time);
      this.currentTime = this.$refs.hidPlay.currentTime;
    },
    go() {
      this.$refs.i.style.width = '30px';
    },
    do() {
      const a = this.$refs.span.offsetWidth;
      const b = this.$refs.hidPlay.duration;
      const c = a / b;
      this.doo = this.doo + c;
      this.$refs.i.style.width = (c * this.currentTime) + 'px';
    },
    voice() {
      console.log(this.$refs.hidPlay.volume);
    },
    re() {
      if (this.playState === true) {
        this.$refs.hidPlay.play();
      } else {
        this.$refs.hidPlay.pause();
      }
    },
    ee() {
      this.$refs.hidPlay.load();
      /* eslint-disable , prefer-arrow-callback*/
      /* 延迟执行 避免load和play冲突*/
      const that = this;
      setTimeout(function () {
        console.log('hi');
        that.$refs.hidPlay.play();
      }, 1);
    },
    show() {
      this.$store.commit('changeMinlist');
    },
  },
  computed: {
    playStated() {
      if (this.$store.state.musicState) {
        return '||';
      } else {
        return '^';
      }
    },
    duration() {
      return this.d;
    },
    ...mapState({
      playState: state => state.musicState,
      misurl: state => state.musicUrl,
    }),
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
          border-radius: 10px;
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
      .progress-voice {
        width: 30px;
        height: 30px;
        margin: 20px;
        background: black;
      }
      .progress-list {
        width: 30px;
        height: 30px;
        margin: 20px;
        background: black;
      }
      @media screen and (max-width: 480px) {
        display: none;
      }
    }
    .audio {
      display: none;
    }
  //   .min-list{
  //   width: 35%;
  //   height: 70%;
  //   background: red;
  //   position: fixed;
  //   bottom: 70px;
  //   right: 0px;
  //   z-index: 90;
  // }
  } 
</style>
