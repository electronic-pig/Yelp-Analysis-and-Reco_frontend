import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import VueFeather from "vue-feather";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
import "@/assets/css/app.css";
import "normalize.css";
import * as echarts from "echarts";
import essos from "@/assets/essos.json";
import BaiduMap from "vue-baidu-map-3x";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(BaiduMap, {
  ak: "eIgFzfEycAEaEXXAUN0rQc1G8WMPqMqM",
});
app.component(VueFeather.name, VueFeather);
app.use(router).use(ElementPlus, { locale: zhCn }).mount("#app");

app.config.globalProperties.$echarts = echarts;
echarts.registerTheme("customed", essos);
