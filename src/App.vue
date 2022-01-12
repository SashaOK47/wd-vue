<template>
  <div :class="$style.container">
    <div :class="$style.wrapper">
      <TodoApp />
    </div>
  </div>
</template>

<script>
import TodoApp from '@/components/organisms/TodoApp';
export default {
  name: 'App',
  components: { TodoApp },
};
</script>

<style lang="scss" module>
@import '@/assets/scss/main.scss';
.container {
  background: linear-gradient(
    104.11deg,
    $orangeLight 14.52%,
    $orangeDark 87.26%
  );
  .wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('./assets/img/list.svg') center right no-repeat;
    @include breakpoint($md) {
      background: none;
    }
  }
}
</style>