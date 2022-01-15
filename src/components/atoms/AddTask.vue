<template>
  <form :class="$style.addTask" @submit.prevent="addTaskItem">
    <input type="text" placeholder="Add a new task" v-model="nameTask" />
  </form>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      nameTask: '',
    };
  },
  methods: {
    ...mapMutations(['addTask']),
    addTaskItem() {
      if (this.nameTask.trim()) {
        this.addTask(this.nameTask);
        this.nameTask = '';
      }
    },
  },
};
</script>
<style lang="scss" module>
@import '@/assets/scss/main.scss';
.addTask {
  padding-top: 0.3rem;
  input {
    padding: 0.75rem 1rem;
    width: 100%;
    outline: none;
    background: $inputBgColor;
    border: 0.125rem dashed $accentDarker;
    border-radius: 0.625rem;
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: $mainFontColor;
    text-align: center;
    &::placeholder {
      font-family: 'Inter', sans-serif;
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: $accentDarker;
    }
    &:focus {
      border: 0.125rem solid $orange;
    }
  }
}
</style>