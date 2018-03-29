<template lang="html">
  <!-- ./components/pages/users -->
  <main id="main" class="users" :class="{'is-editing': userActive}">
    <user-list
      :userUpdated="activeUser"
      @edit-active-user="userActive = $event">
    </user-list>
    <profile
      :user="activeUser"
      @update-active-user="userActive = $event">
    </profile>
  </main>
</template>

<script>
import Profile from "./../users/UserProfile.vue";
import UserList from "./../users/UsersList.vue";

export default {
  data() {
    return {
      userActive: null,
    }
  },
  components: { Profile, UserList },
  computed: {
    activeUser() {
      return this.userActive;
      // return this.userActive ? Object.assign({}, this.userActive) : null;
    },
  }
}
</script>

<style lang="scss" scoped>

#main {
  justify-items: center;
  display: grid;
  max-width: 960px;
  margin: auto;
  padding-top: 40px;
}

@media (min-width: 650px) {
  #main {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
  }
}

@media (max-width: 650px) {
  #main {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  #main.is-editing {
    grid-template-rows: 200px 1fr;
  }
  #main:not(.is-editing) {
    grid-template-rows: 1fr;
  }

}
</style>
