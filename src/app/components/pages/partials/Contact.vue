<template>
  <section id="contact" class="container">
    <h1>Contact</h1>
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
    .social {
      & > div.col-sm-2 {
        padding: 8px;
      }
      img {
        width: 65px;
        height: auto;
      }
    }
  }
</style>
