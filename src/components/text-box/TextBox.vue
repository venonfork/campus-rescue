<template lang="html">
  <!-- ./components/pages/users -->
  <div id="text_box" :style="`color: ${_color}; background: ${_bg}`">
    {{ msg }}
  </div>
</template>

<script>
export default {
  created() {
    // si le message est en prop, on le prend, sinon on prend msg par défaut
    this.msg = this.message || this.msg;
    // pareil pour le background
    this._bg = this.bg || this._bg;
    // et pareil pour la couleur
    this._color = this.color || this._color;
  },
  data() {
    return {
      _bg: "white",
      _color: "black",
      msg: "message par défaut"
    }
  },
  props: ["message", "bg", "color"]
}
</script>
<style lang="scss" scoped>
#text_box {
  align-items: center;
  border: 2px solid black;
  border-radius: .4rem;
  display: flex;
  font-weight: bold;
  justify-content: center;
  margin: 0 auto 10px;
  max-width: 320px;
  min-height: 42px;
  font-size: 1.2rem;
}
</style>
