<template lang="html">
    <!-- ./components/pages/Contact.vue -->
  <main id="main" class="contact">
    <h1>JE SUIS CONTACT</h1>
    <doomsday></doomsday>
    <simple-event></simple-event>
  </main>
</template>

<script>
import Doomsday from "./../doomsday/Doomsday.vue";
import SimpleEvent from "./../events_emit_et_on/Parent.vue";

export default {
  components: {
    Doomsday,
    SimpleEvent
  }
}
</script>

<style lang="scss" scoped>
</style>
