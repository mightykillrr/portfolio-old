<template>
  <div>
    <AccentBar :src="require('../../assets/imgs/accent-image.jpg')" />
    <div class="image">
      <img src="../../assets/imgs/avatar.jpeg" alt="" />
    </div>
    <div class="profile-area">
      <h1>Aniket Kotal</h1>
      <span>TypeScript, Node, Vue.js | Full-Stack Web Developer</span>
    </div>
    <div class="heading">
      <ion-icon name="information-circle-outline" />
      <h2>About Me</h2>
    </div>
    <p>
      Hi! I'm Aniket! <br />I am a full-stack web developer from India. I am
      specialising in techonolgies like TypeScript, Node.js, MongoDB, and
      Vue.js. I am currently doing a B. Tech. at Parul University @ Vadodara,
      Gujarat. <br /><br />When I'm not coding, I'm usually playing games with
      my friends, or hanging out with people on Discord.
    </p>
    <div class="heading">
      <ion-icon name="link"></ion-icon>
      <h2>Links</h2>
    </div>
    <div class="links">
      <SmallCard
        logo="logo-github"
        text="Github"
        link="https://github.com/mightykillrr"
      />
      <SmallCard
        logo="logo-linkedin"
        text="LinkedIn"
        link="https://www.linkedin.com/in/aniketkotal/"
      />
      <SmallCard
        logo="logo-instagram"
        text="Instagram"
        link="http://www.instagram.com/aniketkotal/"
      />
      <SmallCard
        logo="link"
        text="Discord"
        link="https://discord.gg/XSFakuvk"
      />
      <SmallCard
        logo="logo-steam"
        text="Steam"
        link="https://steamcommunity.com/id/mightykillrr/"
      />
    </div>
  </div>
</template>

<script>
import AccentBar from "../layouts/AccentBar.vue";
import SmallCard from "../ui/SmallCard.vue";

export default {
  components: { AccentBar, SmallCard },
};
</script>

<style scoped>
.links {
  display: grid;
  column-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-bottom: 2.5rem;
}

p {
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0.8rem;
  margin-bottom: 5rem;
}

.image img {
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  border: #fff solid 6px;
}

.image {
  display: flex;
  justify-content: center;
  transform: translateY(-8rem);
}

.profile-area {
  transform: translateY(-6rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.heading {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.6rem 0;
}

h2 {
  font-size: 2.2rem;
  font-weight: 400;
}

ion-icon {
  font-size: 3rem;
}

h1 {
  font-size: 3.8rem;
  font-weight: 400;
}
span {
  font-size: 2.2rem;
  font-weight: 300;
}

@media (max-width: 88.5em) {
  .links {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 2rem;
  }
}

@media (max-width: 83em) {
  .links {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 2rem;
  }
}

@media (max-width: 71em) {
  .links {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 2rem;
  }
}

@media (max-width: 49em) {
  .links {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 2rem;
  }
}

@media (max-width: 25em) {
  .image img {
    border: #fff solid 3px;
  }
}
</style>
