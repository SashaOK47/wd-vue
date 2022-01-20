import vuex from '@/store/modules/tasks';
export default {
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
        title: 'Task 3',
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
  actions: vuex.actions,
  mutations: vuex.mutations,
  getters: vuex.getters,
};
