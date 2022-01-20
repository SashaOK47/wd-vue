import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TodoApp from '@/components/organisms/TodoApp.vue';
const localVue = createLocalVue();
localVue.use(Vuex);

describe('TodoApp.app', () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      tasksFromLocaSorage: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it('calls action tasksFromLocaSorage', () => {
    const wrapper = shallowMount(TodoApp, { store, localVue });
    expect(wrapper.find('.todoApp')).toBeTruthy();
  });
});
