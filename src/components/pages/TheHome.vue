<template>
  <div>
    <TheHero />
    <a id="knowMore" class="featuredHome" />
    <FeaturedSection />
  </div>
</template>

<script>
// import AccentBar from "../layouts/AccentBar.vue";
import FeaturedSection from "../layouts/FeaturedSection.vue";
import TheHero from "../layouts/TheHero.vue";

export default {
  components: {
    // AccentBar,
    FeaturedSection,
    TheHero,
  },
};
</script>
