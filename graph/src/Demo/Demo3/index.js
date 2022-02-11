import { ForceBase as Force } from "@xiaofei.wang/test";
import graphData from "./mock";

export default {
  components: { force: Force },
  data() {
    return {
      isFixed: true,
      canDrag: false,
      graphData
    };
  },
  template: `<div style="width:100vw;height:100vh">
    <force v-bind="$data" class="demo3"></force>
  </div>`
};
