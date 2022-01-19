import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TaskList from '@/components/molecules/TaskList.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('TaskList.vue', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      getTasksFiltered: () => jest.fn(),
    };

    store = new Vuex.Store({
      getters,
    });
  });

  it('calls getter getTasksFiltered', () => {
    const wrapper = shallowMount(TaskList, { store, localVue });
    expect(wrapper.find('TaskItem')).toBeTruthy();
  });
});
