<template lang="html">
  <!-- ./components/pages/Geographie.vue -->
  <main id="main" class="geographie">
    <h1 class="title"> {{ title }}</h1>
    <p v-if="!hasDepartement">
      Effectuer une requête AJAX GET pour récupérer <br>
      la liste des départements français.<br>
      On va utiliser la librairie axios: <br>
      <code><b>npm i --save axios</b></code>
    </p>
    <departement-list @fetched-departement="hasDepartement = true">
    </departement-list>

  </main>
</template>
<script>
import axios from "axios";
import DepartementList from "./../departements/DepartementList.vue";

export default {
  data() {
    return {
      title: "GEOGRAPHIE",
      hasDepartement: false
    }
  },
  components: {
    DepartementList
  }
}
</script>

<style lang="scss" scoped>

</style>
