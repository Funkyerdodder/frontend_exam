import Vue from 'vue';
import Router from 'vue-router';
import CurrencyConverter from './components/CurrencyConverter';
import WeatherBulletin from './components/WeatherBulletin';
import BattleOfNumbers from './components/BattleOfNumbers';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: CurrencyConverter
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/weather-bulletin',
      component: WeatherBulletin
    },
    {
      path: '/battle-of-numbers',
      component: BattleOfNumbers
    }
  ]
})
