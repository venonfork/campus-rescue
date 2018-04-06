<template lang="html">
  <div id="parent">
    <h1>
      <span>#jeSuisParent</span>
      <span v-if="messageFromChild">(Pardon ?!!)</span>
    </h1>
    <child-comp
      @mon-event-custom="displayValueFromTag($event)">
    </child-comp>
  </div>
</template>

<script>
import ChildComp from "./Child.vue";

export default {
  data() {
    return {
      messageFromChild: null
    }
  },
  components: {
    ChildComp
  },
  methods: {
    displayValueFromTag(v) {
      this.messageFromChild = "Pardon ?!"
      console.log(v + " <=> message reçu du component enfant");
      window.setInterval(() => {
        this.messageFromChild = null;
      }, 3000);
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
