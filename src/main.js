import Vue from 'vue'
import App from './App.vue'

//import plugin vue resource
import VueResource from 'vue-resource'
Vue.use(VueResource); //use it

// custom directive 
Vue.directive("rainbow", {
  //control teh functionality of the ddirective
  bind(el, binding, vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

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
Vue.filter('to-uppercase', function(value){ //value merefers pada data saat filter digunakan, dalam kasus ini nilai value adalah blog.title
  return value.toUpperCase();
});

Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App)
})
