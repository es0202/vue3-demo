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
  width: 80%;
  box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.06);
  padding: 30px 16px;
  border-radius: 6px;
  line-height: 1;
  text-align: center;
  display: inline-block;
  margin-top: 8px; /*box-shadow边框 */
}

.ant-tag {
  border-radius: 4px;
  margin-right: 8px;
}
</style>