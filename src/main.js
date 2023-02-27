import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);

// Use Router
app.use(router);

app.mount("#app");
