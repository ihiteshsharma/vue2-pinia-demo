import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
Vue.use(PiniaVuePlugin)

const pinia = createPinia()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  pinia
}).$mount('#app')
