<template>
  <div id="app">
    <h1>96Percent</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/members">Members</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
@font-face {
    font-family: 'Cafe24Ohsquareair';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202@1.0/Cafe24Ohsquareair.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

#app {
  font-family: 'Cafe24Ohsquareair';
  margin-top: 40px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
