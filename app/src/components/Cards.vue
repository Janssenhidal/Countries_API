<template>
  <div class="card">
    <div class="flag-wrapper">
      <img :src="flag" alt="" />
    </div>
    <div class="country-details">
      <h1>{{ name }}</h1>
      <h2>
        Population: <span>{{ numberWithCommas(population) }}</span>
      </h2>
      <h2>
        Region: <span>{{ region }}</span>
      </h2>
      <h2>
        Capital: <span>{{ capital }}</span>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {
    name: {
      type: String,
    },
    flag: {
      type: String,
    },
    population: {
      type: Number,
    },
    region: {
      type: String,
    },
    capital: {
      type: String,
    },
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
.card {
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
