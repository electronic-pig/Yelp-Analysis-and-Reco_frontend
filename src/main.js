import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import VueFeather from "vue-feather";
import "@/assets/css/app.css";
import "normalize.css";
import * as echarts from "echarts";
import "echarts-wordcloud";
import essos from "@/assets/essos.json";
import BaiduMap from "vue-baidu-map-3x";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(BaiduMap, {
  ak: "iC8mLrb6MoMuHu3y9hVVD6TMFpFordqQ",
});
app.component(VueFeather.name, VueFeather);
app.use(router).use(ElementPlus, { locale: zhCn }).mount("#app");

app.config.globalProperties.$echarts = echarts;
echarts.registerTheme("customed", essos);
