import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import "./theme.css";
import HeaderComponent from "./components/HeaderComponent";

const app = createApp(App);

app.component("HeaderComponent", HeaderComponent);
app.component(
  "AsyncComponent",
  defineAsyncComponent(() => {
    return import("./components/AsyncComponent");
  })
);

app.mount("#app");
