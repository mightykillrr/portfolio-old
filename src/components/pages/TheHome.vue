<template>
  <AccentBar :image="require('../../assets/imgs/accent-image.jpg')" />
  <TheHero />
</template>

<script>
import AccentBar from "../layouts/AccentBar.vue";
import TheHero from "../layouts/TheHero.vue";

export default {
  components: { AccentBar, TheHero },
};
</script>
