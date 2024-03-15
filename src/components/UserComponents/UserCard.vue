<template>
  <el-card class="rounded-card">
    <div class="avatar">
      <el-avatar :src="avatarUrl" :size="80" />
    </div>
    <div class="content">
      <div class="name">{{ data.user_name }}</div>
      <div class="yelp_since">{{ data.user_yelping_since.split(" ")[0] }}</div>
      <div class="info">
        <el-icon color="rgb(110, 112, 114)"><User /></el-icon
        >{{ data.user_fans }}
        <el-icon color="rgb(110, 112, 114)"><EditPen /></el-icon
        >{{ data.user_review_count }}
        <el-icon color="rgb(110, 112, 114)"><StarFilled /></el-icon
        >{{ data.user_average_stars }}
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
        <div class="judge-info-count">{{ data.user_useful }}</div>
      </div>
      <div class="judge-item">
        <div class="img-wapper">
          <img
            src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_thanks_v2.yji-1fec900fe14a2fa15c10.svg"
            alt="cool"
          />
        </div>
        <div class="judge-info">Cool</div>
        <div class="judge-info-count">{{ data.user_cool }}</div>
      </div>
      <div class="judge-item">
        <div class="img-wapper">
          <img
            src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_love_this_v2.yji-e4b17143e9d097f34029.svg"
            alt="funny"
          />
        </div>
        <div class="judge-info">Funny</div>
        <div class="judge-info-count">{{ data.user_funny }}</div>
      </div>
    </div>
    <div class="button-container">
      <el-button>Add friend+</el-button>
    </div>
    <div class="tag">
      <el-tag type="info" size="large" round
        >hot {{ data.user_compliment_hot }}</el-tag
      >
      <el-tag type="info" size="large" round
        >more {{ data.user_compliment_more }}</el-tag
      >
      <el-tag type="info" size="large" round
        >profile {{ data.user_compliment_profile }}</el-tag
      >

      <el-tag type="info" size="large" round
        >cute {{ data.user_compliment_cute }}</el-tag
      >
    </div>
    <div class="tag">
      <el-tag type="info" size="large" round
        >list {{ data.user_compliment_list }}</el-tag
      >
      <el-tag type="info" size="large" round
        >funny {{ data.user_compliment_funny }}</el-tag
      >
      <el-tag type="info" size="large" round
        >cool {{ data.user_compliment_cool }}</el-tag
      >
      <el-tag type="info" size="large" round
        >plain {{ data.user_compliment_plain }}</el-tag
      >
    </div>
    <div class="tag">
      <el-tag type="info" size="large" round
        >writer {{ data.user_compliment_writer }}</el-tag
      >
      <el-tag type="info" size="large" round
        >note {{ data.user_compliment_note }}</el-tag
      >
      <el-tag type="info" size="large" round
        >photos {{ data.user_compliment_photos }}</el-tag
      >
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
  computed: {
    avatarUrl() {
      const randomId = Math.floor(Math.random() * (10352 - 10342 + 1)) + 10342;
      return `http://118.113.19.161:8180/secure/useravatar?avatarId=${randomId}`;
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
  width: 100%;
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
  align-items: center;
  color: rgba(110, 112, 114, 1);
  width: 60%;
  margin: auto;
  justify-content: space-between;
}

.judge {
  width: 80%;
  margin: 10px auto;
  display: flex;
  align-items: center;
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

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 30px 0;
}

.tag {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
}
</style>
