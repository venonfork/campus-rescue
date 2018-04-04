<template lang="html">
  <div id="parent">
    <h1>je suis le parent</h1>
    <child-comp 
      @mon-event-custom="displayValueFromTag($event)">
    </child-comp>
  </div>
</template>

<script>
import ChildComp from "./Child.vue";

export default {
  components: {
    ChildComp
  },
  methods: {
    displayValueFromTag(v) {
      console.log(v + " reçue depuis l'event sur la balise @getValueFromTag()");
    }
  }
}
</script>

<style lang="css" scoped>
#parent {
  background: dodgerblue;
  color: white;
  font-weight: bold;
  padding: 20px;
}
</style>
