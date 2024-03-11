<template>
  <el-container>
    <el-header class="el-header">
      <UserHeader />
    </el-header>
    <el-main>
      <div class="main">
        <h1 class="title">Flippin Burger</h1>
        <div style="display: flex; align-items: center">
          <el-icon v-for="o in 2" :key="o" size="47" color="rgb(255, 100, 61)"
            ><StarFilled
          /></el-icon>
          <el-icon v-for="o in 3" :key="o" size="38" color="rgb(255, 100, 61)"
            ><Star
          /></el-icon>
          &nbsp;<span style="font-weight: 600; font-size: 20px">2.1</span
          >&nbsp;<span class="review-count">(114 reviews)</span>
        </div>
        <p class="cata-text">
          <span>&nbsp;$$&nbsp;·</span>&nbsp;&nbsp;<span>Fast Food</span
          >&nbsp;&nbsp;<span>American</span>
        </p>
        <div
          style="
            display: flex;
            align-items: center;
            color: rgba(110, 112, 114, 1);
          "
        >
          <el-icon size="20" color="rgb(255, 100, 61)"
            ><LocationInformation /></el-icon
          >1616 Chapala St, Ste 2
        </div>
        <p class="time-text">
          <span style="color: rgb(244, 7, 7); font-weight: bold">closed</span
          >&nbsp;until 10:30 PM
        </p>
        <div class="attr-text">
          <el-icon size="16" color="rgb(2, 161, 109)"><Check /></el-icon
          >&nbsp;OutDoor Seating&nbsp;
          <el-icon size="16" color="rgb(2, 161, 109)"><Check /></el-icon
          >&nbsp;Delivery&nbsp;
        </div>
        <el-divider />
        <baidu-map class="map" :zoom="20" :center="center" @ready="handler">
          <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
          <bm-marker
            :position="center"
            animation="BMAP_ANIMATION_BOUNCE"
          ></bm-marker>
        </baidu-map>
        <el-divider />
        <el-card class="rounded-card" v-for="i in 8" :key="i">
          <div class="head-wapper">
            <div style="display: flex; align-items: center">
              <el-avatar icon="UserFilled" size="small" />&nbsp;<span
                style="font-weight: bold"
                >User Name</span
              >
              <span
                style="display: flex; align-items: center; margin-left: 2vw"
              >
                <el-icon
                  v-for="o in 2"
                  :key="o"
                  size="28"
                  color="rgb(255, 100, 61)"
                  ><StarFilled
                /></el-icon>
                <el-icon
                  v-for="o in 3"
                  :key="o"
                  size="23"
                  color="rgb(255, 100, 61)"
                  ><Star
                /></el-icon>
              </span>
            </div>
            <span class="rev-time">Tue, 05 Mar 2013 18:45:07 GMT</span>
          </div>
          <p class="review-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div class="judge">
            <div class="judge-item">
              <div class="img-wapper">
                <img
                  src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_helpful_bulb_v2.yji-927d56e36e3a11c12e58.svg"
                  alt="useful"
                />
              </div>
              <span class="judge-info">Useful</span>&nbsp;<span
                class="judge-info-count"
                >0</span
              >
            </div>
            <div class="judge-item">
              <div class="img-wapper">
                <img
                  src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_thanks_v2.yji-1fec900fe14a2fa15c10.svg"
                  alt="cool"
                />
              </div>
              <span class="judge-info">Cool</span>&nbsp;<span
                class="judge-info-count"
                >0</span
              >
            </div>
            <div class="judge-item">
              <div class="img-wapper">
                <img
                  src="https://s3-media0.fl.yelpcdn.com/assets/public/24x24_love_this_v2.yji-e4b17143e9d097f34029.svg"
                  alt="funny"
                />
              </div>
              <span class="judge-info">Funny</span>&nbsp;<span
                class="judge-info-count"
                >0</span
              >
            </div>
          </div></el-card
        >
      </div>
      <FooterView />
    </el-main>
  </el-container>
</template>

<script>
import UserHeader from "@/components/UserComponents/UserHeader.vue";
import FooterView from "@/components/UserComponents/FooterView.vue";
export default {
  components: {
    UserHeader,
    FooterView,
  },
  data() {
    return {
      center: {
        lng: 0,
        lat: 0,
      },
    };
  },
  mounted() {
    this.center.lng = -119.711;
    this.center.lat = 34.4267;
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
    },
  },
};
</script>

<style scoped>
.main {
  padding: 0 15vw;
}

.title {
  font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 48px;
  line-height: 30px;
  font-weight: bold;
  color: #333;
}

.review-count {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  letter-spacing: 0px;
  color: rgba(110, 112, 114, 1);
}

.cata-text {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  letter-spacing: 0px;
  color: rgb(110, 112, 114);
  line-height: 20px;
  margin: 10px 0;
}

.time-text {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  letter-spacing: 0px;
  color: rgb(110, 112, 114);
  line-height: 20px;
  margin: 10px 0;
}

.attr-text {
  display: flex;
  align-items: center;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0px;
  color: rgb(45, 46, 47);
  line-height: 16px;
  margin: 10px 0;
}

.map {
  height: 600px;
}

.head-wapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-wapper {
  display: flex;
  align-items: center;
}

.rounded-card {
  border-radius: 4px;
  width: 100%;
  transition: transform 0.3s ease;
  margin: 1vh 0;
}

.rev-time {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  letter-spacing: 0px;
  color: rgb(110, 112, 114);
  line-height: 16px;
}

.review-text {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  letter-spacing: 0px;
  color: rgb(45, 46, 47);
}

.judge {
  display: flex;
  align-items: center;
}

.judge-item {
  display: flex;
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
  margin: 0 0.5vw 0 1vw;
}

.img-wapper:hover {
  cursor: pointer;
  background-color: rgb(235, 235, 235);
}

.judge-info {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 16px;
  text-align: left;
  color: rgb(110, 112, 114);
}

.judge-info-count {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 16px;
  text-align: left;
  color: rgb(110, 112, 114);
}
</style>
