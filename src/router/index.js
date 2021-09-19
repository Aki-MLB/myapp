import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "@/components/Main.vue";
import LoginComponent from "@/components/Login.vue";
import RegisterComponent from "@/components/Register.vue";
import ApplicationComponent from "@/components/Application.vue";
import DashBoardComponent from "@/components/DashBoard.vue";
import store from '@/store';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeComponent,
    beforeEnter(to, from, next) {//追記
      if (store.getters.idToken) {//すでにidTokenがあれば、"/"に飛ばす
        next("/dashboard");
      } else { //なければそのまま"/home"に
        next();
      }
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginComponent,
    beforeEnter(to, from, next) {//追記
      if (store.getters.idToken) {//すでにidTokenがあれば、"/"に飛ばす
        next("/dashboard");
      } else { //なければそのまま"/login"に
        next();
      }
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterComponent,
    beforeEnter(to, from, next) {//追記
      if (store.getters.idToken) {//すでにidTokenがあれば、"/"に飛ばす
        next("/dashboard");
      } else { //なければそのまま"/register"に
        next();
      }
    },
  },
  {
    path: "/application",
    name: "application",
    component: ApplicationComponent,
    meta: {
      title: "application"
    }
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoardComponent,
    beforeEnter(to, from, next) {//追記
      if (store.getters.idToken) {//すでにidTokenがあれば、"/"に飛ばす
        next("/dashboard");
      } else { //なければそのまま"/login"に
        next("/login");
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
