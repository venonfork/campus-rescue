<template lang="html">
    <!-- ./components/pages/Home.vue -->
  <main id="main" class="home">
    <p><b>hello</b></p>
    <text-box message="world of"></text-box>
    <text-box message="foo" bg="#00bc7e" color="#FFF"></text-box>
    <text-box message="bar" bg="#0D355A" color="#FFF"></text-box>
    <text-box message="baz" bg="#FA5732" color="#FFF"></text-box>
  </main>
</template>

<script>
import TextBox from "./../text-box/TextBox.vue";

export default {
  components: { TextBox }
}
</script>

<style lang="scss" scoped>
</style>
