const ClassName = {
  install(Vue) {
    Vue.directive('className', (el, binding, vnode) => {
      const componentName = vnode.context.$options._componentTag
      const className = `${componentName}${binding.value || ''}`
      if (el.className.indexOf(className) !== -1) return 
      el.className = `${className}${el.className ? ' ' + el.className :''}`
    })
  }
}

module.exports = ClassName
