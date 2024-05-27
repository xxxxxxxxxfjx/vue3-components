import { defineAsyncComponent } from 'vue'
export default {
  install(app) {
    const modules = import.meta.glob('./*/index.vue')
    console.log(modules)
    for (const [key, value] of Object.entries(modules)) {
      console.log(key, value)
      const name = 'm-' + key.replace('./', '').split('/')[0]
      app.component(name, defineAsyncComponent(value))
    }
  }
}
