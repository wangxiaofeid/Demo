import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Cron from "@xiaofei.wang/vue-cron";
import App from "./App.vue";

Vue.use(ElementUI);
Vue.use(Cron);

// 基础组件库注入
Vue.use(
  Object.entries(ElementUI).reduce((result, [key, componentOrUtil]) => {
    if (
      typeof componentOrUtil !== "function" &&
      componentOrUtil.name &&
      componentOrUtil.name.indexOf("El") !== -1
    ) {
      componentOrUtil.name = componentOrUtil.name.replace("El", "Cb");
    }

    result[key] = componentOrUtil;

    return result;
  }),
  {}
);

new Vue({
  el: "#app",
  render: h => h(App)
});
