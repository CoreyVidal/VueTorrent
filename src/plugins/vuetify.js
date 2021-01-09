import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
// import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/lib/util/colors'
import variables from '../styles/variables.scss'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    dark: false,
    themes: {
      light: {
        primary: '#35495e', // built in
        secondary: '#3e556d', // built in
        accent: '#3CD1C2', // built in
        error: '#f83e70', // built in
        info: '#ffaa2c', // built in
        success: '#4CAF50', // built in
        warning: '#FFC107', // built in
        background: colors.grey.lighten4,
        appbar: '#ffffff',
        navdrawer: '#eeeeee',
        search: '#fff',
        highlighted: '#00ff00',
        download: '#64CEAA',
        upload: '#00b3fa',
        torrent: '#fff',
        torrentselected: colors.grey.lighten2,
        torrentmodaltext: colors.grey.lighten4,
        ...variables
      },
      dark: {
        primary: '#BB86FC', // built in
        secondary: '#03DAC5', // built in
        accent: '#82B1FF', // built in to Vuetify
        error: '#f83e70', // built in
        info: '#ffaa2c', // built in
        success: '#4CAF50', // built in
        warning: '#FFC107', // built in
        background: '#121212',
        appbar: '#202020',
        navdrawer: '#212121',
        search: '#121212',
        highlighted: '#00ff00',
        download: '#5bb974', // green. don't forget: Navbar/SpeedGraph.vue
        upload: '#4ecde6', // blue. don't forget: Navbar/SpeedGraph.vue
        torrent: colors.grey.darken3,
        torrentselected: colors.blueGrey.darken1,
        torrentmodaltext: colors.grey.lighten4,
        ...variables
      }
    }
  }
})
