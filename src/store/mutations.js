import api from '@/api';

const banner = api.getBanner();
const list = api.getrecomList();
/* eslint-disable , no-unused-expressions, no-param-reassign */
const mutations = {
  get(state) {
    state.count += 1;
  },
  getB(state) {
    banner.then((res) => {
      state.banners = res.data.banners;
      // console.log('hi');
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
    state.count += 1;
  },
  getC(state) {
    list.then((res) => {
      state.recomList = res.data.result;
      // console.log('hi');
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  },
};

export default mutations;
