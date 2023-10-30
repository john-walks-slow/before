import { createApp } from "vue";
import App from "./App.vue";
import tooltip from "./directives/tooltip.js";
import "@/styles/tooltip.css";
import router from "./router/index.js";
let app = createApp(App);
app.use(router);
app.directive("tooltip", tooltip);
app.mount("#app");
