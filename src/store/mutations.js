import api from '@/api';
import initLrc from '@/common/js/initLrc';

const oapi = api.forstore;
/* eslint-disable , no-unused-expressions, no-param-reassign */
const mutations = {
  getMusicURl(state, id) {
    oapi.getMusicUrl(id).then((res) => {
      state.musicUrl = res.data.data[0].url;
      // console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  },
  getMusicLrc(state, id) {
    oapi.getMusicLrc(id).then((res) => {
      const lrc = res.data.lrc.lyric;
      const olrc = initLrc(lrc);
      state.lrc = olrc;
      // console.log(state.lrc);
    }).catch((err) => {
      console.log(err);
    });
  },
  getMusicDetail(state, id) {
    oapi.getMusicDetail(id).then((res) => {
      state.detail = res.data;
      // console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  },
  changeState(state) {
    state.musicState = !state.musicState;
  },
  startPlay(state) {
    state.musicState = true;
  },
  changePlayShow(state) {
    state.playshow = !state.playshow;
  },
  changeMinlist(state) {
    state.minlist = !state.minlist;
  },
  changeMusicId(state, id) {
    state.musicId = id;
  },
  updataCurrentTime(state, time) {
    state.currentTime = time;
  },
  /* 播放列表 */
  addPalyList(state, n) {
    state.playlist.push(n);
    if (state.playlist.length > 100) {
      state.playlist.splice(0, state.playlist.length);
    }
  },
};

export default mutations;
