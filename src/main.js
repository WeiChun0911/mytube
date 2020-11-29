import Vue from 'vue'
import App from './App.vue'
import Favorite from './Favorite.vue'

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      if(this.currentRoute == '/favorite') return Favorite;
      return App;
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
