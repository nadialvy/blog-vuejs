import Vue from 'vue'
import App from './App.vue'

//import plugin vue resource
import VueResource from 'vue-resource'
Vue.use(VueResource); //use it

Vue.directive("theme", {
  bind(el, binding, vnode){
    if(binding.value === 'wide'){
      el.style.maxWidth = "700px";
    }else if(binding.value === 'narrow'){
      el.style.maxWidth = "560px"
    }

    if(binding.arg === 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

// Filters 
Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App)
})
