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
    </el-main>
  </el-container>
</template>

<script>
import UserLogout from "@/components/UserLogout.vue";
import image1 from "@/assets/image/p1.jpg";
import image2 from "@/assets/image/p2.jpg";
import image3 from "@/assets/image/p3.jpg";
import image4 from "@/assets/image/p4.jpg";
export default {
  components: {
    UserLogout,
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
    };
  },
  methods: {
    handleSearch() {
      console.log("searchValue:", this.searchValue);
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
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-wrapper {
  display: flex;
  align-items: center;
}

.search-box {
  width: 30vw;
  margin-right: 10px;
}
</style>
