// AOS eller Animate On Scroll er et plugin til at nemt kunne lave scroll effekter på ting.
//installeres med npm i aos + disse linjer kode
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    AOS.init({
      duration: 800,
      once: true,
    })
  })
})
