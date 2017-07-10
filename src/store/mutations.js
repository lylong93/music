import api from '@/api';

const banner = api.main.getBanner();
/* eslint-disable , no-unused-expressions, no-param-reassign */

const mutations = {
  get(state) {
    state.count += 1;
  },
  getB(state) {
    banner.then((res) => {
      state.banner = res.data.banners;
      // console.log('hi');
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
    state.count += 1;
  },
};

export default mutations;
