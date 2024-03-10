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
            <span>Business Name</span>
          </div>
          <p v-for="o in 3" :key="o" class="text item">
            {{ "List item " + o }}
          </p>
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
  font-size: 1.5em;
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
</style>
