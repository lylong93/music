import axios from 'axios';
import url from './urlconfig';

const ourl = url.tovue;
export default {
  getrecomList() {
    return axios.get(ourl.recomList);
  },
  getAppList(id) {
    return axios.get(ourl.applistUrl + id);
  },
  getPerNewSong() {
    return axios.get(ourl.personNewsongUrl);
  },
};
