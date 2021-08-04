import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const AdIntel = createApp(App);

AdIntel.use(router);

AdIntel.mount("#app");
