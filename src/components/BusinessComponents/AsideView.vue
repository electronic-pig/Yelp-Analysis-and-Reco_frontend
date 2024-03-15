<template>
  <el-menu
    id="aside-menu"
    :collapse="isCollapse"
    background-color="#fff9f9"
    :default-active="activeIndex"
  >
    <div class="platform">
      <router-link to="/">
        <img
          class="platform-logo"
          src="@/assets/icon/yelp_dark.svg"
          alt="logo"
        />
      </router-link>
      <div v-if="!isCollapse" class="platform-title">
        <a @click="goShow">点评分析及推荐</a>
      </div>
    </div>

    <el-divider>
      <span class="divider-title" v-show="!isCollapse">功能区</span>
    </el-divider>

    <el-menu-item
      class="el-menu-item"
      index="/BusinessBoard"
      @click="routeToBusinessBoard"
    >
      <el-icon v-show="isCollapse">
        <Odometer />
      </el-icon>
      <template #title
        ><span class="title"
          ><el-icon><Odometer /></el-icon>仪表板</span
        ></template
      >
    </el-menu-item>

    <el-menu-item
      class="el-menu-item"
      index="/ManageAdvice"
      @click="routeToManageAdvice"
    >
      <el-icon v-show="isCollapse">
        <HelpFilled />
      </el-icon>
      <template #title
        ><span class="title"
          ><el-icon><HelpFilled /></el-icon>经营推荐</span
        ></template
      >
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
    activeIndex: {
      type: String,
      default: "/BusinessBoard",
    },
  },
  methods: {
    goShow() {
      this.$message.success("欢迎来到本平台");
    },
    routeToBusinessBoard() {
      this.$route.push("/BusinessBoard");
    },
    routeToManageAdvice() {
      this.$route.push("/ManageAdvice");
    },
  },
};
</script>

<style scoped>
.el-menu-item {
  border-radius: 5px;
  color: var(--theme--color);
  z-index: 1;
  font-size: 16px;
}

.el-menu-item:hover {
  background-color: var(--el-color-primary-light-7);
  color: #ecf4ff;
}

.el-menu-item.is-active {
  background-color: var(--theme--color);
  color: #ecf4ff !important;
}

.platform {
  padding: 10px 0;
  color: var(--theme--color);
  height: 80px;
}

.platform-logo {
  width: 60px;
}

.platform-title {
  position: relative;
  font-weight: 1000;
  font-family: Microsoft JhengHei UI, sans-serif;
  font-size: 22px;
  cursor: pointer;
  color: var(--theme--color);
}

.platform-title::after {
  content: "";
  width: 0;
  height: 3px;
  background: var(--theme--color);
  position: absolute;
  top: 100%;
  left: 50%;
  right: 50%;
  transition: all 0.5s;
}

.platform-title:hover:after {
  left: 8%;
  right: 8%;
  width: 85%;
}

.divider-title {
  display: block;
  line-height: 24px;
  overflow: hidden;
  width: 4em;
  color: rgb(140, 157, 182);
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.link-title {
  color: rgb(140, 157, 182);
  text-decoration: none;
}

.link-title:hover {
  color: var(--theme--color);
  text-decoration: none;
  cursor: pointer;
}
</style>
