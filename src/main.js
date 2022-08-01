import { createApp } from "vue";
import App from "./App.vue";
import "./theme.css";
import HeaderComponent from "./components/HeaderComponent";

const app = createApp(App);

app.component("header-component", HeaderComponent);

app.mount("#app");
