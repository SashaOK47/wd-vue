<template>
  <label :class="$style.tab">
    <input
      :class="$style.tabInput"
      type="radio"
      name="tab"
      :checked="isChecked"
      @click="filter"
    />
    <span :class="$style.tabBox"></span>
    {{ title }}
  </label>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    isChecked: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['filterTasks']),
    filter() {
      this.filterTasks(this.title);
    },
  },
};
</script>
<style lang="scss" module>
@import '@/assets/scss/main.scss';
.tab {
  position: relative;
  display: inline-block;
  padding: 0.35rem 0.6rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: $mainFontColorOpacity;
  background-color: transparent;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 1.5rem;
    @include breakpoint($sm) {
      margin-right: 0.75rem;
    }
  }
  .tabInput {
    appearance: none;
    position: absolute;
    &:checked + .tabBox {
      border-color: $borderFilterColor;
    }
    &:focus-visible + .tabBox {
      box-shadow: 0 0 0 2px $colorFocus;
    }
  }
  .tabBox {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0.125rem solid transparent;
    border-radius: 0.625rem;
    transition: border-color 0.5s;
  }
}
</style>