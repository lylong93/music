import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
// import carousel from '@/components/carousel';
import one from '@/components/one';
import tow from '@/components/tow';
import applist from '@/components/applist';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect: { name: 'one' },
    },
    {
      path: '/one',
      name: 'one',
      component: one,
    },
    {
      path: '/tow',
      name: 'tow',
      component: tow,
    },
    {
      path: '/applist',
      name: 'applist',
      component: applist,
    },
  ],
});
