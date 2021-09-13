<template>
  <div class="container">
    <div class="search-wrapper">
      <div class="input-wrapper">
        <i class="fas fa-search"></i>
        <input
          type="text"
          aria-placeholder="Search for a country..."
          role="search"
          placeholder="Search for a country..."
          v-model="search"
          @input="onChange"
          @keydown.down="onArrowDown"
          @keydown.up="onArrowUp"
          @keydown.enter="onArrowEnter"
        />
      </div>
      <ul
        v-show="isOpen && search != '' && results.length != 0"
        class="search-panel"
      >
        <li
          v-for="(result, index) in results.slice(0, 10)"
          :key="index"
          @click="setResult(result)"
          :class="{ 'is-active': index === arrowCounter }"
        >
          <img :src="result.flag" alt="Flag" />
          {{ result.name }}
        </li>
      </ul>
    </div>
    <Filter :options="options" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Filter from "./filterBy.vue";
export default {
  name: "Search_Area",
  components: {
    Filter,
  },
  data() {
    return {
      options: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
      search: "",
      isOpen: false,
      searchValue: [],
      arrowCounter: -1,
      results: [],
    };
  },
  methods: {
    setResult(result) {
      this.search = result.name;
      this.isOpen = false;
      this.$router.push({
        path: `/country/${result.alpha3Code}`,
      });
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    onChange() {
      this.isOpen = true;
      this.filterResults();
    },
    filterResults() {
      this.results = this.allCountries.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowEnter() {
      this.isOpen = false;
      if (this.search != "") {
        this.$router.push({
          path: `/country/${this.results[this.arrowCounter].alpha3Code}`,
        });
      }
      this.arrowCounter = -1;
    },
  },
  computed: {
    ...mapState(["allCountries"]),
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  unmounted() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.search-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--elements);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding-left: 2rem;
  width: 50%;
}
.input-wrapper {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
input {
  color: #fff;
  background: transparent;
  outline: 0;
  border: 0;
  padding: 0.75rem 0.5rem;
  font-size: 14px;
  width: 90%;
  color: var(--text);
  &:focus {
    background: linear-gradient(var(--hover), var(--hover)) center bottom 5px /
      calc(100% - 10px) 2px no-repeat;
  }
}
.search-panel {
  position: absolute;
  top: 3rem;
  left: 0;
  padding: 1rem 0rem;
  background-color: var(--elements);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 5px;
  z-index: 10;
  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-left: 2.5rem;
    cursor: pointer;
    &:hover {
      background-color: var(--hover);
    }
  }
  .is-active {
    background-color: var(--hover);
  }
  img {
    object-fit: cover;
    width: 50px;
    height: 35px;
    border-radius: 2px;
  }
}

@media only screen and (max-width: 470px) {
  .container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .search-wrapper {
    width: 100%;
  }
  input {
    width: 90%;
  }
}
</style>
