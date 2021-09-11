<template>
  <header>
    <div class="header-container">
      <router-link to="/"><h3>Where in the World?</h3></router-link>
      <span>
        <i class="fas fa-moon"></i>
        <p>Dark Mode</p></span
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
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
  color: #fff;
  width: 90%;
  margin: auto;
  padding: 1.5rem 0rem;
}
span {
  display: flex;
  align-items: center;
  gap: 1rem;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>
