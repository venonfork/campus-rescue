<template lang="html">
  <!-- ./components/nav-main/NavMain.vue -->
  <nav id="nav_main">
    <ul id="list">
      <router-link v-for="(page, n) in pages"
      :to="{name: page}" :key="n" tag="li"
      class="item" active-class="is-active" exact>
        <span>{{ page }}</span>
      </router-link>
      <li id="burger" class="item" @click="toggleNavSidebar()">
        <i class="fa fa-bars"></i>
      </li>
    </ul>
  </nav>
</template>
<script>
import { EventBus } from "./../../event-bus.js";

export default {
  data() {
    return {
      pages: [
        "home",
        "users",
        "contact",
        "geo",
        "shop",
        "upload",
      ]
    }
  },
  methods: {
    toggleNavSidebar() {
      EventBus.$emit("toggle-nav-sidebar");
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

#burger {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
}

@media (max-width: 510px) {
  #list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 32px;
  }
  #list .item {
    margin-right: 0;
  }
}

</style>
