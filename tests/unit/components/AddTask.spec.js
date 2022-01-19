import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AddTask from '@/components/atoms/AddTask.vue';
const localVue = createLocalVue();
localVue.use(Vuex);
describe('AddTask.vue', () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      addTask: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('calls mutation addTask', () => {
    const wrapper = mount(AddTask, { store, localVue });
    wrapper.find('form').trigger('submit.prevent');
    expect(mutations.addTask).toHaveBeenCalled();
  });
});
