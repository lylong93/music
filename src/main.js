import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import VueLazyLoad from 'vue-lazyload';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import router from './router';
import store from './store';
import './common/sass/index.scss';
import './common/font/iconfont';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  /* eslint-disable */
  error: require('./common/img/maikefen.jpg'),
  loading: require('./face.jpg'),
  attempt: 1,
});

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
