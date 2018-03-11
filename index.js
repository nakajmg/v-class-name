function bindClassName(el, binding, vnode) {
  const componentName = vnode.context.$options._componentTag
  const className = `${componentName}${binding.value || ''}`
  if (el.className.indexOf(className) !== -1) return
  el.className = `${className}${el.className ? ' ' + el.className :''}`
}

const ClassName = {
  install(Vue) {
    Vue.directive('className', {
      bind: bindClassName,
      update: bindClassName,
      inserted: bindClassName,
    })
  }
}

module.exports = ClassName
