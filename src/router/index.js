import { createRouter, createWebHistory } from "vue-router";
import PortalView from "@/views/PortalView.vue";
import BusinessHome from "@/views/BusinessHome.vue";
import UserHome from "@/views/UserHome.vue";
import BusinessDetails from "@/views/BusinessDetails.vue";
import BusinessAnalysis from "@/views/BusinessAnalysis.vue";
import UserAnalysis from "@/views/UserAnalysis.vue";
import ReviewAnalysis from "@/views/ReviewAnalysis.vue";
import StarsAnalysis from "@/views/StarsAnalysis.vue";
import CheckinAnalysis from "@/views/CheckinAnalysis.vue";
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
      path: "/BusinessDetails/:business_id",
      name: "BusinessDetails",
      component: BusinessDetails,
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
      path: "/ReviewAnalysis",
      name: "ReviewAnalysis",
      component: ReviewAnalysis,
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
  ],
});

export default router;
