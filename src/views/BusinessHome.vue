<template>
  <el-container>
    <el-aside width="auto">
      <AsideVue :is-collapse="isCollapse" :active-index="activeIndex" />
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
      </el-header>
      <el-main>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideVue from "@/components/AsideVue.vue";
import TabTime from "@/components/TabTime.vue";

export default {
  components: {
    AsideVue,
    TabTime,
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
    this.activeIndex = this.$route.path
  },
  methods: {
    goCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  }
};
</script>

<style scoped>
.select {
  margin-left: auto;
  margin-right: 10px;
}

.top-container {
  display: flex;
  justify-content: space-between;
}

.middle-container {
  margin: 20px 0;
  display: flex;
  height: 360px;
  justify-content: space-between;
}

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