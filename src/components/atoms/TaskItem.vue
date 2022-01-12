<template>
  <li :class="$style.task">
    <label :class="$style.taskLabel">
      <input :class="$style.taskInput" type="checkbox" :checked="isCompleted" />
      <span :class="$style.taskBox"></span>
      {{ title }}
    </label>
    <button :class="$style.taskBtn" aria-label="remove-task"></button>
  </li>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
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
  }
  .taskInput {
    appearance: none;
    &:checked + .taskBox {
      background: $orangeLight url(../../assets/img/check.svg) center no-repeat;
    }
    &:focus-visible + .taskBox {
      box-shadow: 0 0 0 2px $colorFocus;
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
    &:focus {
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