import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const GoFigureApp = createApp(App);

GoFigureApp.use(router);

GoFigureApp.mount("#app");
