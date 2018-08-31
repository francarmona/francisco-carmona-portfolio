
import Vue from 'vue';
import Vuex from 'vuex';
import sideNav from './modules/sideNav';
import timeline from './modules/timeline';
import navigation from './modules/navigation';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sideNav,
    timeline,
    navigation
  }
});
