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
  <a-tabs class="tab-container" @change="callback">
    <a-tab-pane key="login" tab="登录">
      <a-form ref="validateForm" :wrapperCol="formWrapperCol">
        <a-form-item required v-bind="validateInfos.username">
          <a-input v-model:value="form.username" placeholder="用户名" />
        </a-form-item>
        <a-form-item v-bind="validateInfos.password">
          <a-input v-model:value="form.password" @blur="blurHandler" placeholder="密码" />
        </a-form-item>
        <a-form-item :wrapper-col="submitWrapCol">
          <a-button type="primary" block @click="onSubmit">Submit</a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>
    <a-tab-pane key="loginup" tab="注册">
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item required label="昵称" name="regName">
          <a-input v-model:value="registerForm.username" />
        </a-form-item>
        <a-form-item required label="密码" name="regPass">
          <a-input v-model:value="registerForm.password" />
        </a-form-item>
        <a-form-item required label="确认密码" name="rePass">
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
import { ref, defineComponent, reactive, toRefs, toRaw } from 'vue';
import { useForm } from '@ant-design-vue/use';
import { message } from 'ant-design-vue';
import { login } from '/@/api/login';
import { useRouter } from 'vue-router';
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
        offset: 9,
      },
      submitWrapCol: {
        span: 4,
        offset: 10,
      },
      formWrapperCol: {
        span: 12,
        offset: 6,
      },
    };
  },
  setup() {
    //接口返回数据定义
    interface ResultModel {
      Code: number;
      Msg: string;
    }
    const router = useRouter();
    const form = reactive({
      username: '',
      password: '',
    });
    const rulesForm = reactive({
      username: [
        {
          required: true,
          message: 'Please input username',
        },
      ],
      password: [
        {
          required: true,
          message: 'Please input password',
        },
        { min: 3, max: 10, trigger: 'blur', required: true, message: 'Length should be 3 to 10' },
      ],
    });
    const registerForm = reactive({
      username: '',
      password: '',
      repassword: '',
    });
    const callback = (val: string) => {
      console.log(val);
    };
    //表单校验
    const { validate, validateInfos } = useForm(form, rulesForm);
    const onSubmit = (e: Event) => {
      e.preventDefault();
      validate()
        .then(() => {
          login({
            url: '/user/login',
            data: form,
            method: 'post',
          }).then((data: ResultModel) => {
            if (data.Code == 0) {
              message.success(data.Msg);
              router.push({
                path: '/home/hello',
              });
            }
          });
        })
        .catch((err) => {
          console.log('error', err);
        });
    };
    //密码失焦校验
    const blurHandler = (e: Event) => {
      validate('password', { trigger: 'blur' })
        .then(() => {
          console.log(toRaw(rulesForm));
        })
        .catch((err) => {
          console.log('error', err);
        });
    };
    return {
      form,
      callback,
      registerForm,
      onSubmit,
      validateInfos,
      blurHandler,
    };
  },
});
</script>
<style>
.ant-form-explain,
.ant-tabs-nav-wrap {
  text-align: left !important;
}
.tab-container {
  width: 60%;
  margin: auto;
  height: 400px;
}
</style>