<template>
  <footer>
    <div class="go-top-button" v-click-selector="'nav .nav-bar li>a[data-menu-item=home]'"></div>
    <p class="text-center">Made with <span style="color: #e25555;">&hearts;</span> by Francisco José Carmona</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  @import '../scss/theme/variables.scss';
  @import '../scss/functions.scss';
  footer {
    position: absolute;
    bottom: 0;
    height: $footer-height;
    width: 100%;
    padding: 30px 0;
    background-color: color($colors, 'light');
    p {
      font-size: .9rem;
    }
    .go-top-button {
      position: absolute;
      cursor: pointer;
      top: calc(-42px/2);
      left: calc(50% - 42px/2);
      width: 42px;
      height: 42px;
      background: color($colors, 'primary');
      &:hover {
        background: lighten(color($colors, 'primary'), 2%);
      }
      &:before {
        content: "\e5ce";
        font-family: 'Material Icons';
        color: white;
        font-size: 42px;
        position: absolute;
        top: -17px;
      }
      &:after {
        content: "\e5ce";
        font-family: 'Material Icons';
        color: white;
        font-size: 42px;
        position: absolute;
        top: -5px;
      }
    }
  }
</style>
