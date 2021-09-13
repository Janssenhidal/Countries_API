<template>
  <header>
    <div class="header-container">
      <router-link to="/"><h3>Where in the World?</h3></router-link>
      <div class="dark-mode" @click="colourTheme()">
        <i class="fas fa-moon"></i>
        <p>Dark Mode</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    colourTheme() {
      this.$store.commit("colourThemeToggle");
      this.$emit("colourThemeToggle");
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  background-color: var(--elements);
}
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  padding: 1.5rem 0rem;
}
.dark-mode {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  &:hover {
    background-color: var(--hover);
    border-radius: 5px;
  }
}
a {
  text-decoration: none;
  color: var(--text);
}
</style>
