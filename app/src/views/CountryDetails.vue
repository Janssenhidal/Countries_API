<template>
  <div class="container">
    <a class="back" @click="$router.go(-1)"
      ><i class="fa fa-long-arrow-left" aria-hidden="true"></i>Back</a
    >
    <div class="content-wrapper" v-if="selectedCountry">
      <div class="flag-wrapper">
        <img :src="selectedCountry.flag" alt="" />
      </div>

      <div class="country-details">
        <h1>{{ selectedCountry.name }}</h1>
        <div class="lists">
          <ul>
            <li>
              Native Name: <span>{{ selectedCountry.nativeName }}</span>
            </li>
            <li>
              Population: <span> {{ population }}</span>
            </li>
            <li>
              Region: <span>{{ selectedCountry.region }}</span>
            </li>
            <li>
              Sub Region: <span>{{ selectedCountry.subregion }}</span>
            </li>
            <li>
              Capital: <span>{{ selectedCountry.capital }}</span>
            </li>
          </ul>
          <ul>
            <li>
              Top Level Domain:
              <span>{{ topLevelDomain }}</span>
            </li>
            <li>
              Currencies: <span>{{ currency }}</span>
            </li>
            <li>
              Languages: <span>{{ languages }}</span>
            </li>
          </ul>
        </div>
        <div class="borders-wrapper">
          <p>Border Countries:</p>
          <ul class="borders">
            <li
              v-for="(border, index) in borders"
              :key="index"
              @click="goToCountry(border)"
            >
              {{ border.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CountryDetails",
  methods: {
    loadCountry() {
      this.$store.dispatch("selectCountry", this.$route.params.countryName);
      this.$store.dispatch("findBorders", this.$route.params.countryName);
    },
    resetBorders() {
      this.$store.commit("resetBorders");
    },
    goToCountry(border) {
      this.$router.push({
        path: `/country/${border.alpha3Code}`,
      });
      this.$store.dispatch("selectCountry", border.alpha3Code);
    },
  },
  computed: {
    ...mapState(["selectedCountry", "borders"]),
    languages() {
      let listOfLanguages = [];
      if (this.selectedCountry.languages) {
        this.selectedCountry.languages.forEach((language) => {
          listOfLanguages.push(language.name);
        });
        return listOfLanguages.join(", ");
      }
      return "";
    },
    population() {
      return this.selectedCountry.population
        ? this.selectedCountry.population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : "";
    },
    currency() {
      return this.selectedCountry.currencies
        ? this.selectedCountry.currencies[0].name
        : "";
    },
    topLevelDomain() {
      return this.selectedCountry.topLevelDomain
        ? this.selectedCountry.topLevelDomain.join(", ")
        : "";
    },
  },
  created() {
    this.loadCountry();
  },
  watch: {
    "$route.params.countryName": function () {
      this.resetBorders();
      this.loadCountry();
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5%;
}
.back {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  gap: 0.75rem;
  cursor: pointer;
  background-color: var(--elements);
  font-size: 14px;
  padding: 0.5rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.2rem;
  &:hover {
    background-color: #4bb19ea8;
    border-radius: 5px;
  }
}
.content-wrapper {
  padding-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.flag-wrapper {
  max-width: 700px;
  max-height: 450px;
  margin: auto;
}
img {
  object-fit: fill;
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0 0 20px black;
  border-radius: 5px;
}

.country-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: var(--primary-color);
  }
}
.lists {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  gap: 2rem;
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  li {
    list-style: none;
    font-weight: 600;
    span {
      font-weight: 300;
    }
  }
}
.borders-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;

  p {
    font-weight: 600;
  }
}
.borders {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 14px;
  cursor: pointer;
  align-items: center;

  li {
    list-style: none;
    background-color: var(--elements);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
    padding: 0.25rem 2rem;
    &:hover {
      background-color: var(--hover);
      border-radius: 5px;
    }
  }
}
@media only screen and (max-width: 1000px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }
  .flag-wrapper {
    margin: auto;
    width: 100%;
    height: 100%;
    img {
      display: block;
      margin: auto;
    }
  }
  .borders {
    padding-bottom: 2rem;
  }
}
@media only screen and (max-width: 1000px) {
  .lists {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
