<template>
  <img :src="image" :alt="altText" />
</template>

<script>
export default {
  props: ["image", "altText"],
};
</script>

<style scoped>
img {
  width: 100%;
  height: 15rem;
  background-size: contain;
  border-radius: 10px;
  object-fit: cover;
  margin: 1rem 0;
}
</style>
