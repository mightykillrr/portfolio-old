<template>
  <div class="container">
    <h1>Hi! I'm Aniket</h1>
    <p>And I am a <em>Full-Stack</em> Web Developer.</p>
    <div class="button-container">
      <BaseButton
        isRouter="yes"
        type="primary"
        text="My Projects &rarr;"
        link="/work"
      />
      <BaseButton
        type="flat"
        text="Know more"
        link="#knowMore"
        @click.prevent="scrollDown"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollDown() {
      const ar = document.querySelector(".featuredHome");
      console.log(ar);
      ar.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
em {
  color: #f66;
}

.button-container {
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.container {
  height: 55rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 6rem;
  color: #333;
  font-weight: 800;
}

p {
  font-size: 2rem;
  font-weight: 400;
}

@media (max-width: 29em) {
  .button-container {
    width: 65%;
    gap: 0.7rem;
  }
}
</style>
