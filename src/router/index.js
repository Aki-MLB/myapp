import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "@/components/Main.vue";
import LoginComponent from "@/components/Login.vue";
import RegisterComponent from "@/components/Register.vue";
import ApplicationComponent from "@/components/Application.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeComponent,
    meta: {
      title: "home"
    }
  },
  {
    path: "/login",
    name: "login",
    component: LoginComponent,
    meta: {
      title: "login"
    }
  },
  {
    path: "/register",
    name: "register",
    component: RegisterComponent,
    meta: {
      title: "register"
    }
  },
  {
    path: "/application",
    name: "application",
    component: ApplicationComponent,
    meta: {
      title: "application"
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
