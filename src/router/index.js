import Vue from 'vue';
import Router from 'vue-router';
import Test from '../pages/test.vue';
import Home from '../pages/home.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
});
