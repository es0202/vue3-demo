<template>
  <a-alert type="error" :message="errormsg" v-if="errormsg !=''" banner />
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
import { register } from './api/login';
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
    const errormsg = ref('');
    interface Res {
      Code: number;
      Msg: string;
    }
    const handler = function (val: string) {
      // let test: string[];
      // test = myarr.value;
      // console.log(test);
      // myarr.value
      myarr.value.push(val);
      console.log('myarrvalue:' + Object.prototype.toString.apply(myarr.value));
    };
    // register({ url: '/user/register', method: 'post', data: { username: "admin2", password: '123' } })
    //   .then((res: Res) => console.log(res.Msg))
    //   .catch((err: any) => {
    //     errormsg.value = err;
    //     console.log('err:' + err);
    //   });
    return { myarr, handler, errormsg };
  },
  components: {
    // Test,
    HelloWorld,
  },
};
</script>