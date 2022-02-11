import { uniqueId } from "lodash";
import {
  TreeBase as Tree,
  createTreeBaseActions as createTreeActions
} from "@xiaofei.wang/test";

const nodeSize = { width: 100, height: 40 };

const createData = b => {
  const ids = [];
  for (let i = 0; i < 2; i++) {
    ids.push(uniqueId());
  }
  return ids.map((key, index) => ({
    id: key,
    type: `type${index % 2}`,
    label: "张三" + uniqueId(),
    mode: "default",
    width: parseInt(Math.random() * 120) + 40,
    height: parseInt(Math.random() * 50) + 20,
    children: b ? createData() : []
  }));
};

const graphEvents = {
  dblclick: () => {
    console.log("graph dblclick");
    actions.adaption();
  },
  contextmenu: () => {
    console.log("graph contextmenu");
    actions.reLayout();
  }
};

const nodeEvents = {
  dblclick: (node, e) => {
    console.log("node dblclick");
    e.stopPropagation();
    node.children = createData();
    actions.reLayout();
  },
  contextmenu: () => {
    console.log("node contextmenu");
  }
};

const onGraphLayoutEnd = () => {
  console.log("布局完成");
  actions.adaption();
};

const graphData = {
  id: "a",
  type: "type0",
  label: "张三",
  mode: "default",
  ...nodeSize,
  top: createData(true),
  bottom: createData(true)
};

const actions = createTreeActions();

export default {
  components: { tree: Tree },
  data() {
    return {
      graphEvents,
      nodeEvents,
      onGraphLayoutEnd,
      graphData,
      actions,
      groupsep: 20
    };
  },
  template: `<div style="width: 100vw;height:100vh">
    <tree v-bind="$data" class="tree2"></tree>
  </div>`
};
