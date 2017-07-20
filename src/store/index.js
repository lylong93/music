import vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

vue.use(Vuex);

const state = {
  count: 6,
  banners: [],
  recomList: [],
};
export default new Vuex.Store({
  state,
  mutations,
});
