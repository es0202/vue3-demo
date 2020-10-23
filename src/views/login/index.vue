<!--import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  setup() {
    const form = reactive({ username: '', password: '' })
    const formWrapperCol = reactive({
      xs: { span: 24, offset: 0 }, //xs不管怎样，右侧都不再有空
      sm: { span: 10, offset: 7 },
    })
    return () => {
      console.log(formWrapperCol)
      return(
      <a-form wrapperCol={formWrapperCol}>
        <a-form-item required>
          <a-input v-model={form.username} placeholder="用户名" />
        </a-form-item>
        <a-form-item required>
          <a-input v-model={form.password} placeholder="密码" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary"> Submit </a-button>
        </a-form-item>
      </a-form>
    )}
  },
})-->
<template>
  <a-tabs @change="callback">
    <a-tab-pane key="login" tab="登录">
      <a-form :rules="formRules" :wrapperCol="formWrapperCol">
        <a-form-item required name="username">
          <a-input v-model:value="form.username" placeholder="用户名" />
        </a-form-item>
        <a-form-item required name="password">
          <a-input v-model:value="form.password" placeholder="密码" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" >Submit</a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>
    <a-tab-pane key="loginup" tab="注册">
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item required label="昵称">
          <a-input v-model:value="registerForm.username" />
        </a-form-item>
        <a-form-item required label="密码">
          <a-input v-model:value="registerForm.password" />
        </a-form-item>
        <a-form-item required label="确认密码">
          <a-input v-model:value="registerForm.repassword" />
        </a-form-item>
        <a-form-item :wrapper-col="itemWrapCol">
          <a-button type="primary" block>注册</a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  data() {
    return {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 10,
      },
      itemWrapCol: {
        span: 6,
        offset: 8,
      },
      formWrapperCol: {
        span: 12,
        offset: 6,
      },
      formRules:{

      }
    };
  },
  setup() {
    const form = reactive({
      username: 'admin',
      password: '111',
    });
    const registerForm = reactive({
      username: '',
      password: '',
      repassword: '',
    });
    const callback = (val: string) => {
      console.log(val);
    };
    return { form, callback, registerForm };
  },
});
</script>