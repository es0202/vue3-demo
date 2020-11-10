<template>
  <a-timeline mode="alternate">
    <a-timeline-item v-for="item in itemList" :color="item.title?colors[0]:colors[1]">
      <template v-if="item.title" #dot>
        <ClockCircleOutlined style="font-size: 16px;" />
      </template>
      {{item.content}}
    </a-timeline-item>
  </a-timeline>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { ClockCircleOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    const itemList = ref([
      {
        title: '2020',
        content: '2020',
      },
      {
        title: '',
        content: 'Create a services site 2019-09-01',
      },
    ]);
    return { itemList };
  },
  components: { ClockCircleOutlined },
  data() {
    return {
      colors: ['red', 'blue'],
    };
  },
});
</script>
<style scoped>
.ant-timeline-item {
  font-size: 18px;
}
.ant-timeline-item:hover {
  color: #cca8e9 !important;
}
::v-deep(.ant-timeline-item:hover .ant-timeline-item-head) {
  color: #cca8e9 !important;
  border-color: #cca8e9 !important;
}
</style>