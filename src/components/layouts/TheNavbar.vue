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
    <router-link to="/links">My Links</router-link>
    <router-link to="/about">About Me</router-link>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
