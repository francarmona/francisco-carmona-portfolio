<template>
  <div class="row not-found-wrapper top-marged">
    <div class="col-sm-12 col-md-6 col-md-push-3 text-center">
      <div class="not-found-http-error">404</div>
      <h2>Ooops. The page you're looking for doesn't exist.</h2>
      <a href="/">Take me back home</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style lang="scss" scoped>
  @import '../../scss/theme/variables';
  @import '../../scss/functions';
  .not-found-wrapper {
    .not-found-http-error {
      font-size: 7rem;
      color: color($colors, 'primary');
    }
    a {
      text-decoration: underline;
    }
  }
</style>
