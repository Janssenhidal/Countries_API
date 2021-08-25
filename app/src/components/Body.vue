<template>
  <main>
    <div class="homepage">
      <SearchArea />
    </div>
  </main>
</template>

<script>
import SearchArea from "./Search_Area.vue";
export default {
  name: "Body",
  components: {
    SearchArea,
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
