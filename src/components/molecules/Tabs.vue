<template>
  <div class="tabs">
    <label class="tab">
      <input class="tab__input" type="radio" name="tab" checked />
      <span class="tab__box"></span>
      All
    </label>
    <label class="tab">
      <input class="tab__input" type="radio" name="tab" />
      <span class="tab__box"></span>
      Active
    </label>
    <label class="tab">
      <input class="tab__input" type="radio" name="tab" />
      <span class="tab__box"></span>
      Completed
    </label>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
.tabs {
  text-align: center;
  position: relative;
  @include breakpoint($sm) {
    width: 100%;
  }
  .tab {
    position: relative;
    display: inline-block;
    padding: 0.35rem 0.6rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: rgba(127, 75, 19, 0.42);
    background-color: transparent;
    cursor: pointer;
  }
  .tab:not(:last-child) {
    margin-right: 1.5rem;
    @include breakpoint($sm) {
      margin-right: 0.75rem;
    }
  }
  .tab__input {
    appearance: none;
    position: absolute;
  }
  .tab__box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0.125rem solid transparent;
    border-radius: 0.625rem;
    transition: border-color 0.5s;
  }
  .tab__input:checked + .tab__box {
    border-color: $twine;
  }
  .tab__input:focus + .tab__box {
    border-width: 0.2rem;
  }
}
</style>