<template lang="html">
  <!-- ./components/users/profile -->
  <div v-if="user" id="profile">
    <h2 class="title">Edit User n°{{ user.id }}</h2>
    <input type="text" v-model="user.mail">
    <input type="text" v-model="user.name">
    <button @click="editUser()" class="btn">edit</button>
  </div>
  <div v-else id="no_user_yet">
    Selectionner un user à éditer
  </div>
</template>
<script>
export default {
  methods: {
    editUser() {
      this.$emit("update-active-user", this.user);
    }
  },
  props: ["user"]
}
</script>

<style lang="scss" scoped>
#no_user_yet {
  height: 60px;
}
#profile {
  display: flex;
  flex-direction: column;
  max-width: 420px;
  min-width: 220px;
  width: 100%;
}

@media (max-width: 650px) {
  #profile {
    order: 1;
  }
}

@media (min-width: 650px) {
  #profile,
  #no_user_yet { 
    order: 2;
  }
}
</style>
