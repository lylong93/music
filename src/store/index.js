import vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

vue.use(Vuex);

// console.log(g.main);
const banner = api.main.getBanner();
const test = api.main.test();
console.log(banner);
console.log(test);
const state = {
  count: 6,
  banner: [],
};
 /* eslint-disable no-shadow, no-unused-expressions, no-param-reassign */
const mutations = {
  get(state) {
    state.count += 1;
  },
  getB(state) {
    banner.then((res) => {
      state.banner = res.data.banners;
      // console.log('hi');
      console.log(res.data);
    });
    state.count += 1;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
