import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#000000",
        background: "#fff"
      }
    }
  },
  icons: {
    iconfont: 'fa' || 'md' || 'mdi'
  }
}

export default new Vuetify(opts)
