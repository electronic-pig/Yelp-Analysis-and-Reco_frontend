<template>
  <HomeHeader />
  <MainBody />
  <video autoplay loop muted playsinline class="fullscreen-background-video">
    <source src="/bg-video.mp4" type="video/mp4" />
  </video>
</template>

<script>
import HomeHeader from "@/components/PortalComponents/HomeHeader.vue";
import MainBody from "@/components/PortalComponents/MainBody.vue";
export default {
  name: "PortalView",
  components: {
    HomeHeader,
    MainBody,
  },
  mounted() {
    document.body.style.overflow = "hidden";
  },
  beforeUnmount() {
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
