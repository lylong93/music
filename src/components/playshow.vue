<template>
  <div class="playshow">
    <div class="closeBtn" @click="close" ></div>
    <div>{{lrc}}</div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import initLrc from '.././common/js/initLrc';

export default {
  data() {
    return {
      d: 0,
      // lrc: 333,
    };
  },
  computed: {
    ...mapState({
      lrc: state => state.lrc,
      playshow: state => state.playshow,
      musicId: state => state.musicId,
    }),
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
    // height: 190px;
    // height: 900px;
    background: yellow;
    .closeBtn{
      width: 20px;
      height: 20px;
      margin: 50px;
      background: blue;
    }
  }
</style>
