<template>
  <header>
    <h3>Where in the World?</h3>
    <span>
      <i class="fas fa-moon"></i>
      <p>Dark Mode</p></span
    >
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
@import "../scss/_variables.scss";
header {
  display: flex;
  justify-content: space-between;
  background-color: $Dark_Blue;
  color: #fff;
  padding: 1.5rem 3rem;
}
span {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
