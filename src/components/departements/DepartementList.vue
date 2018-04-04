<template lang="html">
  <div id="departements_list">

      <button v-if="!departements" @click="getDepartements()" class="btn">
        <span>get depts</span>
      </button>

      <input v-if="departements" type="text" @input="filterDepts($event)"
        id="search" class="input" placeholder="filter">

      <ul id="departements" class="list">
        <li v-for="d in filtered || departements" class="item">
          {{ d.departement_code }} : {{ d.departement_nom }}
        </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      departements: null,
      filtered: null,
    }
  },
  methods: {
    filterDepts(e) {
      const needle = e.target.value.toLocaleLowerCase();

      this.filtered = this.departements.filter(d => {
        const nom = d.departement_nom.toLocaleLowerCase();
        return nom.match(needle) || d.departement_code.match(needle);
      });
    },
    getDepartements() {
      axios({
        method: "get",
        url: "http://localhost:3001/departement"
      })
      .then(res => {
        this.departements = res.data;
        this.$emit("fetched-departement");
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="css" scoped>
.item:nth-child(even) {
  background: orange;
  color: white;
}
#search {
  display: block;
  margin: 20px auto;
  width: 220px;
}
</style>
