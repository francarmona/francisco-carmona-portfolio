<template>
  <section id="contact" class="container">
    <h1>
      <span class="underlined">Contact</span>
    </h1>
    <div class="row">
      <div class="col-sm-12 text-center contact-wrapper">
        <h2>Pretty neat, huh?</h2>
        <lazy-image class="tada" src="img/tada.svg" alt="Github"></lazy-image>
        <div class="drop-me-wrapper">
          <h3>If you have something to say, drop me a line at</h3>
        </div>
        <a href="mailto:hello@fcarmona.com">hello@fcarmona.com</a>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-sm-12">
        <h3>... or you can reach me here too</h3>
      </div>
    </div>
    <div class="row social">
      <div class="col-sm-2 col-sm-push-3 text-center">
        <a target="_blank" title="Github - Francisco Carmona" href="https://github.com/francarmona">
          <lazy-image src="img/brands/github.svg" alt="Github"></lazy-image>
        </a>
      </div>
      <div class="col-sm-2 col-sm-push-3 text-center">
        <a target="_blank" title="LinkedIn - Francisco Carmona" href="https://es.linkedin.com/in/francisco-josé-carmona-olmedo-b37a0342">
          <lazy-image src="img/brands/linkedin.svg" alt="Linkedin"></lazy-image>
        </a>
      </div>
      <div class="col-sm-2 col-sm-push-3 text-center">
        <a target="_blank" title="Twitter - Francisco Carmona" href="">
          <lazy-image src="img/brands/twitter.svg" alt="Twitter"></lazy-image>
        </a>
      </div>
    </div>
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
  #contact {
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
      img {
        &.tada {
          max-width: 85px;
        }
      }
      a {
        font-size: 1.6rem;
        text-decoration: underline;
      }
    }
    .social {
      & > div.col-sm-2 {
        padding: 8px;
      }
      img {
        width: 60px;
        height: auto;
      }
    }
  }
</style>
