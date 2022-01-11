<template>
  <li class="task">
    <label class="task__label">
      <input class="task__input" type="checkbox" :checked="isCompleted" />
      <span class="task__box"></span>
      {{ title }}
    </label>
    <button class="task__btn" aria-label="remove-task"></button>
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
<style lang="scss">
@import "@/assets/scss/main.scss";
.task {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  background: $karry;
  border-radius: 0.625rem;
  &__label {
    flex: 1 1 auto;
    padding-left: 2.65rem;
    padding-right: 1rem;
    font-family: "Inter", sans-serif;
    font-size: 1.25rem;
    line-height: 1.75rem;
    position: relative;
    cursor: pointer;
  }
  &__input {
    appearance: none;
    &:checked + .task__box {
      background: $rajah url(../../assets/img/check.svg) center no-repeat;
    }
    &:focus + .task__box {
      border: 0.15rem solid $twineOpacity;
    }
  }
  &__box {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border: 0.125rem solid $rajah;
    border-radius: 0.25rem;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color 0.5s;
  }
  &__btn {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    background: none;
    border: 0.125rem solid $peachOrange;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: border-color 0.5s;
    &::after,
    &::before {
      content: "";
      width: 0.75rem;
      height: 0.125rem;
      position: absolute;
      left: 50%;
      top: 50%;
      background-color: $peachOrange;
      transition: background-color 0.5s;
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:hover,
    &:focus {
      border-color: $carrotOrange;
      &::after {
        background-color: $carrotOrange;
      }
      &::before {
        background-color: $carrotOrange;
      }
    }
  }
}
</style>