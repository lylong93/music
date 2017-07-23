import api from '@/api';

const oapi = api.forstore;
/* eslint-disable , no-unused-expressions, no-param-reassign */
const mutations = {
  getMusicURl(state, id) {
    oapi.getMusicUrl(id).then((res) => {
      state.musicUrl = res.data.data[0].url;
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
};

export default mutations;
