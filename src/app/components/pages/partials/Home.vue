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
            <div class="content">
              <i class="material-icons">
                fingerprint
              </i>
            </div>
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
            <div class="content">
              <div>
                FranC:portfolio fcarmona$ npm run test
              </div>
              <div>
                > jest
              </div>
              <div class="small-terminal-text">
                <b>Test Suites:</b> <span class="green">8 passed</span>, 8 total
                <br><b>Tests:</b> <span class="green">14 passed</span> 14 total
              </div>
            </div>
          </div>
        </article>
      </article>
      <article class="row top-marged">
        <article class="col-md-6 col-md-push-6 text-center">
          <h2>Did you notice? This website works offline. Switch off the internet connection and try it!</h2>
        </article>
        <article class="col-md-6 col-md-pull-6">
          <div class="phone centered">
            <div class="content text-center">
              <div class="content-wrapper">
                <img src="img/wifi-off.svg" class="icon" alt="wifi off">
                <div class="title">PWA</div>
                <img src="img/lighthouse.png" alt="lighthouse pwa">
                <div class="subtitle">Score 90+/100</div>
              </div>
            </div>
          </div>
        </article>
      </article>
      <article class="row top-marged">
        <article class="col-md-6 text-center lets-dive">
          <h2>Let's dive into my coding experience</h2>
          <button class="btn btn-danger" v-click-selector="'nav .nav-bar li>a[data-menu-item=about]'">Let's go!</button>
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
            <div class="content lets-go">
              <img src="img/rocket.svg" alt="rocket">
            </div>
          </div>
        </article>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToMenuItem(id) {
      document.querySelector('nav .nav-bar li>a[data-menu-item="' + id + '"]').click();
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../scss/theme/variables';
  #home {
    article {
      h2 {
        font-weight: normal;
        font-size: 1.3rem;
      }
      &.top-marged {
        margin-top: 2.5rem;
      }
      .lets-dive {
        padding-bottom: 1.3rem;
      }
    }
    .home-background {
      position: relative;
      height: 300px;
      background-image: url('img/home-background.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      .home-wrapper {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
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
    .terminal {
      .content {
        &.lets-go {
          background: #9e7dd8;
          img {
            width: 4rem;
            left: calc(50% - 4rem/2);
            top: calc(50% - 4rem/2);
            position: absolute;
          }
        }
        .small-terminal-text {
          font-size: .77rem;
        }
      }
    }
    .phone {
      .content {
        .content-wrapper {
          padding: 9px;
          img {
            width: 50px;
            &.icon {
              width: 1.5rem;
            }
          }
          .title {
            font-size: .75rem;
          }
          .subtitle {
            font-size: .63rem;
          }
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
        height: 600px;
        .home-wrapper {
          .title {
            font-size: 3rem;
          }
          .subtitle {
            font-size: 1.5rem;
          }
        }
      }
      .terminal {
        .content {
          .small-terminal-text {
            font-size: .81rem;
          }
        }
      }
      .phone {
        .content {
          .content-wrapper {
            padding-top: 2rem;
            img {
              width: 55px;
              &.icon {
                width: 2rem;
              }
            }
            .title {
              padding: 10px;
              font-size: 1rem;
            }
            .subtitle {
              font-size: .8rem;
            }
          }
        }
      }
    }
  }
</style>
