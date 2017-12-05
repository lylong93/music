<template>
  <div class="playshow">
    <div class="playshow-main">
      <div class="playshow-main-head">
        <div class="playshow-main-head-disc" @click="ddd">
          <div class="tow">
            <img :src="detail.songs[0].al.picUrl" width="100%">
          </div>
        </div>
        <div class="playshow-main-head-detal">
          <div class="pmhd-player-wrapper">
            <div class="pmhd-player-name">{{detail.songs[0].name}}</div>
            <div class="pm-n-wr">
              <span class="pm-n-i">专辑: {{detail.songs[0].al.name}}</span>
              <span class="pm-n-i">歌手: {{detail.songs[0].ar[0].name}}</span>
              <span class="pm-n-i">来源: 搜索页</span>
            </div>
          </div>
          <div class="pmhd-lrc-wrapper" ref="sco">
            <div class="pmhd-lrc" ref="sc">
              <div class="pmhd-lrc-item" v-for="(item, key, index) in this.lrc" :class="{h: test(key)}" :data-id="key">{{item}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="gradient">
      </div>
      <div class="closeBtn" @click="close"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      d: 0,
      ti: 0,
      num: 0,
    };
  },
  computed: {
    ...mapState({
      lrc: state => state.lrc,
      playshow: state => state.playshow,
      musicId: state => state.musicId,
      currentTime: state => state.currentTime,
      detail: state => state.detail,
    }),
    // test() {
    //   return true;
    // },
  },
  watch: {
    musicId() {
      this.$store.commit('getMusicLrc', this.musicId);
      this.num = 0;
    },
    currentTime() {
      this.scrll();
      this.ddd();
    },
  },
  methods: {
    close() {
      this.$store.commit('changePlayShow');
    },
    /*
    歌词待优化
     */
    scrll() {
      const list = this.$refs.sc.childNodes;
      const ok = this.currentTime;
      const tt = ok.toFixed(1);
      for (const key in list) {
        if (Object.prototype.hasOwnProperty.call(list, key)) {
          const p = list[key].dataset.id;
          const ddd = parseFloat(p);
          if (ddd > tt - 1 && ddd < tt + 1) {
            this.num = key;
            return;
          }
        }
      }
    },
    ddd() {
      this.$refs.sco.scrollTop = this.num * 20;
    },
    test(key) {
      const o = parseFloat(key);
      const d = parseFloat(this.currentTime);
      if (o < d + 2 && o > d - 2) {
        return true;
      } else {
        return false;
      }
    },
  },
};

</script>
<style lang="scss">
.playshow {
  position: fixed;
  top: 50px;
  bottom: 70px;
  width: 100%;
  z-index: 99;
  overflow: auto;
  background: rgb(255, 255, 255);
  .playshow-main {
    width: 85%;
    margin: 0 auto;
    overflow: hidden;
    .playshow-main-head {
      display: flex;
      justify-content: space-around;
      background-image: url('../common/img/maikefen.jpg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      box-shadow: 0 0 500px 500px rgba(255, 255, 255, .85) inset;
      height: 400px;
      .playshow-main-head-disc {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 70px;
        flex: 0 0 330px;
        height: 330px;
        background: linear-gradient(black, rgb(128, 128, 128), black);
        box-shadow: 0 0 3px #999 inset;
        border: 1px solid black;
        border-radius: 50%;
        animation: myfirst 30s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        @keyframes myfirst {
          0% {
            transform: rotate(0deg)
          }
          ;
          100% {
            transform: rotate(360deg)
          }
          ;
        }
        .tow {
          align-items: center;
          line-height: 190px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 3px solid black;
          background: rgb(255, 255, 255);
          overflow: hidden;
        }
      }
      .playshow-main-head-detal {
        margin-top: 25px;
        width: 500px;
        .pmhd-player-wrapper {
          margin-bottom: 20px;
          .pmhd-player-name {
            font-size: 26px;
          }
          .pm-n-wr {
            margin-top: 18px;
            display: flex;
            justify-content: space-around;
          }
        }
        .pmhd-lrc-wrapper {
          position: relative;
          width: 100%;
          height: 390px; // background: red;
          overflow: auto;
          .pmhd-lrc {
            position: absolute;
            min-height: 700px;
            width: 100%;
            .pmhd-lrc-item {
              height: 30px;
              line-height: 30px;
            }
            .h {
              color: red;
            }
          }
        }
      }
    }
    .gradient {
      height: 100px;
      width: 100%;
      background: linear-gradient(rgba(128, 128, 128, .3), rgb(255, 255, 255));
    }
    .closeBtn {
      width: 20px;
      height: 20px;
      margin: 50px;
      background: blue;
    }
  }
}

</style>
