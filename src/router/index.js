import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
// import carousel from '@/components/carousel';
import one from '@/components/one';
import tow from '@/components/tow';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect: { name: 'one' },
      // children: [
      //   {
      //     // name: 'one',
      //     path: 'one',
      //     component: one,
      //   },
      //   {
      //     path: 'tow',
      //     component: tow,
      //   },
      // ],
    },
    {
      path: '/one',
      name: 'one',
      component: one,
    },
    {
      path: '/tow',
      component: tow,
    },
  ],
});
