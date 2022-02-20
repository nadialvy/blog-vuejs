import Vue from 'vue'
import App from './App.vue'

//import plugin vue resource
import VueResource from 'vue-resource'

Vue.use(VueResource); //use it

new Vue({
  el: '#app',
  render: h => h(App)
})
