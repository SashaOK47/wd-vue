import { v4 as uuidv4 } from 'uuid';
export default {
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
  mutations: {
    addTask(state, titleTask) {
      if (titleTask) {
        state.tasks.push({
          id: uuidv4(),
          title: titleTask,
          isCompleted: false,
        });
      }
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    changeCompleted(state, id) {
      state.tasks.forEach(task => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
      });
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
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
};
