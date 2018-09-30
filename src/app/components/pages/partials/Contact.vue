<template>
  <section id="contact" class="container">
    <h1>
      <span class="underlined">Contact</span>
    </h1>
    <article class="row">
      <article class="col-sm-12 text-center contact-wrapper">
        <h2>Pretty neat, huh?</h2>
        <div class="drop-me-wrapper">
          <h3>If you have something to say, drop me a line at</h3>
        </div>
        <a href="mailto:hello@fcarmona.com">hello@fcarmona.com</a>
      </article>
    </article>
    <article class="row text-center">
      <article class="col-sm-12">
        <h3>... or you can reach me here too</h3>
      </article>
    </article>
    <article class="row social">
      <div class="col-sm-4 col-md-2 col-md-push-3 text-center">
        <a target="_blank" title="Github - Francisco Carmona" href="https://github.com/francarmona">
          <lazy-image src="img/brands/github.svg" alt="Github"></lazy-image>
        </a>
      </div>
      <div class="col-sm-4 col-md-2 col-md-push-3 text-center">
        <a target="_blank" title="LinkedIn - Francisco Carmona" href="https://es.linkedin.com/in/francisco-josé-carmona-olmedo-b37a0342">
          <lazy-image src="img/brands/linkedin.svg" alt="Linkedin"></lazy-image>
        </a>
      </div>
      <div class="col-sm-4 col-md-2 col-md-push-3 text-center">
        <a target="_blank" title="Twitter - Francisco Carmona" href="">
          <lazy-image src="img/brands/twitter.svg" alt="Twitter"></lazy-image>
        </a>
      </div>
    </article>
  </section>
</template>

<script>
import LazyImage from '../../LazyImage.vue';
export default {
  name: 'Contact',
  components: {
    LazyImage
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../scss/theme/variables';
  #contact {
    h3 {
      font-size: 1.2rem;
    }
    & .row:not(:last-child) {
      margin-bottom: 1.5rem;
    }
    .contact-wrapper {
      .drop-me-wrapper {
        margin-top:1.5rem;
      }
      h2 {
        font-size: 1.4rem;
      }
      a {
        font-size: 1.15rem;
        text-decoration: underline;
      }
    }
    .social {
      img {
        width: 50px;
        height: auto;
      }
    }

    @media screen and (min-width: $md-breakpoint) {
      h3 {
        font-size: 1.6rem;
      }
      & .row:not(:last-child) {
        margin-bottom: 3rem;
      }
      .contact-wrapper {
        .drop-me-wrapper {
          margin-top:3rem;
        }
        h2 {
          font-size: 2rem;
        }
        a {
          font-size: 1.6rem;
        }
      }
      .social {
        img {
          width: 65px;
        }
      }
    }
  }
</style>
