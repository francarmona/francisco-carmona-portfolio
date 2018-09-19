<template>
  <section id="contact" class="container">
    <h1>
      <span class="underlined">Contact</span>
    </h1>
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
    <div class="row">
      <div class="col-sm-12">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
          ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
          fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
          justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
          Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
          Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        </p>
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
