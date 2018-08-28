<template>
  <header>
    <div class="container header-wrapper">
      <a href="/" class="brand">Asdf</a>
      <MenuToggle></MenuToggle>
      <Menu></Menu>
    </div>
  </header>
</template>

<script>
import Menu from './menu/Menu.vue';
import MenuToggle from './menu/MenuToggle.vue';
export default {
  name: 'Header',
  components: {MenuToggle, Menu}
}
</script>

<style lang="scss" scoped>
  @import '../scss/theme/variables.scss';
  @import '../scss/functions.scss';

  header {
    padding: 0 2rem;
    .header-wrapper {
      text-align: center;
      .brand {
        line-height: 54px;
        letter-spacing: 0.8px;
        color: color($colors, 'primary');
        font-size: 1.4rem;
      }
    }
  }

  @media screen and (min-width: $md-breakpoint) {
    header {
      position: fixed;
      width: 100%;
      background-color: white;
      z-index:99999;
      .header-wrapper {
        text-align: left;
        height: $header-height;
        .brand {
          line-height: $header-height;
        }
      }
    }
  }
</style>
