<template>
  <!--可以有多个节点，不用父div包裹-->
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" v-model:arr="myarr.value" @update:arr="handler" /> -->
  <!-- <div>{{myarr.toString()}}</div> -->
  <router-view></router-view>
  <!-- <Test></Test> -->
</template>

<script lang="ts">
// import Test from './test'
import HelloWorld from './components/HelloWorld.vue';
import { reactive, ref } from 'vue';
export default {
  name: 'App',
  // data(){
  //   return {
  //     myarr:['1']
  //   }
  // },
  setup() {
    const myarr = ref(['1']);
    const handler = function (val: string) {
      // let test: string[];
      // test = myarr.value;
      // console.log(test);
      // myarr.value
      myarr.value.push(val)
      console.log('myarrvalue:' + Object.prototype.toString.apply(myarr.value));
    };
    return { myarr, handler };
  },
  components: {
    // Test,
    HelloWorld,
  },
};
</script>