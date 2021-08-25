<template>
  <div class="search-area">
    <div class="search-wrapper">
      <label for="searchBox">
        <i class="fas fa-search"></i>
      </label>
      <input
        type="text"
        id="searchBox"
        aria-placeholder="Search for a country..."
        placeholder="Search for a country..."
      />
    </div>
    <div class="filter">
      <div class="filter-chevron" @click="filter = !filter">
        <p>Filter by Region</p>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="dropdown-filter" v-if="filter">
        <p>Africa</p>
        <p>America</p>
        <p>Asia</p>
        <p>Europe</p>
        <p>Oceania</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search_Area",
  data() {
    return {
      filter: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
.search-area {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.search-wrapper {
  background-color: $Dark_Blue;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding-left: 2rem;
}
input {
  color: #fff;
  background: transparent;
  outline: 0;
  border: 0;
  width: 400px;
  padding: 0.75rem 1.5rem;
  font-size: 14px;
}
.filter {
  font-size: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.filter-chevron {
  background-color: $Dark_Blue;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  gap: 1rem;
  cursor: pointer;
}
.dropdown-filter {
  display: none;
  position: relative;
  margin-top: 5px;
  background-color: $Dark_Blue;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  gap: 0.2rem;
  border-radius: 5px;
  p {
    padding: 0.3rem;
    cursor: pointer;
  }
}
</style>