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
        <el-row>
          <el-col :span="18">
            <h3 style="margin-left: 1vw">店铺数据</h3>
            <el-row>
              <el-col class="col" :span="6">
                <el-statistic title="到店人数" :value="128" />
              </el-col>
              <el-col class="col" :span="6">
                <el-statistic
                  title="评论人数"
                  :value="this.details.review.length"
                />
              </el-col>
              <el-col class="col" :span="6">
                <el-statistic title="好评人数" :value="298" />
              </el-col>
              <el-col class="col" :span="6">
                <el-statistic title="当前类别综合排名" :value="52" />
              </el-col>
            </el-row>
            <h3 style="margin-left: 1vw">评论数据</h3>
          </el-col>
          <el-col :span="6">
            <BusinessCard :data="businessData[0]" />
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideView from "@/components/BusinessComponents/AsideView.vue";
import TabTime from "@/components/BusinessComponents/TabTime.vue";
import Logout from "@/components/Logout.vue";
import BusinessCard from "@/components/BusinessComponents/BusinessCard.vue";
import homepage_reco from "@/assets/homepage_reco.json";
import details from "@/assets/details.json";
import BaseChart from "@/components/AnalysisComponents/BaseChart.vue";

export default {
  components: {
    AsideView,
    TabTime,
    Logout,
    BusinessCard,
    BaseChart,
  },
  data() {
    return {
      isCollapse: false,
      activeIndex: this.$route.path,
      businessData: homepage_reco,
      details: details,
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
.col {
  text-align: center;
  padding: 1vh 1vw;
}
</style>
