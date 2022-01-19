import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Tabs from '@/components/molecules/Tabs.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Tabs.vue', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      getTabs: () => jest.fn(),
    };

    store = new Vuex.Store({
      getters,
    });
  });

  it('calls getter getTabs', () => {
    const wrapper = shallowMount(Tabs, { store, localVue });
    expect(wrapper.find('Tab')).toBeTruthy();
  });
});
