import Vue from 'vue';
import Router from 'vue-router';

import Events from '../pages/events.vue';
import Home from '../pages/home.vue';
import ShareATalk from '../pages/share-a-talk.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/share-a-talk',
      name: 'ShareATalk',
      component: ShareATalk
    },
  ]
});
