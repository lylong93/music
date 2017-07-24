import axios from 'axios';
import url from './urlconfig';

const ourl = url.tostore;
export default {
  getBanner() {
    return axios.get(ourl.bannerURl);
  },
  getrecomList() {
    return axios.get(ourl.recomList);
  },
  getMusicUrl(id) {
    return axios.get(ourl.musicUrl + id);
  },
  getMusicLrc(id) {
    return axios.get(ourl.musicLrc + id);
  },
};
