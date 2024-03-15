<template>
  <el-container v-if="businessDataLoaded">
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
                <el-statistic
                  title="到店人数"
                  :value="Math.round(this.businessData.reviews.length * 1.3)"
                />
              </el-col>
              <el-col class="col" :span="6">
                <el-statistic
                  title="评论人数"
                  :value="this.businessData.reviews.length"
                />
              </el-col>
              <el-col class="col" :span="6">
                <el-statistic
                  title="好评人数"
                  :value="this.businessData.positive_reviews_count"
                />
              </el-col>
              <el-col class="col" :span="6">
                <el-statistic
                  title="当前类别综合排名"
                  :value="this.businessData.business_rank"
                />
              </el-col>
            </el-row>
            <h3 style="margin-left: 1vw">评分数据</h3>
            <BaseChart v-if="isDataLoaded" :chartOption="chartOption1" />
            <h3 style="margin-left: 1vw">最新评论</h3>
            <el-table :data="latestReviews" stripe style="width: 100%">
              <el-table-column prop="rank" label="排名" width="60">
                <template #default="scope">
                  <el-tag type="danger" disable-transitions>{{
                    scope.$index + 1
                  }}</el-tag>
                </template></el-table-column
              >
              <el-table-column prop="rev_user_name" label="姓名" width="180" />
              <el-table-column prop="rev_text" label="评论" />
              <el-table-column prop="rev_timestamp" label="时间" width="180" />
            </el-table>
          </el-col>
          <el-col :span="6">
            <BusinessCard :data="businessData" />
            <BaseChart v-if="isDataLoaded" :chartOption="chartOption2" />
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import request from "@/utils/request.js";
import AsideView from "@/components/BusinessComponents/AsideView.vue";
import TabTime from "@/components/BusinessComponents/TabTime.vue";
import Logout from "@/components/Logout.vue";
import BusinessCard from "@/components/BusinessComponents/BusinessCard.vue";
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
      businessData: {},
      chartOption1: {},
      chartOption2: {},
      latestReviews: [],
      businessDataLoaded: false,
      isDataLoaded: false,
    };
  },
  mounted() {
    window.onresize = () => {
      this.isCollapse = document.documentElement.clientWidth <= 1100;
    };
    document.body.style.overflow = "hidden";
    const loadingInstance = this.$loading({ text: "努力加载中..." });
    request({
      url: "/boards/get_board",
      method: "get",
    })
      .then((response) => {
        this.businessData = response;
        this.latestReviews = response.reviews.slice(0, 3);
        this.businessDataLoaded = true;
        this.chartOption1 = {
          legend: {
            data: ["评分"],
          },
          xAxis: {
            type: "time",
          },
          yAxis: {
            type: "value",
            name: "评分",
            axisLabel: {
              formatter: "{value}分",
            },
          },
          dataZoom: [
            {
              start: 30,
              end: 40,
              backgroundColor: "white",
              handleStyle: {
                color: "#fff",
                borderColor: "#f29191",
              },
              dataBackground: {
                lineStyle: {
                  color: "#f29191",
                },
                areaStyle: {
                  color: "#f9c8c8",
                },
              },
              selectedDataBackground: {
                lineStyle: {
                  color: "#e20808",
                },
                areaStyle: {
                  color: "#ef7676",
                },
              },
              moveHandleStyle: {
                color: "#e83f3f",
              },
              brushSelect: false,
              emphasis: {
                handleStyle: {
                  color: "#f29191",
                  borderColor: "#f29191",
                },
                moveHandleStyle: {
                  color: "#e83f3f",
                },
              },
            },
          ],
          series: [
            {
              name: "评分",
              type: "line",
              color: "#ee4720",
              data: this.businessData.reviews
                .map((item) => {
                  const date = new Date(item.rev_timestamp);
                  return {
                    date: date
                      .toLocaleString("zh-CN", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })
                      .replace(/\//g, "-"),
                    stars: item.rev_stars,
                  };
                })
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((item) => [item.date, item.stars]),
            },
          ],
        };
        this.chartOption2 = {
          xAxis: {
            type: "category",
            data: this.businessData.star_count.map((item) => item.rev_stars),
            axisLabel: {
              formatter: "{value}星",
            },
          },
          yAxis: {
            type: "value",
            name: "评分",
            axisLabel: {
              formatter: "{value}分",
            },
          },
          series: [
            {
              name: "评分",
              type: "bar",
              data: this.businessData.star_count.map((item) => item.count),
            },
          ],
        };
        this.isDataLoaded = true;
      })
      .finally(() => {
        loadingInstance.close();
      });
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
