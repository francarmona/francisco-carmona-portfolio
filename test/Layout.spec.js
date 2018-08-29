import { shallowMount, createLocalVue } from '@vue/test-utils';
import Layout from '@/app/components/Layout.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Layout', () => {
  it('renders a header tag', () => {
    const wrapper = shallowMount(Layout, {
      localVue
    });
    expect(wrapper.contains('header-stub')).toBe(true);
  });

  it('renders a main tag', () => {
    const wrapper = shallowMount(Layout, {
      localVue
    });
    expect(wrapper.contains('main-stub')).toBe(true);
  });

  it('renders a footer tag', () => {
    const wrapper = shallowMount(Layout, {
      localVue
    });
    expect(wrapper.contains('footer-stub')).toBe(true);
  });
});
