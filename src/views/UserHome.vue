<template>
  <el-container>
    <el-header class="el-header">
      <router-link to="/">
        <img
          class="platform-logo"
          src="@/assets/icon/yelp_dark.svg"
          alt="logo"
        />
      </router-link>
      <div class="search-wrapper">
        <el-input
          class="search-box"
          placeholder="搜索"
          v-model="searchValue"
          clearable
        ></el-input>
        <el-button type="primary" class="search-button" @click="handleSearch">
          <el-icon>
            <Search />
          </el-icon>
          搜索
        </el-button>
      </div>
      <UserLogout />
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
          <BusinessCard />
        </li>
      </ul>
      <div class="pagination-container">
        <el-pagination background layout="prev, pager, next" :total="total" />
      </div>
      <div class="footer">
        <div class="info">
          <span>About</span>
          <span>Discover</span>
          <span>Yelp for Business</span>
          <span>Languages</span>
        </div>
        <p class="right">
          Copyright © 2004–2024 Yelp Inc. Yelp,
          <img
            style="vertical-align: bottom"
            src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/7ef71bf77a33/assets/img/brand/logo_desktop.svg"
            alt="Yelp logo"
            width="38"
            height="19"
          />,
          <img
            style="vertical-align: bottom"
            src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/cabcef1daea2/assets/img/brand/burst_red.svg"
            alt="Yelp burst"
            width="14"
            height="16"
          />
          and related marks are registered trademarks of Yelp.
        </p>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import request from "@/utils/request.js";
import UserLogout from "@/components/UserLogout.vue";
import BusinessCard from "@/components/BusinessCard.vue";
import image1 from "@/assets/image/p1.jpg";
import image2 from "@/assets/image/p2.jpg";
import image3 from "@/assets/image/p3.jpg";
import image4 from "@/assets/image/p4.jpg";
export default {
  components: {
    UserLogout,
    BusinessCard,
  },
  data() {
    return {
      searchValue: "",
      userData: JSON.parse(localStorage.getItem("user")) || {},
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
    handleSearch() {
      console.log(import.meta.env.VITE_APP_BASE_URL);
      request
        .get("/business/search_most_business")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    handleCommand(command) {
      if (command === "logout") {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.search-wrapper {
  display: flex;
  align-items: center;
}

.search-box {
  width: 30vw;
  margin-right: 10px;
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

.footer {
  background-color: rgba(247, 247, 247, 1);
  height: 100px;
}

.info {
  margin: 0 15vw;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  color: rgba(110, 112, 114, 1);
  text-align: center;
  justify-content: center;
  align-items: center;
}

span {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
}
</style>
