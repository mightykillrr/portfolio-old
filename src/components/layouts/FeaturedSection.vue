<template>
  <header>
    <ion-icon name="star-outline" />
    <h1>Featured</h1>
  </header>
  <p>Here are some things that I've done recently!</p>
  <div>
    <FeaturedCard
      v-for="(data, index) in featuredData"
      :key="index"
      :image="data.image"
      :name="data.name"
      :date="data.date"
      :type="data.type"
      :desc="data.desc"
      :lang="data.lang"
      :live="data.live"
      :link="data.link"
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
          image: require("../../assets/featured/vue_logo.png"),
          name: "Started Learning Vue.js!",
          date: "Apr. 2022",
          type: "Learning",
          desc: "I found my new love for front-end development with Vue.",
        },
        {
          image: require("../../assets/featured/advice-gen.png"),
          name: "Advice Generator",
          date: "Mar. 2022",
          type: "Project",
          desc: "A very simple Advice Generator, which gives advice with a click!",
          lang: ["HTML", "CSS", "JS", "APIs"],
          live: "https://advice-generator-ap.vercel.app/",
          link: "https://github.com/mightykillrr/advice-generator-app-main",
        },
        {
          image: require("../../assets/featured/calc.jpg"),
          name: "Advanced Calculator",
          date: "June 2021",
          type: "Project",
          desc: "An advanced calculator and my first ever HUGE Python project.",
          lang: ["Python", "Math"],
          live: "https://replit.com/@mightykillrr1/advancedcalc#calc.py",
          link: "https://github.com/mightykillrr/advanced_calc",
        },
        {
          image: require("../../assets/featured/case_changer.jpg"),
          name: "Text Case Changer",
          date: "May 2021",
          type: "Project",
          desc: "A simple text case modifier to change case of text as need.",
          lang: ["Python", "Pandas"],
          live: "https://replit.com/@mightykillrr1/casechanger#case_changer.py",
          link: "https://github.com/mightykillrr/case_changer",
        },
      ],
    };
  },
  components: { FeaturedCard },
};
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 3rem 0;
}

ion-icon {
  font-size: 3.2rem;
  margin-right: 1rem;
}

header {
  display: flex;
  align-items: center;
  color: #333;
}
</style>
