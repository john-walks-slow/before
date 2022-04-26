import { createRouter, createWebHistory } from "vue-router";
import AVGScene from "../components/AVGScene.vue";
import EndScene from "../components/EndScene.vue";
import BuildingScene from "../components/BuildingScene.vue";
import DescriptionScene from "../components/DescriptionScene.vue";
import StarScene from "../components/StarScene.vue";
const routes = [
  {
    path: "/",
    component: DescriptionScene,
  },
  { path: "/story/:id", component: AVGScene },
  { path: "/building/:id?", component: BuildingScene },
  { path: "/star/:id?", component: StarScene },
  { path: "/end", component: EndScene },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
