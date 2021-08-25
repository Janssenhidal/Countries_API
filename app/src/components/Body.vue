<template>
  <main>
    <div class="homepage">
      <SearchArea />
    </div>
  </main>
</template>

<script>
import axios from "axios";
import SearchArea from "./Search_Area.vue";
export default {
  name: "Body",
  components: {
    SearchArea,
  },
  data() {
    return {
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
        console.log(this.countries);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getCountries();
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
</style>
