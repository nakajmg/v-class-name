<template>
  <div v-class-name>
    <div v-class-name="'_Test1'"
      data-test="test1"
    >
      heading
    </div>
    <div v-class-name="'_Test2'"
      class="TestClass"
      data-test="test2"
    ></div>
    <div v-class-name="'_Test3'"
      :class="{
        _test: test
      }"
      data-test="test3"
    ></div>
    <div v-class-name="'_Test4'"
      class="TestClass"
      :class="{
        _test: test
      }"
      data-test="test4"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      test: true,
    }
  },
}
</script>