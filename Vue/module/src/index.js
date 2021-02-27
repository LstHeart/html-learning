import Vue from "../../lib/vue.js";

import App from "./App.js";
import "./style.css";

import { num1, num2, add } from "./App.js";

console.log(num1);
console.log(num2);
// console.log(printMe());
add(3, 6);
new Vue({
  // el: "#app",
  components: {
    App: App,
  },
  template: "<App />",
}).$mount("#app");
