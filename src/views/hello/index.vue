<template>
  <div class="background-img"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
<style scoped>
.background-img {
  height: 100%;
  width: auto;
  background-image: url('/src/assets/img/3.jpg');
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
}
</style>