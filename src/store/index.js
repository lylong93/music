import vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

vue.use(Vuex);

console.log(api.main.getBanner());
const state = {
  count: 6,
};

export default new Vuex.Store({
  state,
});
