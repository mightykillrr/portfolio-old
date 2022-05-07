import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import BaseButton from "./components/ui/BaseButton.vue";
import SmallBadge from "./components/ui/SmallBadge.vue";

createApp(App)
  .use(router)
  .component("BaseButton", BaseButton)
  .component("SmallBadge", SmallBadge)
  .mount("#app");
