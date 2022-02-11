import { uniqueId } from "lodash";
import {
  ForceBase as Force,
  createForceBaseActions as createForceActions
} from "@xiaofei.wang/test";

const actions = createForceActions();
const nodeEvents = {
  click: () => {
    console.log("node click");
  },
  dblclick: (node, e) => {
    console.log("node dblclick");
    e.stopPropagation();
    const thisNode = { ...node.backupData };
    const ids = [];
    for (let i = 0; i < 10; i++) {
      ids.push(uniqueId());
    }
    actions.addData({
      nodes: [
        thisNode,
        ...ids.map((key, index) => {
          return {
            id: key,
            type: `type${index % 4}`,
            label: `张三${key}`,
            nodeSize: 60,
            mode: "default"
          };
        })
      ],
      edges: ids.map(key => ({
        id: "a_" + key,
        target: key,
        source: thisNode.id,
        type: "friend",
        label: "好友",
        strokeWidth: 1
      }))
    });
  }
};

const graphData = {
  nodes: [
    {
      id: "a",
      type: "type0",
      label: "张三",
      nodeSize: 60,
      mode: "default"
    },
    {
      id: "b",
      type: "type1",
      label: "李四",
      nodeSize: 80,
      mode: "default"
    },
    {
      id: "c",
      type: "type1",
      label: "王五",
      nodeSize: 80,
      mode: "default"
    }
  ],
  edges: [
    {
      id: "a_b",
      target: "a",
      source: "b",
      type: "friend",
      label: "好友",
      strokeWidth: 1
    },
    {
      id: "a_ff",
      target: "a",
      source: "b",
      type: "friend",
      label: "好友2",
      strokeWidth: 3
    },
    {
      id: "a_c",
      target: "c",
      source: "b",
      type: "friend",
      label: "好友2",
      strokeWidth: 3
    }
  ]
};

const Edge = {
  props: ["edge"],
  template: `<g>
    <path
      key="path"
      class="path"
      :d="path.d"
      :stroke-width="edge._strokeWidth || 1"
      marker-end="url(#sjx)"
    />
    <text key="edgeText" class="edgeText" v-bind="path.textPoint" :transform="path.textTransform">
      {{edge.label}}
    </text>
  </g>`,
  computed: {
    path: function() {
      return this.edge.getPath();
    }
  }
};

export default {
  components: { force: Force },
  data() {
    return {
      nodeEvents,
      graphData,
      actions,
      renderEdge: Edge,
      layout: "tree"
    };
  },
  template: `<div style="width:100vw;height:100vh">
    <force v-bind="$data" class="demo4">
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
    </force>
  </div>`
};
