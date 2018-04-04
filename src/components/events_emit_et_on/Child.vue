<template lang="html">
  <div id="child">
    <h1>... et je suis le child</h1>
    <p>
      {{ valDuParent }}
    </p>
    <button @click="emitValue('une val de child')">click me homie !</button>
  </div>
</template>

<script>
export default {
  methods: {
    emitValue(v) {
      this.$emit("mon-event-custom", v);
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
