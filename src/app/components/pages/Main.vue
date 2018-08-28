<template>
  <main>
    <div class="container">
      <section>
        <h1>Augue pharetra cubilia</h1>
        <p>Augue pharetra cubilia magnis vivamus ac est eros nunc sapien dictum mattis suscipit at magna volutpat, tincidunt ligula lacinia tempus viverra interdum feugiat eleifend euismod elementum curae donec praesent velit. Dignissim nec libero leo tristique pretium quisque hendrerit inceptos sed, pulvinar sociosqu aenean taciti mollis a eget odio. Nec curabitur tellus purus hac penatibus iaculis venenatis fringilla, cursus donec ridiculus per augue ante molestie.</p>
      </section>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Social></Social>
    </div>
  </main>
</template>

<script>
import About from './partials/About.vue';
import Portfolio from './partials/Portfolio.vue';
import Contact from './partials/Contact.vue';
import Social from './partials/Social.vue';
export default {
  name: 'Main',
  components: {
    About,
    Portfolio,
    Contact,
    Social
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/theme/variables.scss';

  @media screen and (min-width: $md-breakpoint) {
    main {
      padding-top: $header-height;
    }
  }
</style>
