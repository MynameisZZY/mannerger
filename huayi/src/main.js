import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/styles/public.css'
import axios from 'axios'//引入axios
import qs from 'qs'//引入qs

Vue.prototype.axios=axios;
// 把axios挂载到原型上
Vue.prototype.qs=qs;
// 把qs挂载到原型上

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
