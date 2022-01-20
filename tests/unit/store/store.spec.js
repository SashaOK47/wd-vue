import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import storeConfig from './store.cfg';

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(storeConfig);

describe('testing store', () => {
  it('getTasks', () => {
    expect(store.getters.getTasks.length).toBe(3);
  });
  it('getTasksCount', () => {
    expect(
      store.getters.getTasksCount === store.state.tasks.length
    ).toBeTruthy();
  });
  it('getTasksFiltered', () => {
    store.state.filter = 'All';
    expect(store.getters.getTasksFiltered.length).toBe(3);
    store.state.filter = 'Active';
    expect(store.getters.getTasksFiltered.length).toBe(2);
    store.state.filter = 'Completed';
    expect(store.getters.getTasksFiltered.length).toBe(1);
  });
  it('getCompleted', () => {
    expect(store.getters.getCompleted).toBe(1);
  });
  it('getTabs', () => {
    expect(
      store.getters.getTabs.length === store.state.tabs.length
    ).toBeTruthy();
  });
  it('addTask', () => {
    let newTask = 'Task 4';
    store.commit('addTask', newTask);
    expect(store.state.tasks[3].title).toBe('Task 4');
    expect(store.state.tasks[3].isCompleted).toBe(false);
  });
  it('removeTask', () => {
    let lengthArr = store.state.tasks.length;
    store.commit('removeTask', store.state.tasks[0].id);
    expect(store.state.tasks.length).toBe(lengthArr - 1);
  });
  it('changeCompleted', () => {
    let isCompleted = store.state.tasks[2].isCompleted;
    store.commit('changeCompleted', store.state.tasks[2].id);
    expect(store.state.tasks[2].isCompleted).toBe(!isCompleted);
  });
  it('filterTasks', () => {
    store.commit('filterTasks', store.state.tabs[0].title);
    expect(store.state.filter).toBe(store.state.tabs[0].title);
  });
  it('setTaskLocalStorage', () => {
    store.commit('setTaskLocalStorage');
    expect(store.state.tasks.length).toBe(3);
  });
  it('tasksFromLocaSorage', () => {
    store.dispatch('tasksFromLocaSorage');
    expect(store.state.tasks.length).toBe(3);
  });
});
