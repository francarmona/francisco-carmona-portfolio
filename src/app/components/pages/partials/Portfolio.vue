<template>
  <section id="portfolio" class="container">
    <h1>
      <span class="underlined">Portfolio</span>
    </h1>
    <div class="row">
      <div class="col-sm-12">
        <h2>Currently...</h2>
      </div>
    </div>
    <div class="row happily">
      <div class="col-sm-12 col-md-4 col-md-push-4 happily-wrapper-text">Coding happily every day on </div>
      <div class="col-sm-12">
        <img src="/img/brands/specialtours.png" alt="Special Tours">
      </div>
    </div>
    <Timeline v-bind:groups="groups"></Timeline>
  </section>
</template>

<script>
import LazyImage from '../../LazyImage.vue';
import Timeline from '../../timeline/Timeline.vue';
export default {
  name: 'Portfolio',
  components: {
    LazyImage,
    Timeline
  },
  data: () => {
    return {
      groups: [
        {groupTitle: '', events: [
            {id: 1, title:'SIGO', subtitle: 'Sistema Integral de Gestión Online', body: `
        <p>
        Online management system for operating with tourist packages.
        </p>
        <p>
          Some years ago it was an application made in Visual Basic. The company needed access to it from everywhere and from any device,
          that is why we migrated it to a web application. It has been developed in AngularJs, but it is not
          a regular SPA, it is a "multi-angular-app". We have one AngularJs app (with its own routing) per feature, and we load each one
          in a Laravel route. Every application consumes an API Rest developed with Slim framework.
        </p>
        <p>
          Right now we are evolving the app and migrating it to Angular 6 in a progressive way, so AngularJs and Angular 6
          apps are dealing together in the same Laravel "skeleton". Same way we are splitting the Api Rest
          into small microservices.
        </p>
        `, tags: [{title: 'AngularJS', image: 'img/brands/angularjs.svg'},
                {title: 'Laravel', image: 'img/brands/laravel.svg'},
                {title: 'Slim', image: 'img/brands/slim.png'},
                {title: 'MongoDB', image: 'img/brands/mongodb.svg'},
                {title: 'Openshift', image: 'img/brands/openshift.svg'},
                {title: 'Docker', image: 'img/brands/docker.svg'}], image: 'img/sigo-spt.png', borderColor: '#fd1720'},
            {id: 2, title:'Special Tours', subtitle: 'Reservation website for travel agencies', body: `
        <p>
          Travel agencies book tour packages and manage the reservations through this website.
        </p>
        <p>
          The crucial part was to make it extremely fast and reliable because most of the visitors are from
          South America and there the internet connection is quite slow.
          The application is containerized and deployed on an OpenShift cluster and full monitored with Instana.
        </p>
      `, tags: [{title: 'AngularJS', image: 'img/brands/angularjs.svg'},
                {title: 'Laravel', image: 'img/brands/laravel.svg'},
                {title: 'Slim', image: 'img/brands/slim.png'},
                {title: 'MongoDB', image: 'img/brands/mongodb.svg'},
                {title: 'Openshift', image: 'img/brands/openshift.svg'},
                {title: 'Docker', image: 'img/brands/docker.svg'}], image: 'img/spt-web.png', borderColor: '#4d9de0'},
            {id: 3, title:'Vue PWA Boilerplate', subtitle: 'Offline first web app', body: `
        <p>Home made project for easily building Progressive Web Apps.</p>
        <p>
          It has all features of a PWA (reliable, fast and engaging) and others like hot reloading
          (HMR), lazy loaded images, linting, unit testing with Vue Test Utils and Jest, Travis CI integration, Firebase deployment.
        </p>
        <p>My portfolio is a fork of this project.</p>
        <p>
          Have a look at <a target="_blank" href="https://github.com/francarmona/vue-pwa-es6-gulp-scaffold" title="Github - Vue PWA Boilerplate">Github</a>!
        </p>
      `, tags: [{title: 'VueJS', image: 'img/brands/vuejs.svg'},{title: 'Gulp', image: 'img/brands/gulp.svg'}], image: 'img/pwa-vue-scaffold.png', borderColor: '#16bac5'},
            {id: 4, title:'Comercial Viajes', subtitle: 'Mobile app for travel agents', body: `
        <p>Travel agents can arrange business trips and organize the meetings with their clients.</p>
        <p>On trip they can even search for sales statistics of the clients they are visiting or
          fill out reports about how the meeting was, and much more. It all works offline and it
          is automatically synchronized when the device is online.
        </p>
      `, tags: [{title: 'Angular', image: 'img/brands/angularjs.svg'}, {title: 'Ionic', image: 'img/brands/ionic.svg'}],image: 'img/app-comercial-viajes.png', borderColor: '#7cd499'},
            {id: 5, title:'My Trip', subtitle: 'A mobile app for passengers', body: `
        <p>
          On trip passengers can see their daily travel program, list of hotels, transfer information, communicate with their tourist guide and
          assess the quality of service.
        </p>
      `, tags: [{title: 'OnsenUI', image: 'img/brands/onsenui.png'}, {title: 'Slim', image: 'img/brands/slim.png'}], image: 'img/mytrip.png', borderColor: '#b5b5b5'},
            {id: 6, title:'Tourist guides', subtitle: 'A mobile app for tourist guides', body: `
        <p>
          Guides can find all the documentation they need during the tour (arrival dates of passengers, transfer information, reports, quality surveys, ...), sell tourist visits and much more.
        </p>
      `, tags: [{title: 'OnsenUI', image: 'img/brands/onsenui.png'}, {title: 'Slim', image: 'img/brands/slim.png'}], image: 'img/app-guias.png', borderColor: '#36b2c3'},
            {id: 7, title:'Tourist visits', subtitle: 'A mobile app for selling tourist visits', body: `
        <p>
          People book visits to places near from Madrid through the application. Kiosks can use it too for
          selling visits to pedestrians that don't know about the existence of the mobile application.
        </p>
        <p>
          It is developed with Ionic and unit tested with Karma and Jasmine. The back is a REST API developed
          with Slim3.
        </p>
      `, tags: [{title: 'Angular', image: 'img/brands/angularjs.svg'}, {title: 'Ionic', image: 'img/brands/ionic.svg'}, {title: 'Slim', image: 'img/brands/slim.png'}], image: 'img/excursiones.png', borderColor: '#74a57f'}
          ]},
        {groupTitle: '2013 - 2014', events: [
            {id: 8, title:'TLS Group', subtitle: 'A place to find accommodation', body: `
        <p>
          Real state portal where students and travellers book accommodation.
        </p>
        <p>
          It is developed with a customized PHP MVC framework in backend and in a homemade modular and object oriented
          way in the frontend.
          The application is real time error monitored with Sentry.
        </p>
      `, tags: [{title: 'FuelPHP', image: 'img/brands/fuelphp.png'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}, {title: 'HTML5', image: 'img/brands/html5.svg'}, {title: 'CSS', image: 'img/brands/css3.svg'}], image: 'img/tls-group.png', borderColor: '#9fcc4d'}
          ]}
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #portfolio {
    .happily {
      text-align: center;
      font-size: 1.25rem;
      .happily-wrapper-text {
        padding-bottom: .2rem;
      }
      img {
        max-width: 230px;
      }
    }
  }
</style>
