<template>
  <div class="user-wapper">
    <el-switch
      class="switch"
      v-model="isBusinessReco"
      inline-prompt
      active-text="商家推荐"
      inactive-text="好友推荐"
      size="large"
      @change="handleChange"
    />
    <el-avatar :icon="icon" size="small" />
    <el-dropdown size="large" trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        {{ userData.username }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: JSON.parse(localStorage.getItem("user")) || {},
      isBusinessReco: true,
    };
  },
  computed: {
    icon() {
      return this.userData.identity == "user" ? "UserFilled" : "HomeFilled";
    },
  },
  methods: {
    handleCommand(command) {
      if (command === "logout") {
        this.$router.push("/");
      }
    },
    handleChange(newValue) {
      this.$emit("update:isBusinessReco", newValue);
    },
  },
};
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  margin-left: 1vw;
}

.user-wapper {
  display: flex;
  align-items: center;
}

.switch {
  margin-right: 1vw;
  --el-switch-on-color: #e20808;
  --el-switch-off-color: #e20808;
}
</style>
