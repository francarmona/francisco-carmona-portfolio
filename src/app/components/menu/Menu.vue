<template>
  <nav role="navigation" v-bind:class="{ open: sideNavOpened }">
    <ul class="nav-bar">
      <li v-for="item in this.items">
        <a v-bind:href="item.url">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
  name: 'Menu',
  data: () => {
    return {
      items: [
        {
          url: '#about',
          name: 'About me'
        },
        {
          url: '#portfolio',
          name: 'Portfolio'
        },
        {
          url: '#contact',
          name: 'Contact'
        },
        {
          url: '#social',
          name: 'Social'
        }
      ]
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
        &.router-link-exact-active {
          a {
            color: color($colors, 'primary');
          }
        }
        a {
          cursor: pointer;
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
