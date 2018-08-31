<template>
  <div v-bind:class="{ active: sideNavOpened }" class="menu-toggle" style="" v-on:click.stop="toggleSideNav">
    <div class="line line1"></div>
    <div class="line line2"></div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
  name: 'MenuToggle',
  methods: {
    toggleSideNav() {
      this.$store.commit('sideNav/toggleSideNav');
    }
  },
  computed: {
    ...mapGetters('sideNav', {
      sideNavOpened: 'sideNavOpened'
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/theme/variables';
  $toggleSize: 40px;
  .menu-toggle {
    display: none;
    .line {
      position: absolute;
      -moz-transition: .35s ease-in-out;
      -webkit-transition: .35s ease-in-out;
      -o-transition: .35s ease-in-out;
      transition: .35s ease-in-out;
      width: 25px;
      height:3px;
      background-color: white;
      left: calc(#{$toggleSize} / 2 - 25px/2);
      &.line1 {
        top: calc(#{$toggleSize} / 2 - 5px);
      }
      &.line2 {
        top: calc(#{$toggleSize} / 2 + 5px);
      }
    }
  }
  @media screen and (max-width: $md-breakpoint - 1) {
    .menu-toggle {
      height: $toggleSize;
      width: $toggleSize;
      display: inline-block;
      position: absolute;
      right: 0;
      top: calc(54px/2 - #{$toggleSize} / 2);
      &.active {
        .line {
          top: calc(#{$toggleSize} / 2);
        }
        .line1 {
          transform: rotate(135deg);

        }
        .line2 {
          transform: rotate(45deg);
        }
      }
    }
  }
</style>
