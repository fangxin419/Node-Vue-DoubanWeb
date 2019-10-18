import Vue from 'vue';
import App from './App.vue';
import router from './plugins/router'; //导入路由配置

//引入公样式
import './assets/css/base.css';
import './assets/js/font';
import './plugins/axios';

import {
  Search,
  Swipe,
  SwipeItem,
  Rate
} from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Rate).use(Search);

//配置服务器地址
Vue.prototype.server = require('./config/server');

import store from './plugins/store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');