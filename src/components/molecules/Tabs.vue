<template>
  <div :class="$style.tabs">
    <Tab
      v-for="tabItem in getTabs"
      :key="tabItem.title"
      :title="tabItem.title"
      :isChecked="tabItem.isChecked"
    />
  </div>
</template>
<script>
import Tab from '@/components/atoms/Tab';
import { mapGetters } from 'vuex';
export default {
  components: {
    Tab,
  },
  computed: {
    ...mapGetters(['getTabs']),
  },
};
</script>
<style lang="scss" module>
@import '@/assets/scss/main.scss';
.tabs {
  text-align: center;
  position: relative;
  @include breakpoint($sm) {
    width: 100%;
  }
}
</style>