import vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

vue.use(Vuex);

const state = {
  musicUrl: null,
  musicState: false,
  playshow: false,
  minlist: false,
  lrc: 123,
  detail: 11,
  musicId: null,
  currentTime: 0,
  count: 6,
  banners: [],
  recomList: [],
  playlist: [],
};
export default new Vuex.Store({
  state,
  mutations,
});
