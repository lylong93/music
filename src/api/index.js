import axios from 'axios';
import url from './urlconfig';

export default {
  getBanner() {
    return axios.get(url.bannerURl);
  },
  getrecomList() {
    return axios.get(url.recomList);
  },
};
