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
          >&nbsp;<span class="review-text">(114 reviews)</span>
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
    this.center.lng = -75.1555641;
    this.center.lat = 39.9555052;
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

.review-text {
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
</style>
