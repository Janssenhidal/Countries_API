<template>
  <div class="filter-container">
    <div class="filter-chevron" @click="filter = !filter">
      <p>Filter by Region</p>
      <i class="fas fa-chevron-down"></i>
    </div>
    <div class="dropdown-filter" v-show="filter">
      <p
        v-for="(option, index) in options"
        :key="index"
        @click="makeSelection(option)"
      >
        {{ option }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "filterBy",
  props: {
    options: Array,
  },
  data() {
    return {
      filter: false,
    };
  },
  methods: {
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.filter = false;
      }
    },
    makeSelection(option) {
      this.$store.commit("regionSelect", option);
      this.$store.commit("filterActivate");
    },
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
.filter-container {
  position: relative;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.filter-chevron {
  background-color: var(--elements);
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  gap: 1rem;
  cursor: pointer;
}
.dropdown-filter {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  background-color: var(--elements);
  padding: 1rem 1.5rem;
  gap: 0.2rem;
  border-radius: 5px;
  width: 100%;
  z-index: 10;
  p {
    padding: 0.3rem;
    cursor: pointer;
    &:hover {
      background-color: var(--hover);
      border-radius: 5px;
    }
  }
}
</style>