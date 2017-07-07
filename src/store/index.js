import vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

vue.use(Vuex);

// console.log(api.getBanner);
const data = api.getBanner();
const dd = function () {
  // const banners = data.banners;
  console.log(data);
  // return data;
};
const state = {
  count: 6,
  // data,
  dd,
};

export default new Vuex.Store({
  state,
});
