<template>
  <TheNavbar />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <TheFooter />
</template>

<script>
import TheFooter from "./components/layouts/TheFooter.vue";
import TheNavbar from "./components/layouts/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800&display=swap");

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
  max-width: 1400px;
  margin: 0 auto;
  font-family: "Fira Sans", sans-serif;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

@media (max-width: 88.5em) {
  body {
    max-width: 1300px;
  }
}

@media (max-width: 83em) {
  body {
    max-width: 1200px;
  }
}

@media (max-width: 78em) {
  html {
    font-size: 55%;
  }

  body {
    max-width: 1100px;
  }
}

@media (max-width: 71em) {
  body {
    max-width: 1000px;
  }
}

@media (max-width: 62.5em) {
  body {
    max-width: 800px;
  }
  html {
    font-size: 50%;
  }
}
@media (max-width: 49em) {
  html {
    font-size: 40%;
  }
  body {
    max-width: 600px;
  }
}

@media (max-width: 34em) {
  body {
    max-width: 500px;
  }
}

@media (max-width: 25em) {
  body {
    max-width: 350px;
  }
} ;
</style>
