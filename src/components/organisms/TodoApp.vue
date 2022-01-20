<template>
  <div :class="$style.todoApp">
    <Header />
    <Content />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/organisms/Header';
import Content from '@/components/organisms/Content';
import Footer from '@/components/organisms/Footer';
export default {
  components: { Header, Content, Footer },
  mounted() {
    this.$store.dispatch('tasksFromLocaSorage');
  },
};
</script>
<style lang="scss" module>
@import '@/assets/scss/main.scss';
.todoApp {
  width: 33.75rem;
  display: flex;
  flex-direction: column;
}
</style>
