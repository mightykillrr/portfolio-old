<template>
  <div>
    <header>
      <ion-icon name="code-working" />
      <h1>My Works</h1>
    </header>
    <p>
      Here are the projects I've worked on. Feel free to explore each of them.
    </p>
    <div class="ff">
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
  </div>
</template>

<script>
import FeaturedCard from "../ui/FeaturedCard.vue";

export default {
  data() {
    return {
      featuredData: [
        {
          image: require("../../assets/featured/stust.png"),
          name: "Stust",
          date: "May 2022",
          type: "Project",
          desc: "A fictional banking card designers.",
          lang: ["Vue", "TailwindCSS", "HTML", "CSS", "JS"],
          live: "https://stust.vercel.app",
          link: "https://github.com/mightykillrr/stust_card_website",
        },
        {
          image: require("../../assets/featured/portfolioprev.png"),
          name: "My Portfolio",
          date: "Apr. 2022",
          type: "Project",
          desc: "My first portfolio, the page you're looking at!",
          lang: ["Vue", "HTML", "CSS", "JS"],
          live: "https://aniketkotal.vercel.app",
          link: "https://github.com/mightykillrr/portfolio2",
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
          image: require("../../assets/featured/mikey.jpg"),
          name: "Mikey Wazooski",
          date: "Dec. 2021",
          type: "Project",
          desc: "A feature-rich Discord bot I made to help me with my server and give action commands with great GIFs.",
          lang: ["JS", "NodeJS", "MongoDB", "Heroku", "APIs"],
          live: "https://discord.com/api/oauth2/authorize?client_id=819239364395532370&permissions=3912576065&scope=bot%20applications.commands",
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
        {
          image: require("../../assets/featured/tic_tac_toe.jpg"),
          name: "Tic Tac Toe",
          date: "Dec. 2020",
          type: "Project",
          desc: "A game I made as a school project which I am very proud of.",
          lang: ["Python", "Pandas"],
          live: "https://replit.com/@mightykillrr1/tic-tac-toe#tic-tac-toe.py",
          link: "https://github.com/mightykillrr/tic-tac-toe",
        },
      ],
    };
  },
  components: { FeaturedCard },
};
</script>

<style scoped>
.ff {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 2rem;
  padding: 3rem 0;
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
  margin-top: 3rem;
}

@media (max-width: 83em) {
  .ff {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 62.5em) {
  .ff {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 34em) {
  .ff {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
}
</style>
