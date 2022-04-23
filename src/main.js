import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import tooltip from "./directives/tooltip.js";
import "@/assets/tooltip.css";

let app = createApp(App);
app.directive("tooltip", tooltip);
app.mount("#app");
