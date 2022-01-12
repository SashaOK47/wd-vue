<template>
  <main :class="$style.content">
    <div :class="$style.contentWrapper">
      <TaskList />
      <AddTask />
    </div>
  </main>
</template>
<script>
import TaskList from '@/components/molecules/TaskList';
import AddTask from '@/components/atoms/AddTask';
export default {
  components: { TaskList, AddTask },
};
</script>
<style lang="scss" module>
@import '@/assets/scss/main.scss';
.content {
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
  flex: 1 1 auto;
  background-color: $appBgColor;
  .contentWrapper {
    padding: 0 1.875rem;
  }
}
</style>