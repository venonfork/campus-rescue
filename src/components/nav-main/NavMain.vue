<template lang="html">
  <!-- ./components/nav-main/navMain -->
  <nav id="nav_main">
    <ul id="list">
      <router-link v-for="(page, n) in pages"
      :to="{name: page}" :key="n" tag="li"
      class="item" active-class="is-active" exact>
        <span>{{ page }}</span>
      </router-link>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      pages: [
        "home",
        "users",
        "contact",
      ]
    }
  }
}
</script>

<style lang="css" scoped>
#nav_main {
  margin: 0 auto;
}
#list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
}
#list .item {
  font-size: 1rem;
  margin-right: 15px;
  cursor: pointer;
}
#list .item:hover,
#list .is-active {
  color: #42b983;
}
</style>
