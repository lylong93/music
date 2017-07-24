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
      console.log(res);
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
  changeMusicId(state, id) {
    state.musicId = id;
  },
};

export default mutations;
