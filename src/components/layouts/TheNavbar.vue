<template>
  <nav>
    <div>
      <img
        src="../../assets/imgs/avatar.jpeg"
        alt="An anime headshot picture"
      />
      <router-link to="/">Aniket Kotal</router-link>
    </div>
    <router-link to="/work">My Works</router-link>
    <router-link to="/about">About Me</router-link>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  display: flex;
  align-items: center;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

div {
  display: flex;
  align-items: center;
  gap: 1.3rem;
  font-weight: 700;
}

nav {
  padding: 2rem 0;
  gap: 3.5rem;
}

a:link,
a:visited {
  font-family: "Fira Sans";
  font-size: 1.8rem;
  text-decoration: none;
  color: #222;
}

@media (max-width: 62.5em) {
  a:link,
  a:visited {
    font-size: 2rem;
  }

  img {
    width: 40px;
    height: 40px;
  }
}
</style>
