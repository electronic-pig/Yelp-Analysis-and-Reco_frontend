<template>
  <el-container>
    <el-header class="el-header">
      <UserHeader
        @cityChangeReco="handleCityChangeReco"
        @changeReco="handleChangeReco"
      />
    </el-header>
    <el-main>
      <div class="carousel">
        <el-carousel trigger="click" height="80vh">
          <el-carousel-item v-for="item in imageUrl" :key="item">
            <img :src="item.url" alt="image" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <h1 class="reco">
        {{
          this.isBusinessReco
            ? "Business Recommendation"
            : "User Recommendation"
        }}
      </h1>
      <ul class="list" v-if="this.isBusinessReco">
        <li v-for="i in 4" :key="i" class="list-item">
          <div class="card-container">
            <BusinessCard
              v-if="
                businessDataLoaded &&
                this.businessData[(this.pagenum - 1) * 12 + (i - 1) * 3 + 0]
              "
              :data="
                this.businessData[(this.pagenum - 1) * 12 + (i - 1) * 3 + 0]
              "
            />
            <BusinessCard
              v-if="
                businessDataLoaded &&
                this.businessData[(this.pagenum - 1) * 12 + (i - 1) * 3 + 1]
              "
              :data="
                this.businessData[(this.pagenum - 1) * 12 + (i - 1) * 3 + 1]
              "
            />
            <BusinessCard
              v-if="
                businessDataLoaded &&
                this.businessData[(this.pagenum - 1) * 12 + (i - 1) * 3 + 2]
              "
              :data="
                this.businessData[(this.pagenum - 1) * 12 + (i - 1) * 3 + 2]
              "
            />
          </div>
        </li>
      </ul>
      <ul class="list" v-if="!this.isBusinessReco">
        <li v-for="i in 3" :key="i" class="list-item">
          <div class="card-container">
            <UserCard
              v-if="
                userDataLoaded &&
                this.userData[(this.pagenum - 1) * 12 + (i - 1) * 4 + 0]
              "
              :data="this.userData[(this.pagenum - 1) * 12 + (i - 1) * 4 + 0]"
            />
            <UserCard
              v-if="
                userDataLoaded &&
                this.userData[(this.pagenum - 1) * 12 + (i - 1) * 4 + 1]
              "
              :data="this.userData[(this.pagenum - 1) * 12 + (i - 1) * 4 + 1]"
            />
            <UserCard
              v-if="
                userDataLoaded &&
                this.userData[(this.pagenum - 1) * 12 + (i - 1) * 4 + 2]
              "
              :data="this.userData[(this.pagenum - 1) * 12 + (i - 1) * 4 + 2]"
            />
            <UserCard
              v-if="
                userDataLoaded &&
                this.userData[(this.pagenum - 1) * 12 + (i - 1) * 4 + 3]
              "
              :data="this.userData[(this.pagenum - 1) * 12 + (i - 1) * 4 + 3]"
            />
          </div>
        </li>
      </ul>
      <div class="pagination-container">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :default-page-size="12"
          @current-change="handleCurrentChange"
        />
      </div>
      <FooterView />
    </el-main>
  </el-container>
</template>

<script>
import request from "@/utils/request.js";
import UserHeader from "@/components/UserComponents/UserHeader.vue";
import BusinessCard from "@/components/UserComponents/BusinessCard.vue";
import UserCard from "@/components/UserComponents/UserCard.vue";
import FooterView from "@/components/UserComponents/FooterView.vue";

import image1 from "@/assets/image/p1.jpg";
import image2 from "@/assets/image/p2.jpg";
import image3 from "@/assets/image/p3.jpg";
import image4 from "@/assets/image/p4.jpg";

export default {
  components: {
    UserHeader,
    BusinessCard,
    UserCard,
    FooterView,
  },
  data() {
    return {
      imageUrl: [
        { url: image1 },
        { url: image2 },
        { url: image3 },
        { url: image4 },
      ],
      businessDataLoaded: false,
      userDataLoaded: false,
      businessData: [],
      userData: [],
      isBusinessReco: true,
      pagenum: 1,
    };
  },
  computed: {
    total() {
      if (this.isBusinessReco) {
        return this.businessData.length;
      } else {
        return this.userData.length;
      }
    },
  },
  mounted() {
    const loadingInstance = this.$loading({ text: "努力加载中..." });
    request({
      url: "/recommend/?city=Abington", //默认推荐城市
      method: "get",
    })
      .then((response) => {
        this.businessData = response;
        this.businessDataLoaded = true;
      })
      .finally(() => {
        loadingInstance.close();
      });
  },
  methods: {
    handleCityChangeReco(response) {
      this.businessData = response;
      this.businessDataLoaded = true;
      this.pagenum = 1;
    },
    handleChangeReco(newValue) {
      const loadingInstance = this.$loading({ text: "努力加载中..." });
      this.isBusinessReco = newValue;
      request({
        url: "/friends/recommend_friends",
        method: "get",
      })
        .then((response) => {
          this.userData = response;
          this.userDataLoaded = true;
          this.pagenum = 1;
        })
        .finally(() => {
          loadingInstance.close();
        });
    },
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
    },
  },
};
</script>

<style scoped>
.carousel {
  margin: 0 2vw;
}

.reco {
  font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  letter-spacing: -0.4px;
  line-height: 36px;
  color: rgb(45, 46, 47);
}

.list {
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: auto;
}

.list-item {
  margin: 20px 0;
}

.card-container {
  display: flex;
  justify-content: space-between;
  margin: 0 2vw;
}

.pagination-container {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
</style>
