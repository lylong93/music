import axios from 'axios';
import url from './urlconfig';

export default {
  getBanner() {
    return axios.get(url.bannerURl);
  },
  test() {
    return axios.get(url.bannerURl).then((res) => {
      console.log(res);
    });
  },
};
