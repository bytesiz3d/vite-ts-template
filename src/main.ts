import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";

import "./assets/css/setting.css";
import "./assets/css/global.css";

const app = createApp(App);
app.use(router);
app.use(store, key);
app.mount("#app");
export default app;
