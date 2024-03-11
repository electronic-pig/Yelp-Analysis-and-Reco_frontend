import { createRouter, createWebHistory } from "vue-router";
import PortalView from "@/views/PortalView.vue";
import BusinessHome from "@/views/BusinessHome.vue";
import UserHome from "@/views/UserHome.vue";
import BusinessAnalysis from "@/views/BusinessAnalysis.vue";
import UserAnalysis from "@/views/UserAnalysis.vue";
import StarsAnalysis from "@/views/StarsAnalysis.vue";
import CheckinAnalysis from '@/views/CheckinAnalysis.vue'
import ComprehensiveAnalysis from "@/views/ComprehensiveAnalysis.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "PortalView",
      component: PortalView,
    },
    {
      path: "/BusinessHome",
      name: "BusinessHome",
      component: BusinessHome,
    },
    {
      path: "/UserHome",
      name: "UserHome",
      component: UserHome,
    },
    {
      path: "/BusinessAnalysis",
      name: "BusinessAnalysis",
      component: BusinessAnalysis,
    },
    {
      path: "/UserAnalysis",
      name: "UserAnalysis",
      component: UserAnalysis,
    },
    {
      path: "/StarsAnalysis",
      name: "StarsAnalysis",
      component: StarsAnalysis,
    },
    {
      path: "/CheckinAnalysis",
      name: "CheckinAnalysis",
      component: CheckinAnalysis,
    },
    {
      path: "/ComprehensiveAnalysis",
      name: "ComprehensiveAnalysis",
      component: ComprehensiveAnalysis,
    },
  ],
});

export default router;
