<template>
  <el-container>
    <el-aside width="auto">
      <AsideVue :is-collapse="isCollapse" :active-index="activeIndex" />
    </el-aside>
    <el-container>
      <el-header>
        <el-icon class="collapse" v-if="!isCollapse" :size="35">
          <Fold @click="goCollapse" />
        </el-icon>
        <el-icon class="collapse" v-if="isCollapse" :size="35">
          <Expand @click="goCollapse" />
        </el-icon>
        <TabTime />
      </el-header>
      <el-main>

      </el-main>
    </el-container>
  </el-container>
</template>
  
<script>
import AsideVue from "@/components/AsideVue.vue";
import TabTime from "@/components/TabTime.vue";

export default {
  components: {
    AsideVue,
    TabTime,
  },
  data() {
    return {
      isCollapse: false,
      activeIndex: this.$route.path,
      page3_data: [1200, 950, 1000, 1150, 2010, 1550, 1110],
    };
  },
  mounted() {
    window.onresize = () => {
      this.isCollapse = document.documentElement.clientWidth <= 1100;
    };
    document.body.style.overflow = "hidden";
  },
  updated() {
    this.activeIndex = this.$route.path
  },
  methods: {
    goCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>
  
<style scoped>
.page1 {
  height: 150px;
  display: flex;
  justify-content: space-between;
}

.page1_1 {
  width: 32%;
  display: block;
  border: 2px solid var(--theme--color);
  border-radius: 15px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.page1_1:hover {
  transform: scale(1.01);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.page2 {
  height: 300px;
  display: flex;
  justify-content: space-between;
}

.page2_1 {
  width: 24%;
}

.page3 {
  height: 400px;
  display: flex;
  justify-content: space-between;
}

.page3_1 {
  width: 32%;
  height: 100%;
  border: 2px solid var(--theme--color);
  border-radius: 15px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.page3_1:hover {
  transform: scale(1.01);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.page4 {
  margin-top: 10px;
  height: 500px;
  display: flex;
  justify-content: space-between;
}

.page4_1 {
  width: 49%;
  height: 100%;
  border: 2px solid var(--theme--color);
  border-radius: 15px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.page4_1:hover {
  transform: scale(1.01);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.page4_2 {
  width: 49%;
  height: 100%;
  border: 2px solid var(--theme--color);
  border-radius: 15px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.page4_2:hover {
  transform: scale(1.01);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.page5 {
  margin-top: 20px;
  height: 600px;
  border: 2px solid var(--theme--color);
  border-radius: 15px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.page5:hover {
  transform: scale(1.01);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>