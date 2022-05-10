<template>
  <a :href="link">
    <div class="card">
      <ion-icon :name="logo"></ion-icon>
      <div class="texts">
        <span>{{ text }}</span>
        <p>{{ link }}</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["logo", "text", "link"],
};
</script>

<style scoped>
.card {
  display: flex;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 25rem;
  padding: 2rem;
  transition: all 0.2s ease;
  gap: 1rem;
  align-items: center;
}

a:link,
a:visited {
  text-decoration: none;
  color: #222;
}

.card:hover {
  border: solid 1px rgba(255, 102, 102, 0.5);
  color: #f33;
}

ion-icon {
  font-size: 3.2rem;
}

span {
  font-size: 2rem;
}

p {
  font-size: 1.4rem;
  font-weight: 300;
  overflow: hidden;
  white-space: nowrap;
  width: 15rem;
  text-overflow: ellipsis;
}

@media (max-width: 88.5em) {
  .card {
    width: 100%;
  }
}
</style>
