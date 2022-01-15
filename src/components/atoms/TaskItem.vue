<template>
  <li :class="$style.task">
    <label :class="$style.taskLabel">
      <input
        :class="$style.taskInput"
        type="checkbox"
        :checked="isCompleted"
        @change="checkedTask"
      />
      <span :class="$style.taskBox"></span>
      <span :class="$style.taskLine">{{ title }}</span>
    </label>
    <button
      :class="$style.taskBtn"
      aria-label="remove-task"
      @click="deleteTask"
    ></button>
  </li>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['removeTask', 'changeCompleted']),
    deleteTask() {
      this.removeTask(this.id);
    },
    checkedTask() {
      this.changeCompleted(this.id);
    },
  },
};
</script>
<style lang="scss" module>
@import '@/assets/scss/main.scss';
.task {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  background: $accent;
  border-radius: 0.625rem;
  .taskLabel {
    flex: 1 1 auto;
    padding-left: 2.65rem;
    padding-right: 1rem;
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    line-height: 1.75rem;
    position: relative;
    cursor: pointer;
    &.completed {
      background-color: green;
    }
  }
  .taskInput {
    appearance: none;
    &:checked + .taskBox {
      background: $orangeLight url(../../assets/img/check.svg) center no-repeat;
    }
    &:checked ~ .taskLine::after {
      width: 100%;
    }
    &:focus-visible + .taskBox {
      box-shadow: 0 0 0 2px $colorFocus;
    }
  }
  .taskLine {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 0;
      height: 2px;
      background-color: $mainDarkColor;
      transform: translateY(-50%);
      transition: width 0.3s;
    }
  }
  .taskBox {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border: 0.125rem solid $orangeLight;
    border-radius: 0.25rem;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color 0.5s;
    outline: none;
  }
  .taskBtn {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    background: none;
    border: 0.125rem solid $accentDarker;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: border-color 0.5s;
    &::after,
    &::before {
      content: '';
      width: 0.75rem;
      height: 0.125rem;
      position: absolute;
      left: 50%;
      top: 50%;
      background-color: $accentDarker;
      transition: background-color 0.5s;
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:focus-visible {
      box-shadow: 0 0 0 2px $colorFocus;
    }
    &:hover,
    &:active {
      border-color: $orange;
      &::after {
        background-color: $orange;
      }
      &::before {
        background-color: $orange;
      }
    }
  }
}
</style>