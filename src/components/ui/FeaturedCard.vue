<template>
  <div class="card">
    <img :src="image" :alt="name" />
    <span>{{ type }}</span>
    <div class="card-contents">
      <h3>{{ name }}</h3>
      <p>{{ date }}</p>
      <p>{{ desc }}</p>
    </div>
    <div class="badges" v-if="lang">
      <SmallBadge v-for="(a, i) in lang" :key="i" :type="a" />
    </div>
    <div v-if="type === 'Project'">
      <div class="btns">
        <BaseButton type="primary" text="Live Demo" :link="live" />
        <BaseButton type="flat" text="Github" :link="link" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "name", "date", "type", "desc", "lang", "live", "link"],
};
</script>

<style scoped>
.btns {
  display: flex;
  gap: 1rem;
}

.badges {
  display: flex;
  gap: 0.5rem;
}

.card {
  display: flex;
  flex-direction: column;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 100%;
  width: 30rem;
  padding: 2rem;
  transition: border 0.3s ease;
  gap: 3rem;
}

.card:hover {
  border: solid 1px rgba(255, 102, 102, 0.5);
}

.card-contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
}

img {
  height: 13rem;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}

span {
  font-size: 1.4rem;
  color: rgb(145, 145, 145);
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
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
  text-align: center;
  font-weight: 400;
}
</style>
