import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Swiper from 'swiper'
import'../node_modules/swiper/css/swiper.min.css'
// import Myself from './views/Myself.vue'

Vue.use(Swiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   router,
//   store,
//   render: h => h(Myself)
// }).$mount('#myself')
