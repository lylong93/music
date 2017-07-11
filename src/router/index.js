import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import carousel from '@/components/carousel';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: 'one',
          component: carousel,
        },
        {
          path: 'tow',
          component: Hello,
        },
      ],
    },
    {
      path: '/carousel',
      component: carousel,
    },
  ],
});
