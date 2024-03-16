<template>
  <el-container>
    <el-header class="el-header">
      <el-button type="primary" @click="goBack">返回</el-button>
      <UserHeader />
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="4">
          <div class="Filter" style="margin-top: 15vh">
            <h3 style="margin: 2px 0">Stars</h3>
            <el-radio-group v-model="star_condition">
              <el-radio value="">All</el-radio>
              <el-radio value="5">= 5 stars</el-radio>
              <el-radio value="4">≥ 4 stars</el-radio>
              <el-radio value="3">≥ 3 stars</el-radio>
            </el-radio-group>
            <el-divider style="margin: 12px 0" />
          </div>
          <div class="Filter" style="margin-top: 2vh">
            <h3 style="margin: 2px 0">Distance</h3>
            <el-radio-group v-model="distance_condition">
              <el-radio value="">All</el-radio>
              <el-radio value="1">≤ 1 km</el-radio>
              <el-radio value="2">≤ 2 km</el-radio>
              <el-radio value="5">≤ 5 km</el-radio>
            </el-radio-group>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="searchHeader">
            <h1 class="text">Search Result</h1>
            <el-dropdown
              class="dropdown"
              size="large"
              trigger="click"
              @command="handleCommand"
            >
              <span class="el-dropdown-link">
                SortBy
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="stars">stars</el-dropdown-item>
                  <el-dropdown-item command="review_count"
                    >review_count</el-dropdown-item
                  >
                  <el-dropdown-item command="distance"
                    >distance</el-dropdown-item
                  >
                  <el-dropdown-item command="">default</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <ul class="list">
            <li v-for="i in 4" :key="i" class="list-item">
              <div class="card-container">
                <BusinessCard
                  v-if="
                    businessDataLoaded &&
                    this.businessData[(this.pagenum - 1) * 8 + (i - 1) * 3 + 0]
                  "
                  :data="
                    this.businessData[(this.pagenum - 1) * 8 + (i - 1) * 3 + 0]
                  "
                />
                <BusinessCard
                  v-if="
                    businessDataLoaded &&
                    this.businessData[(this.pagenum - 1) * 8 + (i - 1) * 3 + 1]
                  "
                  :data="
                    this.businessData[(this.pagenum - 1) * 8 + (i - 1) * 3 + 1]
                  "
                />
              </div>
            </li>
          </ul>
          <div class="pagination-container">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="this.total"
              :default-page-size="8"
              @current-change="handleCurrentChange"
            /></div
        ></el-col>
        <el-col :span="4"> </el-col>
      </el-row>
      <FooterView />
    </el-main>
  </el-container>
</template>

<script>
import request from "@/utils/request.js";
import UserHeader from "@/components/UserComponents/UserHeader.vue";
import BusinessCard from "@/components/UserComponents/BusinessCard.vue";
import FooterView from "@/components/UserComponents/FooterView.vue";

export default {
  components: {
    UserHeader,
    BusinessCard,
    FooterView,
  },
  data() {
    return {
      sortBy: "",
      star_condition: "",
      distance_condition: "",
      businessData: {},
      businessDataLoaded: false,
      total: 0,
      pagenum: 1,
    };
  },
  watch: {
    star_condition(newValue) {
      this.star_condition = newValue;
      this.fetchData();
    },
    distance_condition(newValue) {
      this.distance_condition = newValue;
      this.fetchData();
    },
    "$route.params.searchValue": {
      immediate: true,
      handler(newValue) {
        this.businessDataLoaded = false;
        const loadingInstance = this.$loading({ text: "努力加载中..." });
        request({
          url:
            "/search/?query=" +
            newValue +
            "&sortBy=" +
            this.sortBy +
            "&star_condition=" +
            this.star_condition +
            "&distance_condition=" +
            this.distance_condition,
          method: "get",
        }).then((response) => {
          this.businessData = response;
          this.total = this.businessData.length;
          this.pagenum = 1;
          this.businessDataLoaded = true;
          loadingInstance.close();
        });
      },
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    handleCommand(command) {
      this.sortBy = command;
      this.fetchData();
    },
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
    },
    fetchData() {
      this.businessDataLoaded = false;
      const loadingInstance = this.$loading({ text: "努力加载中..." });
      request({
        url:
          "/search/?query=" +
          this.$route.params.searchValue +
          "&sortBy=" +
          this.sortBy +
          "&star_condition=" +
          this.star_condition +
          "&distance_condition=" +
          this.distance_condition,
        method: "get",
      }).then((response) => {
        this.businessData = response;
        this.total = this.businessData.length;
        this.pagenum = 1;
        this.businessDataLoaded = true;
        loadingInstance.close();
      });
    },
  },
};
</script>

<style scoped>
.Filter {
  display: flex;
  flex-direction: column;
  margin-left: 30%;
  margin-right: 30%;
}

.searchHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  text-align: left;
}

.dropdown {
  text-align: right;
}

.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.list {
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: auto;
}

.list-item {
  margin: 10px 0;
}

.card-container {
  display: flex;
  justify-content: space-between;
  margin: 0 1vw;
}

.pagination-container {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
</style>
