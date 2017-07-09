import axios from 'axios';


// const a = function get(url) {
//   return axios.get(url);
// };

const url = '/api/top/playlist?limit=10&order=new';

export default {
  getBanner() {
    return axios.get(url);
  },
  test() {
    return axios.get(url).then((res) => {
      console.log(res.data);
    });
  },
};
