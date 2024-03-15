<template>
  <el-container v-if="detailsDataloaded">
    <el-header class="el-header">
      <el-button type="primary" @click="goBack">返回</el-button>
      <UserHeader />
    </el-header>
    <el-main>
      <div class="main">
        <h1 class="title">{{ this.details.business.name }}</h1>
        <div style="display: flex; align-items: center">
          <el-icon
            v-for="o in Math.round(this.details.business.stars)"
            :key="o"
            size="47"
            color="rgb(255, 100, 61)"
            ><StarFilled
          /></el-icon>
          <el-icon
            v-for="o in 5 - Math.round(this.details.business.stars)"
            :key="o"
            size="38"
            color="rgb(255, 100, 61)"
            ><Star
          /></el-icon>
          &nbsp;<span style="font-weight: 600; font-size: 20px">{{
            this.details.business.stars
          }}</span
          >&nbsp;<span class="review-count"
            >({{ this.details.review.length }} reviews)</span
          >
        </div>
        <p class="cata-text">
          <span>&nbsp;$$&nbsp;·</span>&nbsp;&nbsp;{{
            this.details.business.categories
          }}
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
          >{{ this.details.business.address }} ,
          {{ this.details.business.city }} ,
          {{ this.details.business.state }}&nbsp;&nbsp;
          {{ this.details.business.postal_code }}
        </div>
        <div class="time-text">
          <span
            v-if="!this.details.business.is_open"
            style="color: rgb(244, 7, 7); font-weight: bold"
            >closed</span
          >
          <span
            v-if="this.details.business.is_open"
            style="color: rgb(2, 161, 109); font-weight: bold"
            >open</span
          >
          <div>
            {{ this.details.business.hours.replace(/\\|"|{|}/g, "") }}
          </div>
        </div>
        <div class="attr-text">
          <span
            class="attr"
            v-for="(value, key) in JSON.parse(this.details.business.attributes)"
            :key="key"
            :v-if="value"
          >
            <el-icon size="16" color="rgb(2, 161, 109)"><Check /></el-icon
            >&nbsp;{{ key }}&nbsp;
          </span>
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
        <el-card
          class="rounded-card"
          :class="
            getBgClass(this.details.review[i + this.pagenum - 2].sentiment)
          "
          v-for="i in 8"
          :key="i"
        >
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
                  v-for="o in this.details.review[i + this.pagenum - 2]
                    .rev_stars"
                  :key="o"
                  size="28"
                  color="rgb(255, 100, 61)"
                  ><StarFilled
                /></el-icon>
                <el-icon
                  v-for="o in 5 -
                  this.details.review[i + this.pagenum - 2].rev_stars"
                  :key="o"
                  size="23"
                  color="rgb(255, 100, 61)"
                  ><Star
                /></el-icon>
              </span>
            </div>
            <span class="rev-time">{{
              this.details.review[i + this.pagenum - 2].rev_timestamp
            }}</span>
          </div>
          <p class="review-text">
            {{ this.details.review[i + this.pagenum - 2].rev_text }}
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
                >{{
                  this.details.review[i + this.pagenum - 2].rev_useful
                }}</span
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
                >{{ this.details.review[i + this.pagenum - 2].rev_coll }}</span
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
                >{{ this.details.review[i + this.pagenum - 2].rev_funny }}</span
              >
            </div>
          </div></el-card
        >
      </div>
      <div class="pagination-container">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
        />
      </div>
      <FooterView />
    </el-main>
  </el-container>
</template>

<script>
import request from "@/utils/request";
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
      detailsDataloaded: false,
      details: {},
      total: 0,
      pagenum: 1,
    };
  },
  mounted() {
    const loadingInstance = this.$loading({ text: "努力加载中..." });
    request({
      url: "/recommend/details?business_id=" + this.$route.params.business_id,
      method: "get",
    })
      .then((response) => {
        this.details = response;
        this.total = this.details.review.length;
        this.pagenum = 1;
        this.center.lng = this.details.business.longitude;
        this.center.lat = this.details.business.latitude;
        this.detailsDataloaded = true;
      })
      .finally(() => {
        loadingInstance.close();
      });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    handler({ BMap, map }) {
      console.log(BMap, map);
    },
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
    },
    getBgClass(sentiment) {
      if (sentiment === 0) {
        return "bg-color-negative";
      } else if (sentiment === 1) {
        return "bg-color-positive";
      } else if (sentiment === 2) {
        return "bg-color-neutral";
      }
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
  flex-wrap: wrap;
  align-items: center;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0px;
  color: rgb(45, 46, 47);
  line-height: 16px;
  margin: 10px 0;
}

.attr {
  display: flex;
  align-items: center;
  flex: 1 0 33.33%;
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

.bg-color-positive {
  background-color: #f0f9eb;
}

.bg-color-negative {
  background-color: #fef0f0;
}

.bg-color-nuetral {
  background-color: #c8c9cc;
}

.pagination-container {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
</style>
