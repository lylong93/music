import axios from 'axios';


// function _get(url) {
//   axios.get(url)
//     .then((res) => {
//         console.log(res.data);
//         return res.data;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
// }
export default {
  getBanner() {
    axios.get('/api/banner')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
