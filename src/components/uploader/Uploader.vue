<template lang="html">
  <!-- ./src/components/uploader/Uploader.vue -->
  <div id="uploader">
    <input type="file" id="input_file" accept="image/*">
    <div id="icon" @click="prepareFile()">
      <i id="svg" class="fa fa-upload"></i>
    </div>
  </div>
</template>

<script>
import { EventBus } from "./../../event-bus.js";
import axios from "axios";

export default {
  mounted() {
    this.input = this.$el.querySelector("#input_file");
  },
  data() {
    return {
      input: null
    }
  },
  methods: {
    checkFileType(type) {
      // vérifie que le fichier est une image
      const isAuthorized = [
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
      ].find(mime => { // chaque case du tableau est parcourue
        return mime === type;
        // si le type du fichier est trouvé, retourne la case
        // sinon si aucune valeur ne correpond, retourne undefined
      });
      return Boolean(isAuthorized); // conversion en boolean
    },
    checkFileSize(size) {
      // vérifie que le fichier ne pèse pas plus de 2mo
      return (size / 1024) / 1024 <= 2;
    },
    prepareFile() {
      this.input.click();

      this.input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        let warning = "";
        warning += !this.checkFileType(file.type) ? "type non supporté \n" : "";
        warning += !this.checkFileSize(file.size) ? "fichier trop lourd \n" : "";
        if (!warning) {
          this.uploadToServer(file);
        } else {
          console.warn(warning);
        }
      }
    },
    uploadToServer(file) {
      const fd = new FormData(); // multer a BESOIN d'un FormData() !!!
      fd.append('image_upload', file); // le name "image_upload" sera utilisé par multer

      axios({ // axios retourne une promesse (check Promise @mdn)
        method: "post",
        url: "http://localhost:3001/file/upload",
        data: fd, // on envoit le formData{} vers node sous la clé axios.data

        onUploadProgress: function (evt) {
          let percentLoaded = Math.floor((evt.loaded * 100) / evt.total);
          console.log(percentLoaded + "%");
        },
      }).then(res => { // la promesse a été tenue (pas d'erreur)
        console.log("all good upload");
        EventBus.$emit("uploaded-file");

      }).catch(err => { // la promesse a été rompue (erreur 40x||50x ...)
        console.warn("meh... wrong upload");
        console.error(err);
      });
    },
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
</style>
