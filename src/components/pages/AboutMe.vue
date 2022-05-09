<template>
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
</template>

<script>
import AccentBar from "../layouts/AccentBar.vue";
export default {
  components: { AccentBar },
};
</script>

<style scoped>
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
}

h2 {
  font-size: 3.2rem;
  font-weight: 400;
}

ion-icon {
  font-size: 4rem;
}

h1 {
  font-size: 3.8rem;
  font-weight: 400;
}
span {
  font-size: 2.2rem;
  font-weight: 300;
}
</style>
