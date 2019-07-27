import Vue from 'vue';
import Router from 'vue-router';
import MSite from "../pages/msite/msite";
import Order from "../pages/order/order";
import Search from "../pages/search/search";
import Profile from "../pages/profile/profile";



Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'msite',
      component: MSite
    },
    {
      path: "/order",
      name: "order",
      component: Order
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    }
  ]
})
