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
        <a-form-item v-bind="validateInfos.username">
          <a-input v-model:value="form.username" placeholder="用户名" />
        </a-form-item>
        <a-form-item v-bind="validateInfos.password">
          <a-input v-model:value="form.password" placeholder="密码" />
        </a-form-item>
        <a-form-item :wrapper-col="submitWrapCol">
          <a-button type="primary" block @click="onSubmit">Submit</a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>
    <a-tab-pane key="loginup" tab="注册">
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="昵称" v-bind="regValidataInfos.username">
          <a-input v-model:value="registerForm.username" />
        </a-form-item>
        <a-form-item label="密码" v-bind="regValidataInfos.password">
          <a-input v-model:value="registerForm.password" @blur="blurHandler" />
        </a-form-item>
        <a-form-item label="确认密码" v-bind="regValidataInfos.repassword">
          <a-input v-model:value="registerForm.repassword" @blur="repeatHandler" />
        </a-form-item>
        <a-form-item :wrapper-col="itemWrapCol">
          <a-button type="primary" @click="registerHandler" block>注册</a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import { ref, defineComponent, reactive, toRefs, toRaw, onUnmounted } from 'vue';
import { useForm } from '@ant-design-vue/use';
import { message } from 'ant-design-vue';
import { login, register } from '/@/api/login';
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
    //!tab切换回调
    const callback = (val: string) => {
      console.log(val);
    };
    //!登录
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
      ],
    });
    //表单校验
    const { validate, validateInfos } = useForm(form, rulesForm);
    const onSubmit = (e: Event) => {
      e.preventDefault();
      validate()
        .then(() => {
          login(form).then((data: ResultModel) => {
            if (data.Code == 0) {
              message.success(data.Msg);
              router.push({
                path: '/home/hello',
              });
            } else {
              message.error(data.Msg);
            }
          });
        })
        .catch((err) => {
          console.log('error', err.message);
        });
    };
    //!注册
    const registerForm = reactive({
      username: '',
      password: '',
      repassword: '',
    });
    const rulesRegForm = reactive({
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
      repassword: [
        {
          required: true,
          message: 'Please repeat password',
        },
        {
          trigger: 'blur',
          validator: async (rule: any, value: any) => {
            if (registerForm.repassword == registerForm.password) {
              return Promise.resolve();
            } else {
              return Promise.reject('The password entered twice is inconsistent.');
            }
          },
        },
      ],
    });
    //再次执行useForm和第一次的不一样
    const regUseForm = useForm(registerForm, rulesRegForm);
    const regValidataInfos = regUseForm.validateInfos;
    const regValidate = regUseForm.validate;
    //密码失焦校验
    const blurHandler = (e: Event) => {
      regValidate('password', { trigger: 'blur' })
        .then(() => {
          console.log(toRaw(rulesForm));
        })
        .catch((err) => {
          console.log('error', err);
        });
    };
    //重复密码失焦校验
    const repeatHandler = (e: Event) => {
      regValidate('repassword', { trigger: 'blur' })
        .then(() => {
          console.log(toRaw(rulesRegForm));
        })
        .catch((err) => {
          console.log('error', err);
        });
    };
    const registerHandler = (e: Event) => {
      e.preventDefault();
      regValidate()
        .then(() => {
          register(registerForm).then((data: ResultModel) => {
            if (data.Code == 0) {
              message.success(data.Msg);
              router.push({
                path: '/home/hello',
              });
            } else {
              message.error(data.Msg);
            }
          });
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
      regValidataInfos,
      blurHandler,
      repeatHandler,
      registerHandler,
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