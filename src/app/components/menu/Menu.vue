<template>
    <scrollactive active-class="active" :offset="120" role="navigation" v-bind:class="{ open: sideNavOpened }">
      <ul class="nav-bar">
        <li v-for="item in this.items">
          <a v-on:click.stop="toggleSideNav()" v-bind:href="item.url" v-bind:data-menu-item="item.id" class="nav-link scrollactive-item">{{ item.name }}</a>
        </li>
      </ul>
    </scrollactive>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { menuItems } from "./data";

export default {
  name: 'Menu',
  data: () => {
    return {
      items: menuItems
    }
  },
  methods: {
    ...mapMutations('sideNav', {
      toggleSideNav: 'toggleSideNav'
    })
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
  @import '../../scss/functions';

  nav {
    display: inline-block;
    line-height: $header-height;
    float: right;
    .nav-bar {
      margin: 0;
      padding: 0;
      li {
        display: inline-block;
        padding: 0 2.5rem 0;
        text-align: center;
        .nav-link {
          color: white;
          cursor: pointer;
          &.active {
            color: color($colors, 'primary');
          }
        }
      }
    }
  }

  @media screen and (max-width: $md-breakpoint - 1) {
    nav {
      float: none;
      display: block;
      width: 100%;
      line-height: inherit;
      -webkit-transition: all .4s ease-in-out;
      -moz-transition: all .4s ease-in-out;
      transition: all .4s ease-in-out;
      max-height: 0;
      overflow: hidden;
      &.open {
        max-height: 300px;
      }
      .nav-bar {
        li {
          padding: 5px 0;
          display: block;
          a {
            padding-bottom: .4rem;
            display: block;
          }
        }
      }
    }
  }

</style>
