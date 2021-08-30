import Vue from 'vue'
import App from './App6.vue'
//Vuex Store 를 import 해서 
import store from './store'

Vue.config.productionTip = false

new Vue({
  //component 어디에서든 사용할수 있도록 설정
  store,
  render: h => h(App),
}).$mount('#app')
