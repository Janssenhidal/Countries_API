<template>
  <Header @colourThemeToggle="toggleTheme" />
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Header,
  },
  methods: {
    toggleTheme() {
      if (this.darkMode) {
        console.log(this.darkMode);
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        console.log(this.darkMode);
        document.documentElement.setAttribute("data-theme", "light-theme");
      }
    },
  },
  computed: {
    ...mapState(["darkMode"]),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
:root {
  --elements: hsl(209, 23%, 22%);
  --background: hsl(207, 26%, 17%);
  --text: hsl(0, 0%, 100%);
}
[data-theme="light-theme"] {
  --elements: hsl(0, 0%, 100%);
  --background: hsl(0, 0%, 98%);
  --text: hsl(200, 15%, 8%);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
}
body {
  background-color: var(--background);
  color: var(--text);
}
</style>
