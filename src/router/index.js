import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import HomeIdx from "../views/Home/HomeIdx.vue";
import Profile from "../views/Home/Profile.vue";
import Activity from "../views/Home/Activity.vue";
import Articles from "../views/Home/Articles.vue";
import Connections from "../views/About/Connections.vue";
import Invitations from "../views/About/Invitations.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children:[
      {
        path: "",
        component: Profile,
      },
      {
        path: "Profile",
        component: Profile,
      },
      {
        path: "Activity",
        component: Activity,
      },
      {
        path: "Articles",
        component: Articles,
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    children:[
      {
        path: "",
        component: Connections,
      },
      {
        path: "Connections",
        component: Connections,
      },
      {
        path: "Invitations",
        component: Invitations,
      },
      
    ]
      
  },
  {
    path: "/job",
    name: "Job",
    component: () => import("../views/Job.vue"),
      
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
