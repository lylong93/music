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
  getSongsList(page) {
    return axios.get(ourl.songsList + `?offset=${page}&limit=30`);
  },
  getsongAlbum(id) {
    return axios.get(ourl.songAlbum + `?id=${id}&limit=50`);
  },
  getalbumDetail(id) {
    return axios.get(ourl.albumDetail + `?id=${id}`);
  },
  getSongSheet(page) {
    return axios.get(ourl.songSheet + `?offset=${page}&limit=30`);
  },
};
