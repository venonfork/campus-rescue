/*jshint esversion : 6 */

// ./src/routes.js

import Home from "./components/pages/Home.vue";
import Users from "./components/pages/Users.vue";
import Contact from "./components/pages/Contact.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
      path: "*",
      redirect: {
        name: "home"
      },
  }
];
