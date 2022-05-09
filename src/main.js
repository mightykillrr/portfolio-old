import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import BaseButton from "./components/ui/BaseButton.vue";
import SmallBadge from "./components/ui/SmallBadge.vue";

const app = createApp(App);

app.use(router);
app.component("BaseButton", BaseButton);
app.component("SmallBadge", SmallBadge);

app.mount("#app");
