<template>
  <el-container>
    <el-header class="el-header">
      <UserHeader
        @updateSearchResult="handleUpdateSearchResult"
        @update:isBusinessReco="handleUpdate"
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
              @click="routerToBusinessDetails"
              :data="businessData[(pagenum - 1) * 12 + (i - 1) * 3 + 0]"
            />
            <BusinessCard
              @click="routerToBusinessDetails"
              :data="businessData[(pagenum - 1) * 12 + (i - 1) * 3 + 1]"
            />
            <BusinessCard
              @click="routerToBusinessDetails"
              :data="businessData[(pagenum - 1) * 12 + (i - 1) * 3 + 2]"
            />
          </div>
        </li>
      </ul>
      <ul class="list" v-if="!this.isBusinessReco">
        <li v-for="i in 3" :key="i" class="list-item">
          <div class="card-container">
            <UserCard :data="userData[(pagenum - 1) * 12 + (i - 1) * 4 + 0]" />
            <UserCard :data="userData[(pagenum - 1) * 12 + (i - 1) * 4 + 1]" />
            <UserCard :data="userData[(pagenum - 1) * 12 + (i - 1) * 4 + 2]" />
            <UserCard :data="userData[(pagenum - 1) * 12 + (i - 1) * 4 + 3]" />
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
import homepage_reco from "@/assets/homepage_reco.json";
import frendsReco from "@/assets/friends.json";
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
      businessData: homepage_reco,
      userData: frendsReco,
      isBusinessReco: true,
      pagenum: 1,
    };
  },
  mounted() {
    // request.get("/recommend/recommend?").then((response) => {
    //   this.businessData = response;
    // });
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
  methods: {
    routerToBusinessDetails() {
      this.$router.push("/businessDetails");
    },
    handleUpdateSearchResult(response) {
      this.businessData = response;
    },
    handleUpdate(newValue) {
      this.isBusinessReco = newValue;
      this.pagenum = 1;
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

.card-container {
  display: flex;
  justify-content: space-between;
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

.pagination-container {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
</style>
