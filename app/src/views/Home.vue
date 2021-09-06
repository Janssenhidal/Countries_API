<template>
  <main>
    <h3>{{ joke }}</h3>
    <div class="homepage">
      <SearchArea />
      <div class="cards">
        <Cards
          v-for="(country, index) in countries"
          :key="index"
          :country="country"
        ></Cards>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import SearchArea from "../components/Search_Area.vue";
import Cards from "../components/Cards.vue";
export default {
  name: "Body",
  components: {
    SearchArea,
    Cards,
  },
  data() {
    return {
      joke: "",
      countries: [],
    };
  },
  methods: {
    async getCountries() {
      try {
        const response = await axios.get(
          "https://restcountries.eu/rest/v2/all"
        );
        this.countries = response.data;
        // console.log(this.countries);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getCountries();
  },
  mounted() {
    // this.joke = this.$store.getters.getCurrentJoke;
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
main {
  background-color: $Very_Dark_Blue;
  color: #fff;
}
.homepage {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 0rem;
}
.cards {
  margin-top: 3rem;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 250px));
  gap: 2.5rem;
  // grid-auto-rows: 1fr;
}
</style>
