import Vue from 'vue'
import components from '@/components'

_.forIn(components, component => {
  Vue.component(component.name, component)
})

export default components
