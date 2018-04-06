<template lang="html">
  <ul id="upload_list">
    <li v-for="item in uploaded">
      <img :src="`static/uploads/${item}`" alt="@todo" class="img">
    </li>
  </ul>
</template>
<script>

import axios from "axios";
export default {
  created() {
    this.getUploads();
    this.$ebus.$on("uploaded-file", () => {
      // à chaque fois qu'event-bus reçoit l'event "uploaded-file", cette fonction est exec
      this.getUploads();
    });
  },
  data() {
    return {
      uploaded: [],
    }
  },
  methods: {
    getUploads() {
      return axios({
        method: "get",
        url: "http://localhost:3001/file/uploads",
        onDownloadProgress: function (evt) {
          let percentDownloaded = Math.floor((evt.loaded * 100) / evt.total);
          console.log(percentDownloaded + "%");
        },
      }).then(res => {
        console.log("all good download");
        console.log(res); // res data contient les fichiers
        this.uploaded = res.data;

      }).catch(err => {
        console.error("wrong download" + err);
      });
    },
  }
}
</script>

<style lang="scss" scoped>
#upload_list{
  display: grid;
  grid-template-columns: 1fr;
}
#upload_list .img {
  display: block;
  width: 100%;
}
</style>
