<template>
  <el-container>
    <el-header class="el-header">
      <UserHeader @updateSearchResult="handleUpdateSearchResult" />
    </el-header>
    <el-main>
      <el-carousel trigger="click" height="80vh">
        <el-carousel-item v-for="item in imageUrl" :key="item">
          <img :src="item.url" alt="image" />
        </el-carousel-item>
      </el-carousel>
      <h1 class="reco">Recommendation</h1>
      <ul class="list">
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
      <div class="pagination-container">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
        />
      </div>
      <FooterView />
    </el-main>
  </el-container>
</template>

<script>
import UserHeader from "@/components/UserComponents/UserHeader.vue";
import BusinessCard from "@/components/UserComponents/BusinessCard.vue";
import FooterView from "@/components/UserComponents/FooterView.vue";
import homepage_reco from "@/assets/homepage_reco.json";
import image1 from "@/assets/image/p1.jpg";
import image2 from "@/assets/image/p2.jpg";
import image3 from "@/assets/image/p3.jpg";
import image4 from "@/assets/image/p4.jpg";

export default {
  components: {
    UserHeader,
    BusinessCard,
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
      total: homepage_reco.length,
      businessData: homepage_reco,
      pagenum: 1,
    };
  },
  mounted() {
    console.log(this.businessData);
  },
  methods: {
    routerToBusinessDetails() {
      this.$router.push("/businessDetails");
    },
    handleUpdateSearchResult(homepage_reco) {
      this.businessData = homepage_reco;
    },
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
    },
  },
};
</script>

<style scoped>
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
