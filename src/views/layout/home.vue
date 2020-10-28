<template>
  <a-layout class="layout-container">
    <a-layout-header class="layout-header">
      <a-menu mode="horizontal" v-model:selectedKeys="selectedKeys1" class="header-menu">
        <a-menu-item class="menu-item" v-for="item in list" :key="item">
          <router-link :to="'/home/'+item">{{item==''?'Home':'Hello'}}</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="layout-content">
      <router-view></router-view>
      <!-- <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view> -->
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  data() {
    return {
      list: ['', 'hello'],
    };
  },
  setup() {
    const selectedKeys1 = ref(['1']);
    return { selectedKeys1 };
  },
});
</script>
<style>
.layout-container {
  height: 100%;
  background-color: #f4eeff;
}
.layout-header {
  height: 60px;
  background-color: #cca8e9;
}
.layout-content {
  margin: 35px 50px;
  background-color: #fff;
}

.header-menu {
  background-color: #cca8e9;
  text-align: left;
  padding: 0 20px;
  border: none;
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