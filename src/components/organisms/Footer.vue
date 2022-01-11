<template>
  <footer class="footer">
    <p class="footer__count">1/3 left</p>
    <Tabs />
  </footer>
</template>
<script>
import Tabs from "@/components/molecules/Tabs";
export default {
  components: { Tabs },
};
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
.footer {
  padding: 0.4rem 1.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: $peachOrange;
  @include breakpoint($sm) {
    justify-content: center;
  }

  &__count {
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: $twineOpacity;
    @include breakpoint($sm) {
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
}
</style>