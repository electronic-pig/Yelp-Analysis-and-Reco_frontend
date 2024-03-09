<template>
  <HomeHeader />
  <MainBody />
  <video autoplay loop muted playsinline class="fullscreen-background-video">
    <source src="/public/bg-video.mp4" type="video/mp4" />
  </video>
</template>

<script>
import HomeHeader from "@/components/PortalViewComponents/HomeHeader.vue";
import MainBody from "@/components/PortalViewComponents/MainBody.vue";
export default {
  name: "PortalView",
  components: {
    HomeHeader,
    MainBody,
  },
  mounted() {
    // 当组件挂载到DOM时禁用滚动条
    document.body.style.overflow = "hidden";
  },
  beforeUnmount() {
    // 当组件将要销毁时重新启用滚动条
    document.body.style.overflow = "";
  },
};
</script>

<style scoped>
.fullscreen-background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>
