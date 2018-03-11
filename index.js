const ClassName = {
  install(Vue) {
    Vue.directive('className', (el, binding, vnode) => {
      const componentName = vnode.context.$options._componentTag
      const className = `${componentName}${binding.value || ''}`
      el.className = `${className}${el.className ? ' ' + el.className :''}`

    })
  }
}

module.exports = ClassName
