import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/firebase/firebase.js";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/main.scss";

const app = createApp(App);

app.use(createPinia()).use(router).mount("#app");
