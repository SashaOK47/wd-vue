import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TaskItem from '@/components/atoms/TaskItem.vue';
const localVue = createLocalVue();
localVue.use(Vuex);

describe('TaskItem.vue', () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      removeTask: jest.fn(),
      changeCompleted: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('calls mutation removeTask', () => {
    const wrapper = mount(TaskItem, { store, localVue });
    wrapper.find('button').trigger('click');
    expect(mutations.removeTask).toHaveBeenCalled();
  });
  it('calls mutation changeCompleted', () => {
    const wrapper = mount(TaskItem, { store, localVue });
    wrapper.find('input').trigger('click');
    expect(mutations.changeCompleted).toHaveBeenCalled();
  });
});
