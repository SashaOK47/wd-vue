import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Tab from '@/components/atoms/Tab.vue';
const localVue = createLocalVue();
localVue.use(Vuex);

describe('Tab.vue', () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      filterTasks: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('calls mutation filterTasks', () => {
    const wrapper = mount(Tab, { store, localVue });
    wrapper.find('input').trigger('click');
    expect(mutations.filterTasks).toHaveBeenCalled();
  });
});
