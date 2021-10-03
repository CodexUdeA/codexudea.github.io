import App from "./App.vue";
import { createApp } from "vue";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import router from "./router";
import "./styles/main.scss";

library.add(
  faMapMarkerAlt,
  faClock,
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
