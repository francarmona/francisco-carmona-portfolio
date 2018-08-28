<template>
  <div id="app" v-on:click="toggleSideNav">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Main from './pages/Main.vue';

export default {
  name: 'Layout',
  components: {
    Header,
    Main,
    Footer
  },
  methods: {
    toggleSideNav() {
      if(this.$store.state.sideNav.opened) {
        this.$store.commit('sideNav/toggleSideNav');
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
