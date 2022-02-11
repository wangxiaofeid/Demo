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
  left: createData(true),
  right: createData(true)
};

export function getPath({ source, target, type }) {
  const { x: sx, y: sy, width: sWidth, height: sHeight } = source;
  const { x: tx, y: ty, width: tWidth, height: tHeight } = target;
  let startX = 0,
    startY = 0,
    endX = 0,
    endY = 0;
  if (type === "left") {
    [startX, startY, endX, endY] = [
      sx,
      sy + sHeight / 2,
      tx + tWidth,
      ty + tHeight / 2
    ];
  } else if (type === "right") {
    [startX, startY, endX, endY] = [
      sx + sWidth,
      sy + sHeight / 2,
      tx,
      ty + tHeight / 2
    ];
  } else if (type === "top") {
    [startX, startY, endX, endY] = [
      sx + sWidth / 2,
      sy,
      tx + tWidth / 2,
      ty + tHeight
    ];
  } else if (type === "bottom") {
    [startX, startY, endX, endY] = [
      sx + sWidth / 2,
      sy + sHeight,
      tx + tWidth / 2,
      ty
    ];
  }
  if (type === "left" || type === "right") {
    const px = (startX + endX) / 2;
    return `M${startX},${startY} C ${px},${startY} ${px},${endY} ${endX},${endY}`;
  } else {
    const py = (startY + endY) / 2;
    return `M${startX},${startY} C ${startX},${py} ${endX},${py} ${endX},${endY}`;
  }
}

const renderEdge = {
  props: {
    parentNode: {
      type: Object
    },
    node: {
      type: Object
    },
    treeType: {
      type: String
    }
  },
  computed: {
    d: function() {
      return getPath({
        source: this.parentNode,
        target: this.node,
        type: this.treeType
      });
    }
  },
  template:
    '<path class="path" :d="d" fill="#ff0000" marker-end="url(#sjx)"></path>'
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
      groupsep: 20,
      renderEdge
    };
  },
  template: `<div style="width: 100vw;height:100vh">
    <tree v-bind="$data" class="tree3">
      <defs>
        <marker
          id="sjx"
          markerWidth="30"
          markerHeight="30"
          refX="7"
          refY="4"
          orient="auto"
          viewBox="0 0 30 30"
          markerUnits="userSpaceOnUse"
        >
          <path
            d="M0,0 L0,8 L8,4 L0,0"
            style="fill: 'rgb(204, 204, 204)', stroke-width: 0"
          ></path>
        </marker>
      </defs>
    </tree>
  </div>`
};
