import axios from 'axios';
import url from './urlconfig';
import forvue from './forvue';

export default {
  forvue,
  getBanner() {
    return axios.get(url.bannerURl);
  },
  getrecomList() {
    return axios.get(url.recomList);
  },
};
