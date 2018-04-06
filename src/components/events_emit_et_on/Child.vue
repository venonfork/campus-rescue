<template lang="html">
  <div id="child">
    <h1>#jeSuisChild</h1>
    <p>
      {{ valDuParent }}
    </p>
    <button @click="emitValue(
      `What\'s up ${Math.random() > .5 ? 'Mommy' : 'Daddy'} ?!!`)" class="btn">
      <b>Click me Homie !</b>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    emitValue(valeurATransmettreAuParent) {
      this.$emit("mon-event-custom", valeurATransmettreAuParent);
    }
  },
  props: ["valDuParent"]
}
</script>

<style lang="css" scoped>
#child {
  background: #BADA55;
  color: white;
  font-weight: bold;
  padding: 20px;
}
</style>
