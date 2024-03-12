<template>
  <el-container>
    <el-header class="el-header">
      <UserHeader />
    </el-header>
    <el-main>
      <el-carousel trigger="click" height="80vh">
        <el-carousel-item v-for="item in imageUrl" :key="item">
          <img :src="item.url" alt="image" />
        </el-carousel-item>
      </el-carousel>
      <h1 class="reco">Recommendation</h1>
      <ul class="list">
        <!-- <li v-for="(data, index) in businessData" :key="index" class="list-item"> -->
        <li v-for="i in 4" :key="i" class="list-item">
          <div class="card-container">
            <BusinessCard @click="routerToBusinessDetails" />
            <BusinessCard @click="routerToBusinessDetails" />
            <BusinessCard @click="routerToBusinessDetails" />
          </div>
        </li>
      </ul>
      <div class="pagination-container">
        <el-pagination background layout="prev, pager, next" :total="total" />
      </div>
      <FooterView />
    </el-main>
  </el-container>
</template>

<script>
import UserHeader from "@/components/UserComponents/UserHeader.vue";
import BusinessCard from "@/components/UserComponents/BusinessCard.vue";
import FooterView from "@/components/UserComponents/FooterView.vue";
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
      total: 100,
    };
  },
  methods: {
    routerToBusinessDetails() {
      this.$router.push("/businessDetails");
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
