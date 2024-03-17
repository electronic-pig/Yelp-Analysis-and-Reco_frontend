<template>
  <el-row type="flex" justify="center" class="el-row">
    <el-col :span="2"
      ><img
        class="logo"
        src="@/assets/icon/yelp_dark.svg" alt="logo"
        @click="routerToHome"
    /></el-col>
    <el-col :span="4"
      ><span
        :class="{
          'subtitle-index': $route.path === '/BusinessAnalysis',
          subtitle: $route.path !== '/BusinessAnalysis',
        }"
        @click="routerToBusinessAnalysis"
        >商户分析</span
      ></el-col
    >
    <el-col :span="4"
      ><span
        :class="{
          'subtitle-index': $route.path === '/UserAnalysis',
          subtitle: $route.path !== '/UserAnalysis',
        }"
        @click="routerToUserAnalysis"
        >用户分析</span
      ></el-col
    >
    <el-col :span="4"
      ><span
        :class="{
          'subtitle-index': $route.path === '/ReviewAnalysis',
          subtitle: $route.path !== '/ReviewAnalysis',
        }"
        @click="routerToReviewAnalysis"
        >评论分析</span
      ></el-col
    >
    <el-col :span="4"
      ><span
        :class="{
          'subtitle-index': $route.path === '/StarsAnalysis',
          subtitle: $route.path !== '/StarsAnalysis',
        }"
        @click="routerToStarsAnalysis"
        >评分分析</span
      ></el-col
    >
    <el-col :span="4"
      ><span
        :class="{
          'subtitle-index': $route.path === '/CheckinAnalysis',
          subtitle: $route.path !== '/CheckinAnalysis',
        }"
        @click="routerToCheckinAnalysis"
        >打卡分析</span
      ></el-col
    >
  </el-row>
  <el-divider />
</template>
<script>
export default {
  methods: {
    routerToHome() {
      this.$router.push("/");
    },
    routerToBusinessAnalysis() {
      this.$router.push("/BusinessAnalysis");
    },
    routerToUserAnalysis() {
      this.$router.push("/UserAnalysis");
    },
    routerToReviewAnalysis() {
      this.$router.push("/ReviewAnalysis");
    },
    routerToStarsAnalysis() {
      this.$router.push("/StarsAnalysis");
    },
    routerToCheckinAnalysis() {
      this.$router.push("/CheckinAnalysis");
    },
  },
};
</script>
<style scoped>
.el-row {
  animation: slideInFromBottom 1s ease forwards;
  color: #464646;
}

.el-col {
  line-height: 70px;
  text-align: center;
  height: 60px;
  font-weight: bold;
  font-family: SimHei sans-serif;
}

.logo {
  display: flex;
  align-items: flex-end;
  height: 60px;
  cursor: pointer;
}

.subtitle-index {
  font-size: 28px;
  position: relative;
  display: inline;
  padding-bottom: 3px;
  letter-spacing: 2px;
  cursor: pointer;
}

.subtitle-index::after {
  content: "";
  width: 0px;
  height: 3px;
  background: #e20808;
  position: absolute;
  top: 100%;
  left: 0%;
  right: 0%;
  width: 100%;
}

.subtitle {
  font-size: 28px;
  position: relative;
  display: inline;
  padding-bottom: 3px;
  letter-spacing: 2px;
  cursor: pointer;
}

.subtitle::after {
  content: "";
  width: 0px;
  height: 3px;
  background: #e20808;
  position: absolute;
  top: 100%;
  left: 50%;
  right: 50%;
  transition: all 0.5s;
}

.subtitle:hover:after {
  left: 0%;
  right: 0%;
  width: 100%;
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
