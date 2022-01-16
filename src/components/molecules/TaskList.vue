<template>
  <ul :class="$style.tasks">
    <div :class="$style.tasksEmpty" v-if="!getTasksFiltered.length">
      The task list is empty! Add a new task!
    </div>
    <transition-group name="TaskList">
      <TaskItem
        v-for="task in getTasksFiltered"
        :key="task.id"
        :title="task.title"
        :id="task.id"
        :isCompleted="task.isCompleted"
      />
    </transition-group>
  </ul>
</template>
<script>
import TaskItem from '@/components/atoms/TaskItem';
import { mapGetters } from 'vuex';
export default {
  components: { TaskItem },
  computed: mapGetters(['getTasksFiltered']),
};
</script>
<style lang="scss" module>
@import '@/assets/scss/main.scss';
::-webkit-scrollbar {
  width: 0.6rem;
  background-color: $orangeLight;
  border-radius: 9rem;
}
::-webkit-scrollbar-thumb {
  background-color: $orange;
  border-radius: 9em;
}
.tasks {
  padding-right: 0.5rem;
  max-height: 21rem;
  min-height: 15rem;
  overflow-y: auto;
  list-style: none;
  width: 100%;
  .tasksEmpty {
    padding: 1rem;
    font-size: 2rem;
    line-height: 2.3rem;
    color: $mainFontColorOpacity;
    text-align: center;
  }
}
</style>
<style scoped>
.TaskList-enter-active,
.TaskList-leave-to {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.TaskList-enter,
.TaskList-leave-to {
  opacity: 0;
  transform: translatex(-30px);
}
</style>
