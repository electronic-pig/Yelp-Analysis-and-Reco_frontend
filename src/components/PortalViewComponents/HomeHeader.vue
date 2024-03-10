<template>
  <el-row
    type="flex"
    justify="center"
    style="color: rgb(255, 255, 255)"
    class="animate"
  >
    <el-col :span="4"
      ><span class="subtitle" @click="routerToBusinessAnalysis"
        >商户分析</span
      ></el-col
    >
    <el-col :span="4"><span class="subtitle">用户分析</span></el-col>
    <el-col :span="4"><span class="subtitle">评论分析</span></el-col>
    <el-col :span="4"><span class="subtitle">评分分析</span></el-col>
    <el-col :span="4"><span class="subtitle">打卡分析</span></el-col>
    <el-col :span="4"><span class="subtitle">综合分析</span></el-col>
  </el-row>
</template>
<script>
export default {
  methods: {
    routerToBusinessAnalysis() {
      this.$router.push("/BusinessAnalysis");
    },
  },
};
</script>
<style scoped>
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

.animate {
  animation: slideInFromBottom 1s ease forwards;
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
