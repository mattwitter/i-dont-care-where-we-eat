import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  data: () => ({
    snackbar: {
      enabled: false,
      text: "",
      color: "primary",
      timeout: 5000,
    }
  }),
  methods: {
    showSnackbar(text, color, timeout) {
      this.snackbar.enabled = true
      this.snackbar.text = text
      this.snackbar.color = color
      this.snackbar.timeout = timeout
    }
  },
  render: h => h(App)
}).$mount('#app')
