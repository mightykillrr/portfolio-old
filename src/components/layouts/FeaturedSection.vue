<template>
  <header>
    <ion-icon name="star-outline" />
    <h1>Featured</h1>
  </header>
  <p>Here are some things that I'm recently worked on!</p>
  <div class="holder">
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
    <div class="btnn">
      <ShowMoreBtn />
    </div>
  </div>
</template>

<script>
import FeaturedCard from "../ui/FeaturedCard.vue";
import ShowMoreBtn from "../ui/ShowMoreBtn.vue";

export default {
  data() {
    return {
      featuredData: [
        // {
        //   image: require("../../assets/featured/vue_logo.png"),
        //   name: "Finished Learning Vue.js!",
        //   date: "Apr. 2022",
        //   type: "Learning",
        //   desc: "I found my new love for front-end development with Vue. I learnt it in a week!",
        // },
        {
          image: require("../../assets/featured/stust.png"),
          name: "Stust",
          date: "May 2022",
          type: "Project",
          desc: "A fictional banking card designers.",
          lang: ["Vue", "TailwindCSS", "HTML", "CSS", "JS"],
        },
        {
          image: require("../../assets/featured/advice-gen.png"),
          name: "Advice Generator",
          date: "Mar. 2022",
          type: "Project",
          desc: "A very simple Advice Generator, which gives advice with a click!",
          lang: ["HTML", "CSS", "JS", "APIs"],
        },
        {
          image: require("../../assets/featured/mikey.jpg"),
          name: "Mikey Wazooski",
          date: "Dec. 2021",
          type: "Project",
          desc: "A feature-rich Discord bot I made to help me with my server and give action commands with great GIFs.",
          lang: ["JS", "NodeJS", "MongoDB", "Heroku", "APIs"],
        },
        // {
        //   image: require("../../assets/featured/case_changer.jpg"),
        //   name: "Text Case Changer",
        //   date: "May 2021",
        //   type: "Project",
        //   desc: "A simple text case modifier to change case of text as need.",
        //   lang: ["Python", "Pandas"],
        //   live: "https://replit.com/@mightykillrr1/casechanger#case_changer.py",
        //   link: "https://github.com/mightykillrr/case_changer",
        // },
        // {
        //   image: require("../../assets/featured/tic_tac_toe.jpg"),
        //   name: "Tic Tac Toe",
        //   date: "Dec. 2020",
        //   type: "Project",
        //   desc: "A game I made as a school project which I am very proud of.",
        //   lang: ["Python", "Pandas"],
        //   live: "https://replit.com/@mightykillrr1/tic-tac-toe#tic-tac-toe.py",
        //   link: "https://github.com/mightykillrr/tic-tac-toe",
        // },
      ],
    };
  },
  components: { FeaturedCard, ShowMoreBtn },
};
</script>

<style scoped>
.holder {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 3rem 0;
}

.btnn {
  display: flex;
  justify-content: center;
}

p {
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 300;
}

h1 {
  font-size: 2.4rem;
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

@media (max-width: 83em) {
  .holder {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .btnn {
    display: none;
  }
}

@media (max-width: 62.5em) {
  .holder {
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }

  .holder:nth-child(2) {
    visibility: hidden;
  }
}

@media (max-width: 49rem) {
  .holder {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
