<template>
  <footer :class="$style.footer">
    <p :class="$style.footerCount">
      <span v-if="getCompleted">{{ getCompleted }}/</span
      ><span v-if="getTasksCount">{{ getTasksCount }} left</span>
    </p>
    <Tabs />
  </footer>
</template>
<script>
import Tabs from '@/components/molecules/Tabs';
import { mapGetters } from 'vuex';
export default {
  components: { Tabs },
  computed: mapGetters(['getTasksCount', 'getCompleted']),
};
</script>
<style lang="scss" module>
@import '@/assets/scss/main.scss';
.footer {
  padding: 0.4rem 1.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: $accentDarker;
  @include breakpoint($sm) {
    justify-content: center;
  }

  .footerCount {
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: $mainFontColorOpacity;
    @include breakpoint($sm) {
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
}
</style>