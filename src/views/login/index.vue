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
  <a-form>
    <a-form-item required :wrapperCol="formWrapperCol">
      <a-input v-model:value="form.username" placeholder="用户名" />
    </a-form-item>
    <a-form-item required :wrapperCol="formWrapperCol">
      <a-input v-model:value="form.password" placeholder="密码" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  data() {},
  setup() {
    const form = reactive({
      username: '111',
      password: '222',
    });
    const formWrapperCol = reactive({
      xs: { span: 24, offset: 0 }, //xs不管怎样，右侧都不再有空
      sm: { span: 10, offset: 7 },
    });
    return { form, formWrapperCol };
  },
});
</script>