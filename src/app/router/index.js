import VueRouter from 'vue-router';
import Resume from '../components/pages/Resume.vue';
import PageNotFound from '../components/pages/PageNotFound.vue';
import Layout from '../components/Layout.vue';

const routes = [
  { path: '/', component: Layout },
  { path: '/resume', component: Resume },
  { path: '*', component: PageNotFound }
];

export default new VueRouter({
  routes
});
