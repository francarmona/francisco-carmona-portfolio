<template>
  <section id="home">
    <div class="home-background">
      <div class="home-wrapper">
        <h1 class="title">Francisco <span>Carmona</span></h1>
        <h2 class="subtitle">Full-Stack Web Developer</h2>
      </div>
    </div>
    <div class="container">
      <article class="row top-marged">
        <article class="col-md-6 col-md-push-6 text-center">
          <h2>Hello visitors! Welcome to my website</h2>
        </article>
        <article class="col-md-6 col-md-pull-6">
          <div class="laptop centered">
            <div class="content"></div>
            <div class="base"></div>
          </div>
        </article>
      </article>
      <article class="row top-marged">
        <article class="col-md-6 text-center">
          <h2>I made this site for showing the path of what I do and love: <b>coding</b></h2>
        </article>
        <article class="col-md-6">
          <div class="terminal centered">
            <div class="buttons">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="content"></div>
          </div>
        </article>
      </article>
      <article class="row top-marged">
        <article class="col-md-6 col-md-push-6 text-center">
          <h2>Did you notice? This website works offline. Switch off the internet connection and let's try it!</h2>
        </article>
        <article class="col-md-6 col-md-pull-6">
          <div class="phone centered">
            <div class="content"></div>
          </div>
        </article>
      </article>
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
    article {
      h2 {
        font-weight: normal;
        font-size: 1.5rem;
      }
      &.top-marged {
        margin-top: 2.5rem;
      }
    }
    .home-background {
      position: relative;
      height: 330px;
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
          font-size: 1.5rem;
          color: white;
          text-align: center;
          letter-spacing: 1px;
          span {
            font-weight: 100;
          }
        }
        .subtitle {
          color: white;
          text-align: center;
          font-size: 1rem;
          font-weight: 100;
          letter-spacing: 1px;
        }
      }
    }
  }

  @media screen and (min-width: $md-breakpoint) {
    #home {
      article {
        h2 {
          font-size: 2rem;
        }
        &.top-marged {
          margin-top: 10rem;
        }
      }
      .home-background {
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
  }
</style>
