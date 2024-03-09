<template>
  <el-container>
    <el-aside width="auto">
      <AsideView :is-collapse="isCollapse" :active-index="activeIndex" />
    </el-aside>
    <el-container>
      <el-header>
        <el-icon class="collapse" v-if="!isCollapse" :size="35">
          <Fold @click="goCollapse" />
        </el-icon>
        <el-icon class="collapse" v-if="isCollapse" :size="35">
          <Expand @click="goCollapse" />
        </el-icon>
        <TabTime />
        <UserLogout />
      </el-header>
      <el-main> </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideView from "@/components/AsideView.vue";
import TabTime from "@/components/TabTime.vue";
import UserLogout from "@/components/UserLogout.vue";

export default {
  components: {
    AsideView,
    TabTime,
    UserLogout,
  },
  data() {
    return {
      isCollapse: false,
      activeIndex: this.$route.path,
    };
  },
  mounted() {
    window.onresize = () => {
      this.isCollapse = document.documentElement.clientWidth <= 1100;
    };
    document.body.style.overflow = "hidden";
  },
  updated() {
    this.activeIndex = this.$route.path;
  },
  methods: {
    goCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style scoped>
.bottom-container {
  margin-top: 20px;
  display: block;
  height: 450px;
  border: 2px solid var(--theme--color);
  border-radius: 15px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.bottom-container:hover {
  transform: scale(1.01);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
