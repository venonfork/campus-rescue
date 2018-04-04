<template lang="html">
  <aside id="sidebar">
    <nav id="nav" :class="{'is-active': isActive}">
      <span id="icon" @click="toggleNav()">
        <i class="fa fa-times"></i>
      </span>
      <ul id="list">
        <li class="item">Blog</li>
        <li class="item">News</li>
        <li class="item">Mailing</li>
      </ul>
    </nav>
  </aside>
</template>
<script>
import { EventBus } from "./../../event-bus.js";
export default {
  created() { // à la création du component
    // à chaque event custom "toggle-nav-sidebar", exécuter la fonction toggleNav
    EventBus.$on("toggle-nav-sidebar", this.toggleNav);
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    }
  }
}
</script>
<style lang="scss" scoped>
#nav.is-active {
  transform: translateX(-20px);
}
#nav {
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transform: translateX(calc(-100vw - 20px));
  transition: transform .5s linear;
  width: calc(100vw + 20px);
  z-index: 10;
}
#list {
  margin: 0;
}
#icon {
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 10;
}
#icon:hover {
  color: darkorange;
  cursor: pointer;
}
.item {
  align-items: center;
  background: #1a1a1aa8;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-height: 33vh;
  width: 100%;
}
.item:hover {
  background: #1a1a1ac7;
  color: darkorange;
}
</style>
