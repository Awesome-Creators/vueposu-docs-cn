// import { h } from 'vue'
import Theme from 'vitepress/theme'
import './styles/custom.css'
import './styles/inline-demo.css'

export default {
  ...Theme,
  // Layout() {
  //   return h(Theme.Layout, null, {
  //     'home-features-after': () => h(HomeSponsors)
  //   })
  // }
}