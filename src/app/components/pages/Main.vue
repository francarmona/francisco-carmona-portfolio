<template>
  <main>
    <Home></Home>
    <About></About>
    <Portfolio></Portfolio>
    <Contact></Contact>
  </main>
</template>

<script>
import Home from './partials/Home.vue';
import About from './partials/About.vue';
import Portfolio from './partials/Portfolio.vue';
import Contact from './partials/Contact.vue';
export default {
  name: 'Main',
  components: {
    Home,
    About,
    Portfolio,
    Contact
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/theme/variables';
  main {
    &>section {
      padding-bottom: 2rem;
    }
  }

  @media screen and (min-width: $md-breakpoint){
    main {
      &>section {
        padding-bottom: 5rem;
      }
    }
  }
</style>
