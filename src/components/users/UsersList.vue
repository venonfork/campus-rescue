<template lang="html">
  <!-- ./components/users/list -->
  <div id="user_list">
    <ul id="list">
      <li v-for="u in users" class="item">
        <div class="infos">
          <p v-for="(prop, key) in u"
          class="info">
            <span :style="{'font-weight': key === 'id' ? 'bold' : 'normal'}">
              {{ key }} : {{ prop }}
            </span>
          </p>
        </div>
        <button @click="emitActiveUser(u)"
          class="btn" :class="{'is-active': activeUser === u}">edit</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  watch: {
    userUpdated(updatedUser) {

      const foundUser = this.users.find(user => {
        return user.id === updatedUser.id;
      });

      return Object.assign(foundUser, updatedUser);
    }
  },
  data() {
    return {
      activeUser: null,
      users: [
        {id: 1, mail: "test@test.com", name: "foo"},
        {id: 2, mail: "fake@fake.io", name: "bar"},
        {id: 3, mail: "idea@no-idea.fr", name: "baz"},
      ]
    }
  },
  methods: {
    emitActiveUser(user) {
      this.activeUser = user;
      this.$emit("edit-active-user", user);
    },
  },
  props: ["userUpdated"]
}
</script>

<style lang="scss" scoped>
#user_list {
  width: 100%;
}

@media (max-width: 650px) {
  #user_list {
    order: 2;
  }
}

@media (min-width: 650px) {
  #user_list {
    order: 1;
  }
}

#list {
  margin: auto;
  max-width: 420px;
  min-width: 320px;
  padding: 0 20px;
}

#list .item {
  border: 1px solid #1A1A1A;
  border-radius: .4rem;
  display: grid;
  grid-template-columns: 60% 1fr;
  margin-bottom: 10px;
  padding: 10px;
}
#list .item:last-of-type {
  margin-bottom: 0;
}
.info {
  text-align: left;
  margin: 3px 0;
}
.btn {
  align-self: center;
  max-height: 32px;
}
</style>
