<template>
  <router-link v-if="isRouter === 'yes'" :to="link" :class="type">{{
    text
  }}</router-link>
  <a
    v-else
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    :class="type"
    >{{ text }}</a
  >
</template>

<script>
export default {
  props: ["type", "text", "link", "isRouter"],
};
</script>

<style scoped>
a {
  background: none;
  padding: 1.5rem 3rem;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  text-decoration: none;
}

a:hover {
  box-shadow: 0 0 0 2px rgba(255, 102, 102, 0.4) inset;
  filter: brightness(120%);
}

a:active {
  filter: brightness(95%);
}

.primary {
  background-color: #f66;
  color: #fff;
}

.flat {
  color: #333;
}

@media (max-width: 49em) {
  a {
    width: 100%;
    text-align: center;
    padding: 2rem 3rem;
  }
}
</style>
