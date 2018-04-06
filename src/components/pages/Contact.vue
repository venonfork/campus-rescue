<template lang="html">
    <!-- ./components/pages/Contact.vue -->
  <main id="main" class="contact">
    <h1>JE SUIS CONTACT</h1>
    <div>
      <h2>Component actif ?</h2>
      <label for="doomsday">doomsday</label>
      <input id="doomsday" type="radio" v-model="activeComponent" value="Doomsday">
      <label for="parent_child">parent/child events</label>
      <input id="parent_child" type="radio" v-model="activeComponent" value="SimpleEvent">
    </div>
    <!-- <doomsday></doomsday>
    <simple-event></simple-event> -->
    <component :is="activeComponent"></component>
  </main>
</template>

<script>
import Doomsday from "./../doomsday/Doomsday.vue";
import SimpleEvent from "./../events_emit_et_on/Parent.vue";

export default {
  data() {
    return {
      activeComponent: null
    }
  },
  components: {
    Doomsday,
    SimpleEvent
  }
}
</script>

<style lang="scss" scoped>
</style>
