<template>
  <div class="playshow">
    <div class="closeBtn" @click="close" ></div>
    <div>{{currentTime}}</div>
    <div>{{showlrc}}</div>
    <div>{{ti}}</div>
    <!-- <div>{{lrc}}</div> -->
    <div class="one">
      <div class="tow"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import initLrc from '.././common/js/initLrc';

export default {
  data() {
    return {
      d: 0,
      // keys: [],
      ti: 0,
    };
  },
  computed: {
    ...mapState({
      lrc: state => state.lrc,
      playshow: state => state.playshow,
      musicId: state => state.musicId,
      currentTime: state => state.currentTime,
    }),
    showlrc() {
      const otime = this.currentTime;
      const dtime = otime.toFixed(1);
      const time = parseFloat(dtime);
      let t = 0;
      for (const key in this.lrc) {
        if (Object.prototype.hasOwnProperty.call(this.lrc, key)) {
          const ktime = parseFloat(key);
          if (ktime <= time + 1.5 && ktime >= time - 1.5) {
            this.ti = time;
            t = ktime.toFixed(1);
          }
          // this.keys.push(key);
        }
      }
      return this.lrc[t];
    },
  },
  created() {
    this.$store.commit('getMusicLrc', this.musicId);
  },
  watch: {
    musicId() {
      this.$store.commit('getMusicLrc', this.musicId);
    },
  },
  methods: {
    close() {
      this.$store.commit('changePlayShow');
    },
    test() {
      const t1 = initLrc(2);
      console.log(t1);
    },
  },
};

</script>
<style lang="scss">
  .playshow{
    position: fixed;
    top:70px;
    bottom: 70px;
    width: 100%;
    z-index: 99;
    background: yellow;
    .closeBtn{
      width: 20px;
      height: 20px;
      margin: 50px;
      background: blue;
    }
    .one{
      display: flex;
      align-items:center;
      justify-content:center;
      margin-left:30px; 
      width: 200px;
      height: 200px;
      background: linear-gradient(black,rgb(128,128,128),black);
      box-shadow: 0 0 3px #999 inset;
      border:1px solid black;
      border-radius: 50%;
      animation: myfirst 30s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      @keyframes myfirst
      {
        0% {transform:rotate(0deg) };
       100% {transform:rotate(360deg)}; 
      }
      .tow{
        align-items:center;
        line-height: 190px;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        border:3px solid black;
        background: rgb(255,255,255);
      }
    }
  }
</style>
