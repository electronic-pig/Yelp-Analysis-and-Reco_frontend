<template>
  <router-link to="/">
    <img class="platform-logo" src="@/assets/icon/yelp_dark.svg" alt="logo" />
  </router-link>
  <div class="search-wrapper">
    <el-select
      class="city-select"
      v-model="cityValue"
      filterable
      placeholder="选择城市"
    >
      <el-option
        v-for="item in this.citys"
        :key="item.city"
        :label="item.label"
        :value="item.city"
      />
    </el-select>
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
  <Logout @changeReco="handleChangeReco" />
</template>

<script>
import request from "@/utils/request.js";
import citys from "@/assets/city.json";
import Logout from "@/components/Logout.vue";

export default {
  components: {
    Logout,
  },
  data() {
    return {
      searchValue: "",
      cityValue: "Abington",
      userData: JSON.parse(localStorage.getItem("user")) || {},
      citys: citys,
    };
  },
  watch: {
    cityValue(newCityValue) {
      const loadingInstance = this.$loading({ text: "努力加载中..." });
      request({
        url: "/recommend/?city=" + newCityValue,
        method: "get",
      })
        .then((response) => {
          this.$emit("cityChangeReco", response);
        })
        .finally(() => {
          loadingInstance.close();
        });
    },
  },
  emits: ["cityChangeReco", "changeReco", "searchBusiness"],
  mounted() {
    if (this.$route.params.city) {
      this.cityValue = this.$route.params.city;
    }
  },
  methods: {
    handleSearch() {
      this.$router.push({
        name: "SearchBusiness",
        params: { city: this.cityValue, searchValue: this.searchValue },
      });
    },
    handleCommand(command) {
      if (command === "logout") {
        this.$router.push("/");
      }
    },
    handleChangeReco(newValue) {
      if (this.$route.name !== "UserHome") {
        this.$router.push({ name: "UserHome" });
      } else {
        this.$emit("changeReco", newValue);
      }
    },
  },
};
</script>

<style scoped>
.city-select {
  width: 8vw;
}

.city-select :deep(.el-select__wrapper) {
  border-radius: 4px 0 0 4px;
}

.search-wrapper {
  display: flex;
  align-items: center;
}

.search-box {
  width: 30vw;
  margin-right: 10px;
}

.search-box :deep(.el-input__wrapper) {
  border-radius: 0 4px 4px 0;
}
</style>
