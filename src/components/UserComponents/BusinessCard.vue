<template>
  <el-card class="rounded-card" @click="handleClick">
    <div class="card-content">
      <div class="card-image">
        <el-image
          style="width: 10vw; height: 10vw"
          :src="getRandomImageUrl()"
          alt="img"
        />
      </div>
      <div class="card-text">
        <div class="card-header">
          <span>{{ data.name }}</span>
        </div>
        <div style="display: flex; align-items: center">
          <el-rate
            v-model="data.stars"
            size="large"
            :colors="['#ff643d', '#ff643d', '#ff643d']"
            disabled
          />
          &nbsp;<span style="font-weight: 600">{{ data.stars }}</span
          >&nbsp;<span class="review-text"
            >({{ data.review_count }} reviews)</span
          >
        </div>
        <p class="cata-text">
          <span>&nbsp;$$&nbsp;·</span>&nbsp;&nbsp;<span>{{
            data.categories.split(", ")[0]
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
          >{{ data.address }}
        </div>
        <p class="time-text">
          <span
            v-if="!data.is_open"
            style="color: rgb(244, 7, 7); font-weight: bold"
            >closed</span
          >
          <span
            v-if="data.is_open"
            style="color: rgb(2, 161, 109); font-weight: bold"
            >open</span
          >&nbsp;&nbsp;&nbsp;{{ Math.round(data.distance) }}m away
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
  props: {
    data: {
      type: Object,
    },
  },
  computed: {
    attr() {
      if (this.data.attributes !== "NULL")
        return Object.entries(JSON.parse(this.data.attributes))
          .filter(([key, value]) => value === "True")
          .map(([key, value]) => key);
      else return ["No attributes available"];
    },
  },
  methods: {
    handleClick() {
      this.$router.push({
        name: "BusinessDetails",
        params: { business_id: this.data.business_id },
      });
    },
    getRandomImageUrl() {
      const randomIndex = Math.floor(Math.random() * photos.length);
      const photo = photos[randomIndex];
      this.loading = false;
      return import.meta.env.VITE_APP_PHOTO_URL + "/" + photo.photo_id + ".jpg";
    },
  },
};
</script>

<style scoped>
.rounded-card {
  border-radius: 10px;
  width: 30vw;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.rounded-card :deep(.el-card__body) {
  padding: 18px;
}

.rounded-card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background-color: #fff9f9;
}

.card-content {
  display: flex;
}

.card-header {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 1vh;
}

.card-image {
  flex: 1;
}

.card-text {
  flex: 2;
  margin-left: 1vw;
}

.review-text {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  letter-spacing: 0px;
  color: rgba(110, 112, 114, 1);
}

.cata-text {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  letter-spacing: 0px;
  color: rgb(110, 112, 114);
  line-height: 14px;
  margin: 6px 0;
}

.time-text {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  letter-spacing: 0px;
  color: rgb(110, 112, 114);
  line-height: 14px;
  margin: 6px 0;
}

.attr-text {
  display: flex;
  align-items: center;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0px;
  color: rgb(45, 46, 47);
  line-height: 12px;
  margin: 6px 0;
}
</style>
