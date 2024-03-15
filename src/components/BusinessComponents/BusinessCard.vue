<template>
  <el-card class="rounded-card">
    <div class="card-content">
      <div class="card-image">
        <img
          style="width: 12vw; height: 12vw"
          src=""
          alt="img"
        />
      </div>
      <div class="card-text">
        <div class="card-header">
          <span>{{ data.business_details.name }}</span>
        </div>
        <div style="display: flex; align-items: center">
          <el-rate
            v-model="data.business_details.stars"
            size="large"
            :colors="['#ff643d', '#ff643d', '#ff643d']"
            disabled
          />
          &nbsp;<span style="font-weight: 600; font-size: 18px">{{
            data.business_details.stars
          }}</span
          >&nbsp;<span class="review-text"
            >({{ data.reviews.length }} reviews)</span
          >
        </div>
        <p class="cata-text">
          <span>&nbsp;$$&nbsp;·</span>&nbsp;&nbsp;<span>{{
            data.business_details.categories.split(", ")[0]
          }}</span
          >&nbsp;...
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
          >{{ data.business_details.address }}
        </div>
        <p class="time-text">
          <span
            v-if="!data.business_details.is_open"
            style="color: rgb(244, 7, 7); font-weight: bold"
            >closed</span
          >
          <span
            v-if="data.business_details.is_open"
            style="color: rgb(2, 161, 109); font-weight: bold"
            >open</span
          >
        </p>
        <div class="attr-text">
          <el-icon size="16" color="rgb(2, 161, 109)" v-if="attr.length >= 1"
            ><Check /></el-icon
          >&nbsp;{{ attr[0] }}&nbsp;
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import photos from "@/assets/photos.json";
export default {
  name: "BusinessCard",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    attr() {
      return Object.entries(JSON.parse(this.data.business_details.attributes))
        .filter(([key, value]) => value === "True")
        .map(([key, value]) => key);
    },
    imgUrl() {
      const photo = photos.find(
        (photo) => photo.business_id === this.data.business_details.business_id
      );
      return "D:/photos/AEjnOCtx34wDh5aqnSkbUA.jpg";
    },
  },
};
</script>

<style scoped>
.rounded-card {
  border-radius: 5px;
  width: 20vw;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0) !important;
}

.rounded-card :deep(.el-card__body) {
  padding: 18px;
}

.card-image {
  display: flex;
  justify-content: center;
}

.card-header {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 1vh;
}

.review-text {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  letter-spacing: 0px;
  color: rgb(110, 112, 114);
}

.cata-text {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  letter-spacing: 0px;
  color: rgb(110, 112, 114);
  line-height: 18px;
  margin: 16px 0;
}

.time-text {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  letter-spacing: 0px;
  color: rgb(110, 112, 114);
  line-height: 18px;
  margin: 16px 0;
}

.attr-text {
  display: flex;
  align-items: center;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0px;
  color: rgb(45, 46, 47);
  line-height: 18px;
  margin: 6px 0;
}
</style>
