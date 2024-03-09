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
    <el-main></el-main>
  </el-container>
</template>

<script>
import UserLogout from "@/components/UserLogout.vue";
export default {
  components: {
    UserLogout,
  },
  data() {
    return {
      searchValue: "",
      userData: JSON.parse(localStorage.getItem("user")) || {},
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
