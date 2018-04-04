<template>
  <!-- ./App.vue -->
  <div id="app">
    <header id="header">
      <img id="logo" src="./../static/img/logo.png">
      <nav-main></nav-main>
    </header>
    <main id="main">
      <nav-sidebar></nav-sidebar>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import NavMain from "./components/nav-main/NavMain.vue";
import NavSidebar from "./components/nav-sidebar/NavSidebar.vue";

export default {
  name: 'app',
  components: {
    NavMain,
    NavSidebar,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}
#main {
    position: relative;
}

#logo {
  max-width: 45px;
}

#main {
  padding-top: 20px;
}

#header {
  border-bottom: 2px solid #1A1A1A;
}

input, .btn {
  border: 1px solid #1A1A1A;
  border-radius: .3rem;
}

input {
  padding: 10px;
  margin-bottom: 7px;
}

.btn {
  cursor: pointer;
  outline: none;
  min-height: 32px;
  max-width: 220px;
  min-width: 80px;
  margin: 0 auto;
}

.btn:hover,
.btn.is-active {
  background: #314960;
  color: white;
  font-weight: bolder;
}

body {
  margin: 0;
}
h1, h2 {
  font-weight: normal;
  margin: 10px auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
