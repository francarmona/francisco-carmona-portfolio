<template>
  <section id="about" class="container">
    <h1>
      <span class="underlined">About me</span>
    </h1>
    <div class="row">
      <div class="col-sm-12">
        <h2>Bio</h2>
        <p>
          I'm Francisco J. Carmona, a Spanish full­stack web developer living in Madrid that speaks PHP and Javascript.
          I have more than 8 years of experience in developing amazing and high-performance web and mobile apps.
          I live and breathe web development. I'm a full stack geek that enjoys digging into the latest web technologies.
        </p>
        <p>
          My passion in web development started in Málaga, where I began programming with vanilla js and jQuery in the front-end
          and raw PHP in the back-end (with an own PHP framework). After that I realized that if I wanted to build reliable,
          scalable, maintainable and well-architected web applications I had to dig into web frameworks. So that is what I did!
          Codeigniter was the initial point of my journey in back­end frameworks, then I continued with FuelPHP and currently
          I am using Laravel, Slim, Lumen and some components of Symfony. In front­end I started coding with BackboneJs and AngularJs,
          and right now I  ́m immersed in Angular and learning React and Vue.
        </p>
        <p>
          Nowadays it is important to automate the non-human part of the software development process. That is why I use Jenkins,
          Gitlab CI and Travis for CI/CD and SonarQube for static analysis of code.
        </p>
        <p>
          Right now, I work as Senior Software Engineer @<a target="_blank" title="Special Tours" alt="Special Tours"
                                                           href="https://es.linkedin.com/company/special-tours">Special Tours</a>.
        </p>
        <p>
          Im usually pretty busy at work, but I really enjoy pushing code to <a target="_blank" title="Github Francisco Carmona"
                                                                                alt="Github Francisco Carmona" href="https://github.com/francarmona">Github</a>.
        </p>
        <p>
          If you want to know more about me, just browse to my <a target="_blank" title="Linkedin Francisco Carmona"
                                                                     alt="Linkedin Francisco Carmona"
                                                                  href="https://www.linkedin.com/in/francisco-jos%C3%A9-carmona-olmedo-b37a0342">LinkedIn</a>.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h2>Skills</h2>
      </div>
    </div>
    <div class="skill-wrapper">
      <div class="skill-group row">
        <div class="col-sm-12">
          <h3>Frontend</h3>
          <div v-for="item in skills.frontend" class="skill-item col-sm-6 col-md-2">
            <img v-bind:src="item.image">
            {{ item.title }}
          </div>
        </div>
      </div>
      <div class="skill-group row">
        <div class="col-sm-12">
          <h3>Backend</h3>
          <div v-for="item in skills.backend" class="skill-item col-sm-6 col-md-2">
            <img v-bind:src="item.image">
            {{ item.title }}
          </div>
        </div>
      </div>
      <div class="skill-group row">
        <div class="col-sm-12">
          <h3>DevOps</h3>
          <div v-for="item in skills.devops" class="skill-item col-sm-6 col-md-2">
            <img v-bind:src="item.image">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data: () => {
    return {
      skills: {
        frontend: [
          {title:'HTML5', image:'img/brands/html5.svg'},
          {title:'CSS3', image:'img/brands/css3.svg'},
          {title:'Sass', image:'img/brands/sass.svg'},
          {title:'Angular', image:'img/brands/angularjs.svg'},
          {title:'Ionic', image:'img/brands/ionic.svg'},
          {title:'OnsenUI', image:'img/brands/onsenui.png'},
          {title:'Vue', image:'img/brands/vuejs.svg'},
          {title:'React', image:'img/brands/react.svg'},
          {title:'Redux', image:'img/brands/redux.svg'},
          {title:'Jasmine', image:'img/brands/jasmine.svg'},
          {title:'Karma', image:'img/brands/karma.svg'},
          {title:'Npm', image:'img/brands/npm.svg'},
          {title:'Bower', image:'img/brands/bower.svg'},
          {title:'Gulp', image:'img/brands/gulp.svg'},
          {title:'Webpack', image:'img/brands/webpack.svg'},
          {title:'Grunt', image:'img/brands/grunt.svg'}
        ],
        backend: [
          {title:'PHP', image:'img/brands/php.svg'},
          {title:'Laravel', image:'img/brands/laravel.svg'},
          {title:'Slim', image:'img/brands/slim.png'},
          {title:'Codeigniter', image:'img/brands/codeigniter.svg'},
          {title:'FuelPhp', image:'img/brands/fuelphp.png'},
          {title:'Node', image:'img/brands/nodejs.svg'},
          {title:'Mongo', image:'img/brands/mongodb.svg'},
          {title:'Mysql', image:'img/brands/mysql.svg'},
          {title:'Cassandra', image:'img/brands/cassandra.svg'}
        ],
        devops: [
          {title:'Docker', image:'img/brands/docker.svg'},
          {title:'Rancher', image:'img/brands/rancher.svg'},
          {title:'Openshift', image:'img/brands/openshift.svg'},
          {title:'Kubernetes', image:'img/brands/kubernets.svg'},
          {title:'Jenkins', image:'img/brands/jenkins.svg'},
          {title:'SonarQube', image:'img/brands/sonarqube.png'},
          {title:'Git', image:'img/brands/git.svg'},
          {title:'Gitlab', image:'img/brands/gitlab.svg'},
          {title:'AWS EC2', image:'img/brands/aws-ec2.svg'},
          {title:'AWS S3', image:'img/brands/aws-s3.svg'},
          {title:'Jira', image:'img/brands/jira.svg'},
          {title:'Sentry', image:'img/brands/sentry.svg'},
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../scss/theme/variables';
  #about {
    h2 {
      font-size: 2rem;
    }
    a {
      text-decoration: underline;
    }

    .skill-wrapper {
      & .skill-group:not(:last-child){
        margin-bottom: 4rem;
      }
      .skill-group {
        background-color: white;
        border-radius: 8px;
        padding: 0 30px;
        border: 1px solid #ddd;
        h3 {
          font-size: 1.5rem;
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 20px;
        }
      }
      .skill-item {
        padding: 20px 5px;
        text-align: center;
        img {
          max-height: 80px;
          margin: 0 auto;
          display: block;
        }
      }
    }
  }
  @media screen and (max-width: $md-breakpoint - 1) {
    #about {
      .skill-wrapper {
        & .skill-group:not(:last-child) {
          margin-bottom: 2rem;
        }
        .skill-group {
          h3 {
            font-size: 1.3rem;
            text-align: center;
          }
        }
        .skill-item {
          img {
            max-height: 50px;
          }
        }
      }
    }
  }
</style>
