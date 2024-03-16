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
          <BaseChart
            v-if="isDataLoaded"
            :chartOption="chartOption"
            style="height: 300px"
          />
          <el-card class="advice" shadow="never">
            <template #header>
              <div class="card-header">
                <span>经营建议</span>
              </div>
            </template>
            <p class="text">
              {{ this.AdviceData.negative_reviews_advice }}
            </p>
          </el-card>
        </div>
        <h3 style="margin-left: 1vw">商家排行</h3>
        <el-table
          :data="AdviceData.top_five_businesses"
          stripe
          style="width: 100%"
        >
          <el-table-column prop="rank" label="排名" width="60">
            <template #default="scope">
              <el-tag type="danger" disable-transitions>{{
                scope.$index + 1
              }}</el-tag>
            </template></el-table-column
          >
          <el-table-column prop="name" label="商户名" />
          <el-table-column prop="categories" label="类目" />
          <el-table-column prop="address" label="地址" />
          <el-table-column prop="review_count" label="评论数量" />
          <el-table-column prop="stars" label="评分">
            <template #default="scope">
              <el-rate
                v-model="scope.row.stars"
                disabled
                show-score
                text-color="#ff9900"
              ></el-rate> </template
          ></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import request from "@/utils/request.js";
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
      AdviceData: {},
      chartOption: {},
      isDataLoaded: false,
    };
  },
  computed: {
    name() {
      switch (this.index) {
        case 0:
          return "差评";
        case 1:
          return "好评";
        case 2:
          return "中评";
        default:
          return "";
      }
    },
  },
  methods: {
    goCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
  async created() {
    const loadingInstance = this.$loading({ text: "努力加载中..." });
    const response = await request({
      url: "advice/get_advice",
      method: "get",
    });
    this.AdviceData = response;
    this.chartOption = {
      title: {
        text: "评价分布",
      },
      legend: {
        orient: "vertical",
        top: "16%",
        left: "8%",
      },
      series: [
        {
          name: "评价分布",
          type: "pie",
          radius: ["35%", "70%"],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 6,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: response.reviews_count.map((item, index) => {
            const names = ["差评", "好评", "中评"];
            return {
              value: item,
              name: names[index] || "",
            };
          }),
        },
      ],
    };
    this.isDataLoaded = true;
    loadingInstance.close();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.advice {
  margin: 0 2vw;
  max-width: 48vw;
  background-color: rgb(255, 253, 249);
}

.card-header {
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: #e20808;
}

.text {
  color: #555;
  text-indent: 2em;
}
</style>
