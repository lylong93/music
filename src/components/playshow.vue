<template>
  <div class="playshow">
    <div class="closeBtn" @click="close" ></div>
    <div>{{currentTime}}</div>
    <div>{{showlrc}}</div>
    <!-- <div>{{ti}}</div> -->
    <!-- <div>{{lrc}}</div> -->
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
      // console.log(time);
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
      console.log(this.musicId);
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
  }
</style>
