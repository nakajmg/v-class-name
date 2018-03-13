import {shallow, createLocalVue} from '@vue/test-utils'
import TestComponent from './TestComponent.vue'
import vClassName from '../index'
const sel = (sel) => `[data-test="${sel}"]`

describe('v-class-name', () => {
  let wrapper
  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(vClassName)
    wrapper = shallow(TestComponent, {
      localVue,
      attachToDocument: true,
    })
  })
  
  describe('root', () => {
    test('element has .TestComponent', () => {
      console.log(wrapper.vm.$el.innerHTML)
      expect(wrapper.classes()).toContain('TestComponent')
    })
    test('element has 1 class', () => {
      expect(wrapper.classes()).toHaveLength(1)
    })
  })

  describe('test1', () => {
    test('test1 element has .TestComponent_Test1', () => {
      const el = wrapper.find(sel('test1'))
      expect(el.classes()).toContain('TestComponent_Test1')
    })
    test('element has 1 class', () => {
      const el = wrapper.find(sel('test1'))
      expect(el.classes()).toHaveLength(1)
    })
  })

  describe('test2', () => {
    test('element has .TestComponent_Test2 and .TestClass', () => {
      const el = wrapper.find(sel('test2'))
      expect(el.classes()).toContain('TestComponent_Test2')
      expect(el.classes()).toContain('TestClass')
    })
    test('element has 2 classes', () => {
      const el = wrapper.find(sel('test3'))
      expect(el.classes()).toHaveLength(2)
    })
    test('first class should TestComponent_Test3', () => {
      const el = wrapper.find(sel('test3'))
      expect(el.classes()[0]).toBe('TestComponent_Test3')
    })
  })
  
  describe('test3', () => {
    test('element has .TestComponent_Test3 and ._test', () => {
      const el = wrapper.find(sel('test3'))
      expect(el.classes()).toContain('TestComponent_Test3')
      expect(el.classes()).toContain('_test')
    })
    test('element has 2 classes', () => {
      const el = wrapper.find(sel('test3'))
      expect(el.classes()).toHaveLength(2)
    })
    test('first class should TestComponent_Test3', () => {
      const el = wrapper.find(sel('test3'))
      expect(el.classes()[0]).toBe('TestComponent_Test3')
    })
  })

  describe('test4', () => {
    test('element has .TestComponent_Test4 and ._test and .TestClass', () => {
      const el = wrapper.find(sel('test4'))
      expect(el.classes()).toContain('TestComponent_Test4')
      expect(el.classes()).toContain('_test')
      expect(el.classes()).toContain('TestClass')
    })
    test('element has 3 classes', () => {
      const el = wrapper.find(sel('test4'))
      expect(el.classes()).toHaveLength(3)
    })
    test('first class should TestComponent_Test4', () => {
      const el = wrapper.find(sel('test4'))
      expect(el.classes()[0]).toBe('TestComponent_Test4')
    })
    test('second class should TestClass', () => {
      const el = wrapper.find(sel('test4'))
      expect(el.classes()[1]).toBe('TestClass')
    })
  })

})