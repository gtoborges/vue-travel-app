import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Brazil from "../views/Brazil";
// import Jamaica from "../views/Jamaica";
// import Hawaii from "../views/Hawaii";
// import Panama from "../views/Panama";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  // {
  //   path: "/brazil",
  //   name: "brazil",
  //   component: () => import(/* webpackChunkName: "brazil" */ "../views/Brazil")
  // },
  // {
  //   path: "/hawaii",
  //   name: "hawaii",
  //   component: () => import(/* webpackChunkName: "hawaii" */ "../views/Hawaii")
  // },
  // {
  //   path: "/jamaica",
  //   name: "jamaica",
  //   component: () => import(/* webpackChunkName: "jamaica" */ "../views/Jamaica")
  // },
  // {
  //   path: "/panama",
  //   name: "panama",
  //   component: () => import(/* webpackChunkName: "panama" */ "../views/Panama")
  // },
  {
    path: "/details/:slug",
    name: "DestinationDetails",
    props: true,
    component: () => import(/* webpackChunkName: "DestinationDetails */ "../views/DestinationDetails")
  }
];

const router = new VueRouter({
  linkExactActiveClass: "navigate-active-link",
  mode: "history",
  routes
});

export default router;
