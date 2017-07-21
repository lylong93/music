import axios from 'axios';
import url from './urlconfig';

export default {
  getrecomList() {
    return axios.get(url.recomList);
  },
  getAppList(id) {
    return axios.get(url.applistUrl + '?id=' + id);
  },
};
