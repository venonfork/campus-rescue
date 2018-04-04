<template lang="html">
  <ul id="upload_list">
    <li v-for="item in uploaded">
      <img :src="`static/uploads/${item}`" alt="@todo" class="img">
    </li>
  </ul>
</template>

<script>
import { EventBus } from "./../../event-bus.js";
import axios from "axios";

export default {
  created() {

    this.getUploads();
    EventBus.$on("uploaded-file", () => {
      this.getUploads()
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
          // Do whatever you want with the native progress event
          let percentLoaded = Math.floor((evt.loaded * 100) / evt.total);
          console.log(percentLoaded + "%");
        },
      }).then(res => {
        console.log("all good download");
        console.log(res);
        this.uploaded = res.data;

      }).catch(err => {
        console.error("all wrong download" + err);
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
