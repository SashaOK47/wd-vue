import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: 'All',
    tasks: [],
    tabs: [
      {
        title: 'All',
        isChecked: true,
      },
      {
        title: 'Active',
        isChecked: false,
      },
      {
        title: 'Completed',
        isChecked: false,
      },
    ],
  },
  mutations: {
    addTask(state, titleTask) {
      state.tasks.push({
        id: uuidv4(),
        title: titleTask,
        isCompleted: false,
      });
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    changeCompleted(state, id) {
      state.tasks.forEach(task => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
      });
    },
    filterTasks(state, tabTitle) {
      state.filter = tabTitle;
    },
    setTaskLocalStorage(state, tasks) {
      state.tasks = tasks;
    },
  },
  actions: {
    tasksFromLocaSorage: ({ commit }) => {
      const localTasks = localStorage.getItem('tasks');
      if (localTasks) {
        commit('setTaskLocalStorage', JSON.parse(localTasks));
      }
    },
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getTasksCount(state) {
      return state.tasks.length;
    },
    getTasksFiltered(state) {
      if (state.filter == 'All') {
        return state.tasks;
      } else if (state.filter == 'Active') {
        return state.tasks.filter(task => !task.isCompleted);
      } else if (state.filter == 'Completed') {
        return state.tasks.filter(task => task.isCompleted);
      }
      return state.tasks;
    },
    getCompleted(state) {
      return state.tasks.filter(task => task.isCompleted).length;
    },
    getTabs(state) {
      return state.tabs;
    },
  },
});
