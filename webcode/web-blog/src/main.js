import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

import CommonJs from './common/common.js'

Vue.use(VueAxios, axios)
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.headers['Content-Type'] = 'application/json'
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.CommonJs = CommonJs //全局注册 公共JS
Vue.use(ElementUI);
Vue.use(Router)

Vue.config.productionTip = false

import routers from './router/index.js'


const router = new Router(routers)

new Vue({
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App),
}).$mount('#app')
