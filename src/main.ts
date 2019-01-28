import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Buefy, { defaultIconPack: "fas" });
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
