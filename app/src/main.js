import { createApp } from "vue";
import { createStore } from 'vuex'
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const store = createStore({
    state: {
        allCountries: [],
        testing: "IDK what is going on!"
    },
    mutations: {
        setCountries(state, payload) {
            state.allCountries = payload;
        }
    },
    actions: {
        async getAllCountries(context) {
            try {
                const response = await axios.get('https://restcountries.eu/rest/v2/all');
                console.log(response.data);
                context.commit("setCountries", response.data)
            } catch (error) {
                console.error(error);
            }
        }
    },
    modules: {
    },
    getters: {}
})
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
