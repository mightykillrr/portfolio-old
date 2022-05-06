<template>
  <TheNavbar />
  <router-view />
</template>

<script>
import TheNavbar from "./components/layouts/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;300;400;500;600;700;800;900&display=swap");

*,
*::before,
*::after {
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  max-width: 1440px;
  margin: 0 auto;
  font-family: "Noto Sans", sans-serif;
}
</style>
