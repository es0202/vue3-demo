<template>
  <a-carousel autoplay>
    <img class="carousel-img" src="/@/assets/img/1.jpg" alt />
    <img class="carousel-img" src="/@/assets/img/2.jpg"  alt />
    <img class="carousel-img" src="/@/assets/img/3.jpg" alt />
  </a-carousel>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
<style>
.ant-carousel{
  height: 100%;
}
.ant-carousel div{
  height: 100%;
}
.ant-carousel .slick-slider {
  text-align: center;
  height: 100%;
  min-height: 400px;
  background: #f4eeff;
  overflow: hidden;
}
.carousel-img{
  height: 100%;
  width: auto !important;
  text-align: center;
}
</style>