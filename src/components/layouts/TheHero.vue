<template>
  <div class="container">
    <h1>Hi! I'm Aniket</h1>
    <p>And I am a <em>Full-Stack</em> Web Developer.</p>
    <div class="button-container">
      <BaseButton type="primary" text="My Projects &rarr;" />
      <BaseButton type="flat" text="Know more" />
    </div>
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";

export default {
  components: { BaseButton },
};
</script>

<style scoped>
em {
  color: #f66;
}

.button-container {
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
}

.container {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
</style>
