# vue-class-name

```js
import vueClassName from 'vue-class-name'
Vue.use(vueClassName)
```

```html
<template>
  <div v-class-name>
    <h1 v-class-name="'_Heading'">
      heading
    </h1>
    <div v-class-name="'_Content'">
      content
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent'
}
</script>
```

👇

```html
<div class="MyComponent">
  <h1 class="MyComponent_Heading">
    heading
  </h1>
  <div class="MyComponent_Content">
    content
  </div>
</div>
```