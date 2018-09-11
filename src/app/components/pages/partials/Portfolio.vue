<template>
  <section id="portfolio" class="container">
    <h1>Portfolio</h1>
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
        {groupTitle: 'Currently<div>Happily working on asdfsdfER</div>', events: [
            {id: 1, title:'SIGO', subtitle: 'Superheroic JavaScript MVW Framework', body: `
        <p>
          HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications.
        </p>
        <p>
          AngularJS lets you extend HTML vocabulary for your application.
          The resulting environment is extraordinarily expressive, readable, and quick to develop.
        </p>
        `, tags: [{title: 'AngularJS', image: 'img/brands/angularjs.svg'}, {title: 'Laravel', image: 'img/brands/laravel.svg'}, {title: 'MongoDB', image: 'img/brands/mongodb.svg'}, {title: 'Docker', image: 'img/brands/docker.svg'}], image: 'img/sigo-spt.png', borderColor: '#fd1720'},
            {id: 2, title:'Special Tours', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Knockout is a standalone JavaScript implementation of the Model-View-ViewModel pattern with templates.
        </p>
        <p>
          The underlying principles are therefore: <br>
          &nbsp- a clear separation between domain data, view components and data to be displayed. <br>
          &nbsp- the presence of a clearly defined layer of specialized code to manage the relationships between the view components.
        </p>
      `, tags: [{title: 'AngularJS', image: 'img/brands/angularjs.svg'}, {title: 'Laravel', image: 'img/brands/laravel.svg'}, {title: 'MongoDB', image: 'img/brands/mongodb.svg'}, {title: 'Docker', image: 'img/brands/docker.svg'}], image: 'img/spt-web.png', borderColor: '#4d9de0'},

            {id: 3, title:'Comercial Viajes', subtitle: 'The faster way to build Javscript apps', body: `
        <p>
          Meteor, or MeteorJS, is a free and open-source isomorphic JavaScript web framework written using Node.js.
          Meteor allows for rapid prototyping and produces cross-platform (Android, iOS, Web) code.
          It integrates with MongoDB and uses the Distributed Data Protocol and a publish–subscribe pattern to automatically propagate
          data changes to clients without requiring the developer to write any synchronization code.
          On the client, Meteor can be used with its own Blaze templating engine, as well as with the Angular or React frameworks.
        </p>
      `, tags: [{title: 'Angular', image: 'img/brands/angularjs.svg'}, {title: 'Ionic', image: 'img/brands/ionic.svg'}],image: 'img/app-comercial-viajes.png', borderColor: '#7cd499'},
            {id: 4, title:'My Trip', subtitle: 'A framework for ambitious web developers', body: `
        <p>
          Developers write dramatically less code with integrated templates that update automatically when the underlying data changes.
        </p>
        <p>
          No need to waste time on trivial choices. Ember's abstractions allow developers to focus on what makes your app unique.
        </p>
        <p>
          Ember.js is built for productivity. Designed with developer ergonomics in mind, its friendly APIs help developers efficiently get the job done.
        </p>
      `, tags: [{title: 'Ember', image: 'img/brands/ember.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/mytrip.png', borderColor: '#b5b5b5'},


            {id: 5, title:'Tourist guides', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Backbone.js gives structure to web applications by providing models with key-value binding and custom events,
          collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.
        </p>
      `, tags: [{title: 'Backbone.js', image: 'img/brands/backbonejs.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/app-guias.png', borderColor: '#36b2c3'},
            {id: 6, title:'Tourist visits', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Backbone.js gives structure to web applications by providing models with key-value binding and custom events,
          collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.
        </p>
      `, tags: [{title: 'Backbone.js', image: 'img/brands/backbonejs.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/excursiones.png', borderColor: '#74a57f'}
          ]},
        {groupTitle: '2012 - 2013', events: [
            {id: 7, title:'TLS Group', subtitle: 'A JavaScript library for building user interfaces', body: `
        <p>
          React makes it painless to create interactive UIs. Design simple views for each state in your application,
          and React will efficiently update and render just the right components when your data changes.
        </p>
        <p>
          Build encapsulated components that manage their own state, then compose them to make complex UIs.
        </p>
      `, tags: [{title: 'Meteor', image: 'img/brands/react.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/tls-group.png', borderColor: '#9fcc4d'},
            {id: 8, title:'Vue PWA Boilerplate', subtitle: 'Extend the HTML', body: `
        <p>
          The Polymer library provides a set of features for creating custom elements.
          These features are designed to make it easier and faster to make custom elements that work like standard DOM elements.
        </p>
      `, tags: [{title: 'VueJS', image: 'img/brands/vuejs.svg'},{title: 'Gulp', image: 'img/brands/gulp.svg'}], image: 'img/pwa-vue-scaffold.png', borderColor: '#16bac5'}
          ]},
        {groupTitle: '2014 - 2015', events: [
            {id: 9, title:'Vue.js', subtitle: 'The Progressive JavaScript Framework', body: `
        <p>
          Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!
        </p>
        <p>
          An incrementally adoptable ecosystem that scales between a library and a full-featured framework.
        </p>
        <p>
          20KB min+gzip Runtime Blazing Fast Virtual DOM Minimal Optimization Efforts
        </p>
      `, tags: [{title: 'VueJs', image: 'img/brands/vuejs.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/pwa-fast.png', borderColor: '#565656'}
          ]},
        {groupTitle: '2015 - 2016', events: [
            {id: 10, title:'Angular', subtitle: 'One framework. Mobile & desktop', body: `
        <p>
          Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components.
          Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.
        </p>
        <p>
          From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.
        </p>
      `, tags: [{title: 'Angular', image: 'img/brands/angularjs.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/pwa-fast.png', borderColor: '#94A89A'}]}]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
