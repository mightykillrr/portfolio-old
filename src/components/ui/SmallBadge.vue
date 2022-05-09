<template>
  <span :class="type.toLowerCase()">{{ type }}</span>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      types: {
        HTML: "#dd4b25",
        CSS: "#2449d8",
        JS: "#ead41c",
        Vue: "#3eaf7c",
        Python: "#346794",
      },
    };
  },
};
</script>

<style scoped>
span {
  background-color: slategray;
  padding: 0.5rem 1rem;
  color: #eee;
  border-radius: 10px;
}

.nodejs {
  background-color: #6da55f;
}

.heroku {
  background-color: #3b0095;
}

.mongodb {
  background-color: #409042;
}

.html {
  background-color: #dd4b25;
}

.css {
  background-color: #2449d8;
}
.js {
  background-color: #ead41c;
  color: #222;
}
.python {
  background-color: #346794;
}
.vue {
  background-color: #3eaf7c;
}
</style>
