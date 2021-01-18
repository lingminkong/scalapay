import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "skeletonic/dist/skeletonic.css";

createApp(App)
  .use(router)
  .mount("#app");
