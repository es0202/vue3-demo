<template>
  <h1>{{ msg }}</h1>
  <button @click="handler">count is: {{ state.name }}</button>
  <button @click="state.count++">count is: {{ state.count }}</button>

  <!-- <button @click="count++">count is: {{ count }}</button> -->
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watchEffect } from 'vue';
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
    arr: Array,
  },
  // data() {
  //   return {
  //     count: 0
  //   }
  // }
  setup(prop,{ emit }) {
    //保持响应式
    // const count = ref(0);
    // return {count}

    const state = reactive({ count: 0, name: '' });
    watchEffect(
      () => {
        console.log(state.count);
        console.log(state.name);
        emit("update:arr",state.count)
      },
      {
        flush: 'post',
      }
    );
    function handler() {
      state.count++;
      state.name += 's';
    }
    //不能解构，若要渲染时直接访问count需要调用toRefs API
    // return toRefs(state)
    //或者直接返回reactive的对象，并在渲染时访问state.count

    return { state, handler };
  },
});
</script>
