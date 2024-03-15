<template>
  <div class="center-container">
    <div class="animated-text">
      <div class="logo">
        <img src="@/assets/icon/yelp.svg" />
      </div>
      <h1>点评数据分析与推荐</h1>
      <h3>Yelp Reviews Analysis and Recommendation</h3>
    </div>
    <div class="btn-container animated-text">
      <button class="btn-hover btn-color" @click="showLoginDialog = true">
        点击登录
      </button>
    </div>
  </div>
  <el-dialog
    v-model="showLoginDialog"
    width="400"
    title="登录"
    align-center
    center
  >
    <el-form ref="loginForm" :model="loginForm">
      <el-form-item>
        <el-input
          v-model="loginForm.username"
          autocomplete="off"
          placeholder="用户名"
        >
          <template #prepend>
            <el-icon>
              <Avatar />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
          show-password
          placeholder="密码"
        >
          <template #prepend>
            <el-icon>
              <Lock />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="loginForm.identity">
          <el-radio value="user" size="large" border>用户</el-radio>
          <el-radio value="business" size="large" border>商家</el-radio>
        </el-radio-group>
      </el-form-item>
      <div style="text-align: right">
        <el-button type="default" @click="showLoginDialog = false"
          >取消</el-button
        >
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script scoped>
import request from "@/utils/request.js";
export default {
  data() {
    return {
      showLoginDialog: false,
      loginForm: {
        identity: "user",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        this.$message.error("用户名或密码不能为空");
        return;
      }
      if (this.loginForm.identity == "user") {
        localStorage.setItem("user", JSON.stringify(this.loginForm));
        request({
          url: "/login/?type=user&name=" + this.loginForm.username,
          method: "get",
        }).then((response) => {
          this.$router.push("/UserHome");
        });
      } else {
        localStorage.setItem("user", JSON.stringify(this.loginForm));
        // request({
        //   url: "/login?type=business&name=" + this.loginForm.username,
        //   method: "get",
        // })
        //   .then((response) => {
        this.$router.push("/BusinessHome");
        // });
      }
      this.showLoginDialog = false;
    },
  },
};
</script>

<style scoped>
.center-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.logo img {
  width: 400px;
  display: block;
  margin: 0 auto;
}

h1 {
  line-height: 0%;
  padding: 0;
  margin-top: 90px;
  font-family: "Microsoft Yahei";
  font-weight: bold;
  color: rgb(255, 255, 255);
  letter-spacing: 8px;
  font-size: 80px;
  text-align: center;
}

h3 {
  padding: 0;
  font-family: "Microsoft Yahei";
  font-weight: bold;
  color: rgb(255, 255, 255);
  letter-spacing: 4px;
  font-size: 30px;
  text-align: center;
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animated-text {
  animation: slideInFromBottom 1s ease forwards;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.btn-hover {
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.btn-hover:hover {
  background-position: 100% 0;
  transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.btn-hover:focus {
  outline: none;
}

.btn-hover.btn-color {
  background-image: linear-gradient(
    to right,
    #ff0000,
    #ff1900,
    #ff3c00,
    #ff3c00
  );
  box-shadow: 0 4px 15px 0 rgba(266, 8, 8, 0.75);
}
</style>
