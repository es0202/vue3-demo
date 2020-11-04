<template>
  <a-layout>
    <a-layout-sider :width="'25%'" :style="{position:'fixed'}">
      <div class="avatar-container">
        <img class="avatar-img" src="/@/assets/img/3.jpg" alt />
        <div class="avatar-name"></div>
        <div class="avatar-slogan">裹盐赢得小狸奴</div>
      </div>
      <!-- <tags></tags> -->
    </a-layout-sider>
    <a-layout class="content-container"></a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import tags from '/@/components/tags.vue';
export default defineComponent({
  components: { tags },
  setup() {},
});
</script>
<style scoped>
.ant-layout {
  height: 100%;
  min-height: 500px;
  background-color: #f4eeff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23cca8e9' fill-opacity='0.5' font-family='Chilanka, cursive' text-anchor='middle' dominant-baseline='middle'%3EHello~%3C/text%3E%3C/svg%3E");
}
.ant-layout-sider {
  background: transparent;
  height: 100%;
}
.avatar-container {
  background: #fff;
  height: 100%;
}
.avatar-img {
  width: 40%;
  height: auto;
  border-radius: 50%;
  text-align: center;
  margin: 20px 0;
}
.content-container {
  background: #fff;
  margin-left: 27%;
}
</style>