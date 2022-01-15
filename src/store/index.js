import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: 'All',
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        isCompleted: true,
      },
      {
        id: 2,
        title: 'Task 2',
        isCompleted: false,
      },
      {
        id: 3,
        title: 'Task 2',
        isCompleted: false,
      },
    ],
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
        id: Date.now(),
        title: titleTask,
        isCompleted: false,
      });
    },
    removeTask(state, index) {
      state.tasks.splice(index, 1);
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
