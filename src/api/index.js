import axios from 'axios';

const test = function () {
  axios.get('/api/banner')
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
function getBanner() {
  axios.get('/api/banner')
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
export default {
  test,
  getBanner,
};
