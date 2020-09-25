declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: defineComponent;
  export default component;
}
interface Window{
  vm:any;
  router:any;
  store:any;
}