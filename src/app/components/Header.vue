<template>
  <header>
    <div class="container header-wrapper">
      <a href="/" class="brand">
        <img src="img/fc.png" alt="FC"></img>
      </a>
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
    position: fixed;
    width: 100%;
    z-index:99999;
    top: 0;
    background-color: rgba(0, 0, 0, .8);
    .header-wrapper {
      text-align: center;
      position: relative;
      .brand {
        line-height: 54px;
        img {
          max-width: 30px;
          vertical-align: middle;
        }
      }
    }
  }

  @media screen and (min-width: $md-breakpoint) {
    header {
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
