<template>
  <button :class="type">{{ text }}</button>
</template>

<script>
export default {
  props: ["type", "text"],
};
</script>

<style scoped>
button {
  background: none;
  padding: 1.5rem 3rem;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

button:hover {
  box-shadow: 0 0 0 2px rgba(255, 102, 102, 0.4) inset;
  filter: brightness(120%);
}

button:active {
  filter: brightness(95%);
}

.primary {
  background-color: #f66;
  color: #fff;
}

.flat {
  color: #222;
}
</style>
