import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const initialState = {
    user: null,
    token: ''
}

const store = new Vuex.Store({
    state: {...initialState},
    mutations: {
        setUserData( state, userData ) {
            state.user = userData
        },
        setToken( state, token ){
            state.token = token
        }
    }
});

export default store;