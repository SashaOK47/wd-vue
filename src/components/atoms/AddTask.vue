<template>
  <form class="add-task">
    <input type="text" placeholder="Add a new task" />
  </form>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
.add-task {
  input {
    padding: 0.75rem 1rem;
    width: 100%;
    outline: none;
    background: $serenade;
    border: 0.125rem dashed $peachOrange;
    border-radius: 0.625rem;
    font-family: "Inter", sans-serif;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: $mainColor;
    text-align: center;
    &::placeholder {
      font-family: "Inter", sans-serif;
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: $peachOrange;
    }
    &:focus {
      border: 0.125rem solid $carrotOrange;
    }
  }
}
</style>