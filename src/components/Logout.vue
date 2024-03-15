<template>
  <div class="user-wapper">
    <el-switch
      v-if="userData.identity === 'user'"
      class="switch"
      v-model="isBusinessReco"
      inline-prompt
      active-text="商家推荐"
      inactive-text="好友推荐"
      size="large"
      @change="handleChange"
    />
    <el-avatar :src="avatarUrl" size="small" />
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
    avatarUrl() {
      const randomId = Math.floor(Math.random() * (10352 - 10342 + 1)) + 10342;
      return `http://118.113.19.161:8180/secure/useravatar?avatarId=${randomId}`;
    },
  },
  methods: {
    handleCommand(command) {
      if (command === "logout") {
        localStorage.removeItem("user");
        this.$router.push("/");
      }
    },
    handleChange(newValue) {
      this.$emit("changeReco", newValue);
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
