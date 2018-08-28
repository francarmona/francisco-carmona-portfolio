<template>
  <section id="social">
    <h1>Social</h1>
    <div class="row">
      <div class="col-md-2 col-md-push-3 text-center">
        <a target="_blank" title="Github - Francisco Carmona" href="https://github.com/francarmona">
          <lazy-image src="img/brands/github.svg" alt="Github"></lazy-image>
        </a>
      </div>
      <div class="col-md-2 col-md-push-3 text-center">
        <a target="_blank" title="LinkedIn - Francisco Carmona" href="https://es.linkedin.com/in/francisco-josé-carmona-olmedo-b37a0342">
          <lazy-image src="img/brands/linkedin.svg" alt="Linkedin"></lazy-image>
        </a>
      </div>
      <div class="col-md-2 col-md-push-3 text-center">
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
  name: 'Social',
  components: {
    LazyImage
  }
}
</script>

<style lang="scss" scoped>
  #social {
    img {
      width: 100px;
      height: auto;
    }
  }
</style>
