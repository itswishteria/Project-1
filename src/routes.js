import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/MainHome.vue'
import TheMaking from './views/TheMaking.vue'

/*
default configuration for routers

{
  path: '/<name-of-the-route>'
  name: '<the-name-of-the-route-or-the-alias>'
  component: '<the-component-that-you-imported-as>'
  props: true,
}

path is basically the path showned when rendere, for example:
https://songket.com/<route-name>

name is an alias you want to call your route as.

component is the component you have imported to utilize as the route
For example, the Home component is imported via the ./views/MainHome.vue,
so that file is the component to be utilized

props allow passing of data between the two routes
*/
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'homepg',
      component: Home,
      props: true,
    },
    {
      path: '/TheMaking',
      name: 'making',
      component: TheMaking,
      props: true,
    },
  ],
})
