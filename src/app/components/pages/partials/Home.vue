<template>
  <section id="home">
    <div class="home-wrapper">
      <h1 class="title typewriter">Francisco <span>Carmona</span></h1>
      <h2 class="subtitle">Full-Stack Web Developer</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  @import '../../../scss/theme/variables';
  #home {
    position: relative;
    height: 400px;
    background-image: url('img/home-background1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .home-wrapper {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-95%);
      .title {
        font-size: 2rem;
        color: white;
        text-align: center;
        letter-spacing: 2px;
        span {
          font-weight: 100;
        }
      }
      .subtitle {
        color: white;
        text-align: center;
        font-size: 1.3rem;
        font-weight: 100;
        letter-spacing: 1px;
      }
    }
  }

  @media screen and (min-width: $md-breakpoint) {
    #home {
      height: 800px;
      .home-wrapper {
        .title {
          font-size: 3rem;
        }
        .subtitle {
          font-size: 1.5rem;
        }
      }
    }
  }
</style>
