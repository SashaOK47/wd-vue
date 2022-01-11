<template>
  <div class="todo-app">
    <Header />
    <Content />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/organisms/Header";
import Content from "@/components/organisms/Content";
import Footer from "@/components/organisms/Footer";
export default {
  components: { Header, Content, Footer },
};
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
.todo-app {
  width: 33.75rem;
  display: flex;
  flex-direction: column;
}
</style>
