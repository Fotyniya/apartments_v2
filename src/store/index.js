import Vuex from 'vuex';
import Vue from 'vue';
import authModule from './modules/auth';
import createPersistedState from "vuex-persistedstate";

const dataState = createPersistedState({
    paths: ['auth.token']
  })

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth: authModule,
    },
    plugins: [ dataState ]
});

export default store;