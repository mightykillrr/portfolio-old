<template>
  <router-link to="/work">
    <span class="symbol">&rarr;</span><br />
    <span class="text">View More</span>
  </router-link>
</template>

<style scoped>
a:link,
a:visited {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f66;
}

.symbol {
  font-size: 3rem;
}

.text {
  font-size: 1.8rem;
  font-weight: 600;
}
</style>
