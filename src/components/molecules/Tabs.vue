<template>
  <div :class="$style.tabs">
    <Tab
      v-for="tabItem in tabs"
      :key="tabItem.title"
      :title="tabItem.title"
      :isChecked="tabItem.isChecked"
    />
  </div>
</template>
<script>
import Tab from '@/components/atoms/Tab';
export default {
  components: {
    Tab,
  },
  data() {
    return {
      tabs: [
        {
          title: 'All',
          isChecked: true,
        },
        {
          title: 'Active',
          isChecked: false,
        },
        {
          title: 'Completed',
          isChecked: false,
        },
      ],
    };
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