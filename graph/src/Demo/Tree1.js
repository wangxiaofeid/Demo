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
    console.log("11111");
    console.log("graph contextmenu");
    // actions.reLayout()
  }
};

const nodeEvents = {
  dblclick: (node, e) => {
    console.log("node dblclick");
    e.stopPropagation();
    node.children = createData();
    actions.reLayout();
  },
  contextmenu: (node, e) => {
    e.stopPropagation();
    console.log("node contextmenu", node);
    // node : {
    //   children: Array(0)
    //   height: 29
    //   id: "10"
    //   label: "张三12"
    //   mode: "default"
    //   type: "type0"
    //   width: 144
    //   x: -365
    //   y: -117.75
    //   _nodeSize: (2) [39, 194]
    // }
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
  left: createData(true),
  right: createData(true)
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
    <tree v-bind="$data" class="tree1"></tree>
  </div>`
};
