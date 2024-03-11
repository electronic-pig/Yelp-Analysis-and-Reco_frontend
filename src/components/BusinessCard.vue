<template>
  <div class="card-container">
    <el-card class="rounded-card" v-for="i in 3" :key="i">
      <div class="card-content">
        <div class="card-image">
          <img
            style="width: 100%"
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            alt="description"
          />
        </div>
        <div class="card-text">
          <div class="card-header">
            <span>Hi-Way Burger & Fry</span>
          </div>
          <div style="display: flex; align-items: center">
            <el-icon v-for="o in 2" :key="o" size="28" color="rgb(255, 100, 61)"
              ><StarFilled
            /></el-icon>
            <el-icon v-for="o in 3" :key="o" size="23" color="rgb(255, 100, 61)"
              ><Star
            /></el-icon>
            &nbsp;<span style="font-weight: 600">2.1</span>&nbsp;<span
              class="review-text"
              >(114 reviews)</span
            >
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
        </div>
      </div>
    </el-card>
  </div>
</template>

<script></script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  margin: 0 2vw;
}

.rounded-card {
  border-radius: 10px;
  width: 30vw;
  cursor: pointer;
  transition: transform 0.3s ease;
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
  margin-left: 2vw;
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
