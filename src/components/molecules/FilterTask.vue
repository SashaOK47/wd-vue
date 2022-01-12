<template>
  <div :class="$style.filter">
    <label :class="$style.filterLabel">
      <input :class="$style.filterInput" type="radio" name="tab" checked />
      <span :class="$style.filterBox"></span>
      All
    </label>
    <label :class="$style.filterLabel">
      <input :class="$style.filterInput" type="radio" name="tab" />
      <span :class="$style.filterBox"></span>
      Active
    </label>
    <label :class="$style.filterLabel">
      <input :class="$style.filterInput" type="radio" name="tab" />
      <span :class="$style.filterBox"></span>
      Completed
    </label>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" module>
@import '@/assets/scss/main.scss';
.filter {
  text-align: center;
  position: relative;
  @include breakpoint($sm) {
    width: 100%;
  }
  .filterLabel {
    position: relative;
    display: inline-block;
    padding: 0.35rem 0.6rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: $mainFontColorOpacity;
    background-color: transparent;
    cursor: pointer;
  }
  .filterLabel:not(:last-child) {
    margin-right: 1.5rem;
    @include breakpoint($sm) {
      margin-right: 0.75rem;
    }
  }
  .filterInput {
    appearance: none;
    position: absolute;
  }
  .filterBox {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0.125rem solid transparent;
    border-radius: 0.625rem;
    transition: border-color 0.5s;
  }
  .filterInput:checked + .filterBox {
    border-color: $borderFilterColor;
  }
  .filterInput:focus-visible + .filterBox {
    box-shadow: 0 0 0 2px $colorFocus;
  }
}
</style>