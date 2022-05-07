<template>
  <div class="card">
    <img :src="image" :alt="name" />
    <div class="card-contents">
      <h3>{{ name }}</h3>
      <p>{{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "name", "date"],
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 35rem;
  width: 30rem;
  padding: 2rem;
  justify-content: space-around;
  transition: border 0.3s ease;
}

.card:hover {
  border: solid 1px rgba(255, 102, 102, 0.5);
}

.card-contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 11rem;
}

img {
  height: 13rem;
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
}

h3 {
  font-size: 2.8rem;
  text-align: center;
  color: #000;
  font-weight: 200;
}

p {
  font-size: 1.6rem;
  color: #555;
}
</style>
