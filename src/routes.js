/*jshint esversion : 6 */

// ./src/routes.js
import Home from "./components/pages/Home.vue";
import Users from "./components/pages/Users.vue";
import Contact from "./components/pages/Contact.vue";
import Geographie from "./components/pages/Geographie.vue";
import Shop from "./components/pages/Shop.vue";
import Upload from "./components/pages/Upload.vue";

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
    path: "/geographie",
    name: "geo",
    component: Geographie,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/upload",
    name: "upload",
    component: Upload,
    beforeUnload() {

    }
  },
  {
      path: "*",
      redirect: {
        name: "home"
      },
  }
];
