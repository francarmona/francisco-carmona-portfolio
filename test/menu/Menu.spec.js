import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import scrollactive from 'vue-scrollactive';
import sideNav from '@/app/store/modules/sideNav';
import Menu from '@/app/components/menu/Menu.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Menu', () => {
  let store;

  Menu.components = {
    scrollactive
  };

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        sideNav
      }
    });
  });

  it('will open the Menu', () => {
    const wrapper = shallowMount(Menu, {
      localVue,
      store
    });
    store.state.sideNav.opened = true;
    expect(wrapper.vm.sideNavOpened).toBe(true);
    expect(wrapper.find('scrollactive-stub').classes()).toContain('open');
  });

  it('will close the Menu', () => {
    const wrapper = shallowMount(Menu, {
      localVue,
      store
    });
    store.state.sideNav.opened = false;
    expect(wrapper.vm.sideNavOpened).toBe(false);
    expect(wrapper.find('scrollactive-stub').classes()).not.toContain('open');
  });

});
