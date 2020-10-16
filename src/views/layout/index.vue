<template>
  <div class="container">
    <div class="menu-wrapper">
      <a-menu id="dddddd" style="width: 100%" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" @click="handleClick">
        <a-sub-menu key="sub1" @titleClick="titleClick">
          <template v-slot:title>
            <span>
              <MailOutlined />
              <span>Navigation One</span>
            </span>
          </template>
          <a-menu-item-group key="g1">
            <template v-slot:title>
              <QqOutlined />
              <span>Item 1</span>
            </template>
            <a-menu-item key="1">Option 1</a-menu-item>
            <a-menu-item key="2">Option 2</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group key="g2" title="Item 2">
            <a-menu-item key="3">Option 3</a-menu-item>
            <a-menu-item key="4">Option 4</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu key="sub2" @titleClick="titleClick">
          <template v-slot:title>
            <span>
              <AppstoreOutlined />
              <span>Navigation Two</span>
            </span>
          </template>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="sub4">
          <template v-slot:title>
            <span>
              <SettingOutlined />
              <span>Navigation Three</span>
            </span>
          </template>
          <a-menu-item key="9">Option 9</a-menu-item>
          <a-menu-item key="10">Option 10</a-menu-item>
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="partial-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, watchEffect, toRefs, isReactive, ref } from 'vue';
export default defineComponent({
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    // const openKeys = reactive(['sub1', 'sub2', 'sub4']);
    // const selectedKeys = reactive(['1']);

    //? ref可构造响应式数组
    const openKeys = ref(['sub1']);
    const selectedKeys = ref(['1']);

    const state = reactive({
      openKeys: ['sub1'],
      selectedKeys: ['1'],
    });
    watchEffect(() => {
      console.log('openKeys', state);
    });
    function handleClick(e: Event) {
      console.log('click', e);
    }
    function titleClick(e: Event) {
      console.log('titleClick', e);
    }

    return {
      //!不是响应式的数组
      openKeys,
      selectedKeys,
      handleClick,
      titleClick,
      // ...toRefs(state),
    };
  },
});
</script>
<style scoped>
.container {
  display: flex;
  height: 100%;
}
.menu-wrapper {
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  width: 270px;
  flex: 0 0 270px;
}
.partial-wrapper {
  flex: 1;
}
</style>
