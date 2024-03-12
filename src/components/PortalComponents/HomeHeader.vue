<template>
  <el-row type="flex" justify="center" class="el-row">
    <el-col :span="4"
      ><span class="subtitle" @click="routerToBusinessAnalysis"
        >商户分析</span
      ></el-col
    >
    <el-col :span="4"
      ><span class="subtitle" @click="routerToUserAnalysis"
        >用户分析</span
      ></el-col
    >
    <el-col :span="4"
      ><span class="subtitle" @click="routerToreviewAnalysis"
        >评论分析</span
      ></el-col
    >
    <el-col :span="4"
      ><span class="subtitle" @click="routerToStarsAnalysis"
        >评分分析</span
      ></el-col
    >
    <el-col :span="4"
      ><span class="subtitle" @click="routerToCheckinAnalysis"
        >打卡分析</span
      ></el-col
    >
  </el-row>
</template>
<script>
export default {
  methods: {
    routerToBusinessAnalysis() {
      this.$router.push("/BusinessAnalysis");
    },
    routerToUserAnalysis() {
      this.$router.push("/UserAnalysis");
    },
      routerToreviewAnalysis() {
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
  color: #ffffff;
}

.el-col {
  line-height: 130px;
  text-align: center;
  height: 150px;
  font-weight: bold;
  font-family: SimHei sans-serif;
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
  background: rgb(226, 8, 8);
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
