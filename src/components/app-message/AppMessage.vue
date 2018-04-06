<template lang="html">
  <div v-if="message" id="app_message" :class="messageStatus">
    {{ message }}
  </div>
</template>
<script>

export default {
  created() {
    this.$ebus.$on("message-from-app", msg => {
      // console.log("message reçu ! " + msg);
      this.setMessageStyle(msg);
      this.message = (typeof msg === "object" && msg !== null) ? msg.txt : msg;
    });
  },
  data() {
    return {
      message: null,// message à afficher via eventbus (si null: component retiré du DOM)
      messageStatus: undefined, // le status du message, envoyé via eventbus
      statuses: ["error", "success", "warning"] // liste des status (pour CSS)
    }
  },
  methods: {
    setMessageStyle(msg) {
      if (typeof msg !== "object") return; // si msg n'est pas object, RAS
      if (!msg || !msg.status) return; // si msg est falsy ou ne contient pas status RAS
      // easy ... on vérifie si le status est correct
      this.messageStatus = this.statuses.find(s => { // parcourir statuses...
        return s === msg.status;
        // si msg.status est trouvé, affecter this.messageStatus avec valeur case courante
        // sinon undefined est retourné
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.warning {
  color: #856404;
  background: #fff3cd;
}
.success {
  color: #155724;
  background: #c3e6cb;
}
.error {
  color: #721c24;
  background: #f8d7da;
}
#app_message {
  align-items: center;
  border: 2px solid;
  border-radius: .3rem;
  display: flex;
  justify-content: center;
  margin: 0 auto 50px;
  max-width: 320px;
  padding: 10px;
  position: relative;
  top: 70px;
}
</style>
