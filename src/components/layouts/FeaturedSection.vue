<template>
  <header>
    <ion-icon name="star-outline" />
    <h1>Features</h1>
  </header>
  <div>
    <FeaturedCard
      v-for="data in featuredData"
      :key="data.id"
      :image="data.image"
      :name="data.name"
      :date="data.date"
    />
  </div>
</template>

<script>
import FeaturedCard from "../ui/FeaturedCard.vue";

export default {
  data() {
    return {
      featuredData: [
        {
          id: "1",
          image: require("../../assets/vue.png"),
          name: "Started Learning Vue.js!",
          date: "Apr. 2022",
        },
      ],
    };
  },
  components: { FeaturedCard },
};
</script>

<style scoped>
div {
  margin-bottom: 30rem;
}

ion-icon {
  font-size: 3.2rem;
}

header {
  display: flex;
  align-items: center;
  color: #333;
}
</style>
