import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
  router, // 安装路由器
})

// new Vue({
//   el: '#app',
//   render: h => h(App),
// }).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App),
// })
