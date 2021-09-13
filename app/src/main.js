import { createApp } from "vue";
import { createStore } from 'vuex'
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const store = createStore({
    state: {
        allCountries: [],
        selectedCountry: Object(),
        selectedRegion: '',
        borders: [],
        darkMode: true,
        filterState: false,
    },
    mutations: {
        setCountries(state, payload) {
            state.allCountries = payload;
        },
        setSelectedCountry(state, payload) {
            state.selectedCountry = payload;
        },
        setBorders(state, payload) {
            state.borders = payload;
        },
        resetBorders(state) {
            state.borders = [];
        },
        regionSelect(state, payload) {
            state.selectedRegion = payload
        },
        colourThemeToggle(state) {
            state.darkMode = !state.darkMode
        },
        filterActivate(state) {
            state.filterState = true
        }
    },
    actions: {
        async getAllCountries(context) {
            try {
                const response = await axios.get('https://restcountries.eu/rest/v2/all');
                context.commit("setCountries", response.data)
            } catch (error) {
                console.error(error);
            }
        },
        async selectCountry(context, code) {
            if (code != null) {
                try {
                    const response = await axios.get('https://restcountries.eu/rest/v2/alpha/' + code);
                    context.commit("setSelectedCountry", response.data)
                } catch (error) {
                    console.error(error);
                }
            }
        },
        findBorders(context, code) {
            if (code != null) {
                axios.get('https://restcountries.eu/rest/v2/alpha/' + code + '?fields=borders')
                    .then(response => {
                        let query = response.data.borders
                        query = query.join(';').split(',')
                        if (query != "") {
                            axios.get('https://restcountries.eu/rest/v2/alpha?codes=' + query)
                                .then(function (response) {
                                    context.commit("setBorders", response.data)
                                })
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        }
    },
    modules: {},
    getters: {
        allCountries: state => {
            return state.allCountries
        },
        borders: state => {
            return state.borders
        },
        filterByRegion: state => {
            return state.allCountries.filter(country => country.region === state.selectedRegion)
        },
    }
})
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
