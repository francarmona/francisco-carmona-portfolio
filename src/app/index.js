import Vue from 'vue';
import App from './App.vue';
import store from './store';
import ClickSelectorDirective from './directives/ClickSelectorDirective';
import VueScrollActive from 'vue-scrollactive';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    sm: 549,
    md: 800,
    lg: Infinity,
  }
});

Vue.use(VueScrollActive);

Vue.directive('click-selector', ClickSelectorDirective);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log('Service Worker registered');
  })
    .catch((error) => {
      console.log('Registration failed with ' + error);
    });
}
