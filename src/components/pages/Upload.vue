<template lang="html">
  <main id="main" class="contact">
    <uploader></uploader>
    <p>
      <b>TP I</b><br>
      Dès la création du component :<br>
      Lancer un appel ajax GET vers le serveur node.<br>
      Récupèrer les fichiers uploadés dans le dossier /static/uploads.<br>
      Pour cela, utiliser les leçons de nodeschool.<br>
      Présenter la liste sous forme de grid/flex.
    </p>
    <upload-list></upload-list>
  </main>
</template>
<script>
import Uploader from "./../uploader/Uploader.vue";
import UploadList from "./../uploader/UploadList.vue";

export default {
  beforeRouteLeave (to, from, next) {
    this.$ebus.$emit("message-from-app", null);
    next();
  },
  components: {
    Uploader,
    UploadList,
  }
}
</script>

<style lang="scss" scoped>
#input_file {
  display: none;
}
#icon {
  cursor: pointer;
}
#icon:hover {
  color: darkorange;
  transition: transform .1s linear;
  transform: scale(1.3);
}
#svg {
  pointer-events: none; // empêche l'élément de capturer les clicks
}
p {
  text-align: justify;
}
</style>
