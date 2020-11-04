<template>
  <div class="tags-container">
    <a-tag color="pink">前端</a-tag>
    <a-tag color="green">音乐</a-tag>
    <a-tag color="purple">生活</a-tag>
    <a-tag color="blue">其他</a-tag>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {},
});
</script>
<style>
.tags-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  overflow: hidden;
  box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
  padding: 30px 16px;
  border-radius: 6px;
}

.ant-tag{
  border-radius: 4px;
  margin: 0 8px 8px 0;
}
</style>