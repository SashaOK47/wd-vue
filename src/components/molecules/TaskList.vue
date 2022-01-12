<template>
  <ul :class="$style.tasks">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :title="task.title"
      :isCompleted="task.isCompleted"
    />
  </ul>
</template>
<script>
import TaskItem from '@/components/atoms/TaskItem';
export default {
  components: { TaskItem },
  data() {
    return {
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
    };
  },
};
</script>
<style lang="scss" module>
@import '@/assets/scss/main.scss';
.tasks {
  max-height: 300px;
  overflow-y: auto;
  list-style: none;
  width: 100%;
}
</style>
