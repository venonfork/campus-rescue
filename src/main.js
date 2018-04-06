/*jshint esversion : 6 */

// ./src/main.js

import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import { routes } from "./routes";
import { EventBus } from "./event-bus";

import fontawesome from "@fortawesome/fontawesome";
import regular from "@fortawesome/fontawesome-free-regular";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(regular, brands, solid);

Vue.use(VueRouter);

Vue.prototype.$ebus = EventBus;
// event bus est désormais lié à chaque instance de Vue =>
// exemple : this.$ebus.$emit("event-name", [payload]);
// exemple : this.$ebus.$on("event-name", clbk(val));

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
