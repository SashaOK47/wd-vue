<template>
  <header :class="$style.header">
    <p :class="$style.title">to do list</p>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" module>
@import '@/assets/scss/main.scss';
.header {
  background-color: $accentDarker;
  .title {
    padding: 0.75rem 0;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}
</style>