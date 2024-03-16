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
        <Logout />
      </el-header>
      <el-main>
        <div class="container">
          <base-chart v-if="isDataLoaded" :chartOption="chartOption" />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideView from "@/components/BusinessComponents/AsideView.vue";
import TabTime from "@/components/BusinessComponents/TabTime.vue";
import Logout from "@/components/Logout.vue";
import BaseChart from "@/components/AnalysisComponents/BaseChart.vue";

export default {
  components: {
    AsideView,
    TabTime,
    Logout,
    BaseChart,
  },
  data() {
    return {
      isCollapse: false,
      activeIndex: this.$route.path,
      chartOption:{}
    };
  },
  mounted() {
    window.onresize = () => {
      this.isCollapse = document.documentElement.clientWidth <= 1100;
    };
    document.body.style.overflow = "hidden";
    const loadingInstance = this.$loading({ text: "努力加载中..." });
    request({
      url: "/advice/get_advice",
      method: "get",
    })
      .then((response) => {
        this.businessData = response;
      })
      .finally(() => {
        loadingInstance.close();
      });
  },
  async created() {
    this.isDataLoaded = true;
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
.container {
  display: flex;
  justify-content: space-between;
}
</style>
