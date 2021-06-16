import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "axios"
export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {},
    modules: {}
})