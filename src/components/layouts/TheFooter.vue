<template>
  <div class="container">
    <p>Thank you for visiting!</p>
    <div class="icons">
      <a href="https://github.com/mightykillrr">
        <ion-icon name="logo-github" />
      </a>
      <a href="https://www.instagram.com/aniketkotal/">
        <ion-icon name="logo-instagram" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: rgba(255, 102, 102, 0.2);
  border-radius: 10px;
  margin-bottom: 2rem;
  align-items: center;
}

p {
  font-size: 1.8rem;
  font-weight: 400;
  color: #222;
}

.icons {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

a:link,
a:visited {
  font-size: 3.2rem;
  text-decoration: none;
  color: #333;
}
</style>
