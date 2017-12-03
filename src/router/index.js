import Vue from 'vue';
import Router from 'vue-router';

// import carousel from '@/components/carousel';
import one from '@/components/one';
import tow from '@/components/tow';
import applist from '@/components/applist';
import songs from '@/components/songs';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    redirect: { name: 'one' },
  }, {
    path: '/one',
    name: 'one',
    component: one,
  }, {
    path: '/tow',
    name: 'tow',
    component: tow,
  }, {
    path: '/songs',
    name: 'songs',
    component: songs,
  }, {
    path: '/applist',
    name: 'applist',
    component: applist,
  }],
});
