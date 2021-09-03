<template>
  <div class="card" @click="selectThisCountry">
    <div class="flag-wrapper">
      <img :src="country.flag" alt="" />
    </div>
    <div class="country-details">
      <h1>{{ country.name }}</h1>
      <h2>
        Population: <span>{{ numberWithCommas }}</span>
      </h2>
      <h2>
        Region: <span>{{ country.region }}</span>
      </h2>
      <h2>
        Capital: <span>{{ country.capital }}</span>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {
    country: {
      type: Object,
    },
  },
  computed: {
    numberWithCommas() {
      return this.country.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  methods: {
    selectThisCountry() {
      let data = this.country;
      console.log(data);
      this.$router.push({
        path: `/country/${this.country.alpha3Code}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
.card {
  cursor: pointer;
  height: 100%;
  background-color: $Dark_Blue;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  align-self: start;
}
.country-details {
  padding: 1.5rem;
  h1 {
    font-size: 16px;
    font-weight: 800;
  }
  h2 {
    font-size: 14px;
    font-weight: 600;
    padding-top: 0.5rem;
  }
  span {
    font-weight: 300;
  }
}
.flag-wrapper {
  width: 250px;
  height: 160px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
