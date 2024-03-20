import { EventBus } from 'quasar'
import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  const eventbus = new EventBus()

  // for Options API
  app.config.globalProperties.$eventbus = eventbus

  eventbus.on('comp1-clicked',function(attr) {
    console.log('eventbus comp1-clicked', attr);
  })

  eventbus.on('comp2-clicked',function(attr) {
    console.log('eventbus comp2-clicked', attr);
  })

  // for Composition API
  app.provide('eventbus', eventbus)
})
