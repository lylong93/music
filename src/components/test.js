import vue from 'vue';
import Vuex from 'vuex';

vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 6,
  },
});
// const a = store;
// console.log(a);

export default {
  store,
};
