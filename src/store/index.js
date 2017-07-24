import vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

vue.use(Vuex);

const state = {
  musicUrl: null,
  musicState: false,
  playshow: false,
  lrc: 123,
  musicId: null,
  count: 6,
  banners: [],
  recomList: [],
};
export default new Vuex.Store({
  state,
  mutations,
});
