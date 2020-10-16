//! svg-sprite-loader 支持问题
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue';
export default defineComponent({
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
  setup(props) {
    const iconName = computed(() => {
      return `#icon-${props.iconClass}`;
    });
    const svgClass = computed(() => {
      if (props.className) {
        return 'svg-icon ' + props.className;
      } else {
        return 'svg-icon';
      }
    });

    return { iconName,svgClass };
  },
});
</script>