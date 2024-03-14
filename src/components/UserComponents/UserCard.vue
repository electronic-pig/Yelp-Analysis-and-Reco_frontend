<template>
  <el-card class="rounded-card">
    <div class="avatar">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        :size="80"
        shape="square"
      />
    </div>
    <div class="content">
      <div class="name">Michelle</div>
      <div class="yelp_since">2008-07-14</div>
      <div class="info">
        <el-icon color="rgb(110, 112, 114)"><User /></el-icon>1
        <el-icon color="rgb(110, 112, 114)"><EditPen /></el-icon>20
        <el-icon color="rgb(110, 112, 114)"><StarFilled /></el-icon>4.5
      </div>
    </div>
    <div class="judge">
      <div class="judge-item">
        <div class="img-wapper">
          <img
            src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_helpful_bulb_v2.yji-927d56e36e3a11c12e58.svg"
            alt="useful"
          />
        </div>
        <div class="judge-info">Useful</div>
        <div class="judge-info-count">29</div>
      </div>
      <div class="judge-item">
        <div class="img-wapper">
          <img
            src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_helpful_bulb_v2.yji-927d56e36e3a11c12e58.svg"
            alt="useful"
          />
        </div>
        <div class="judge-info">Cool</div>
        <div class="judge-info-count">8</div>
      </div>
      <div class="judge-item">
        <div class="img-wapper">
          <img
            src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_love_this_v2.yji-e4b17143e9d097f34029.svg"
            alt="funny"
          />
        </div>
        <div class="judge-info">Funny</div>
        <div class="judge-info-count">19</div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.rounded-card {
  border-radius: 10px;
  width: 22vw;
  display: flex;
  justify-content: center;
}

.rounded-card :deep(.el-card__body) {
  width: 60%;
  padding: 10px;
  margin: 0;
}

.avatar {
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name {
  font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 36px;
  overflow-wrap: break-word !important;
  color: rgba(45, 46, 47, 1);
}

.yelp_since {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  margin: 10px 0;
  font-weight: 600;
  letter-spacing: 0px;
  color: rgba(110, 112, 114, 1);
  text-align: center;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(110, 112, 114, 1);
}

.judge {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}

.judge-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-wapper {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: rgb(235, 235, 235) solid 1px;
  border-radius: 50%;
}

.judge-info {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 16px;
  color: rgb(110, 112, 114);
}

.judge-info-count {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 16px;
  color: rgb(70, 72, 73);
}
</style>
