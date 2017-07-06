import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

fastclick.attach(document.body)
Vue.config.productionTip = false

Vue.use(VueLazyLoad,{
  loading: require('assets/image/default.png')
})

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
