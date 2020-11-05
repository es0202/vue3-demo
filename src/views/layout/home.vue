<template>
  <a-layout class="layout-container">
    <a-layout-header class="layout-header">
      <a-menu mode="horizontal" v-model:selectedKeys="selectedKeys1" class="header-menu">
        <a-menu-item class="menu-item" v-for="item in list" :key="item">
          <router-link :to="'/home/'+item">{{item=='login'?'Home':'Hello'}}</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="layout-content">
      <router-view></router-view>
      <!-- <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>-->
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  data() {
    return {
      list: ['login', 'hello'],
    };
  },
  setup() {
    const selectedKeys1 = ref(['1']);
    return { selectedKeys1 };
  },
});
</script>
<style scoped>
.layout-container {
  height: 100%;
  background-color: #f4eeff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23cca8e9' fill-opacity='0.5' font-family='Chilanka, cursive' text-anchor='middle' dominant-baseline='middle'%3EHello~%3C/text%3E%3C/svg%3E");
}
.layout-header {
  height: 60px;
  background-color: #cca8e9;
}
.layout-content {
  /* margin: 35px 50px; */
  background-color: transparent;
  overflow: hidden;
}

.header-menu {
  background-color: #cca8e9;
  text-align: left;
  padding: 0 20px;
  border: none;
}
.ant-menu-submenu {
  /* color:#fff; */
  border: none;
}
.ant-menu-submenu-active {
  border: none !important;
}
.ant-menu-item {
  height: 60px;
  line-height: 60px;
  border: none !important;
  padding: 0 30px;
}
.ant-menu-item a {
  color: #fff !important;
}
</style>