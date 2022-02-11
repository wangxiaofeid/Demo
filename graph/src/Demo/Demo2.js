import { uniqueId, forEach } from "lodash";
import {
  ForceBase as Force,
  createForceBaseActions as createForceActions
} from "@xiaofei.wang/test";
import "./index.css";

const actions = createForceActions();
const regionEvents = {
  brushStart: point => {
    console.log("brushStart", point);
  },
  brushMove: point => {
    console.log("brushMove", point);
  },
  brushEnd: (point, offset) => {
    forEach(actions.nodes, node => {
      const isInclude =
        offset[0][0] <= node.x &&
        node.x < offset[1][0] &&
        offset[0][1] <= node.y &&
        node.y < offset[1][1];
      if (isInclude) {
        node.setMode("highlight");
      }
    });
  },
  brushOffset: offset => {
    console.log("brushOffset", offset);
  }
};

const graphEvents = {
  click: () => {
    console.log("graph click");
    forEach(actions.nodes, node => {
      node.setMode("default");
    });
  },
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
  click: (node, e) => {
    console.log("node click", node, e);
  },
  dblclick: (node, e) => {
    console.log("node dblclick", node, e);
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
  },
  contextmenu: (node, e) => {
    console.log("node contextmenu", node, e);
  }
};

const edgeEvents = {
  click: (edge, e) => {
    console.log("edge click", edge, e);
  },
  dblclick: (edge, e) => {
    console.log("edge dblclick", edge, e);
  },
  contextmenu: (edge, e) => {
    console.log("edge contextmenu", edge, e);
  },
  mouseenter: (edge, e) => {
    console.log("edge mouseenter", edge, e);
  },
  mouseleave: (edge, e) => {
    console.log("edge mouseleave", edge, e);
  }
};

const onGraphLayoutEnd = () => {
  console.log("布局完成");
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
    }
  ]
};

const Node = {
  props: ["node"],
  computed: {
    r: function() {
      return this.node.nodeSize / 2 - 10;
    },
    transform: function() {
      const imageWidth = ((this.node.nodeSize / 2 - 10) * 24) / 20;
      return `translate(${-imageWidth / 2}, ${-imageWidth / 2 -
        6}) scale(${imageWidth / 24})`;
    },
    offset: function() {
      return 5;
    }
  },
  template: `<g>
      <circle :r="r" :cy="-offset"></circle>
      <use
        xlink:href="#user"
        :transform="transform"
      ></use>
      <text :dy="r + offset + 4">{{node.label}}</text>
    </g>`
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
      canRegion: true,
      regionEvents,
      graphEvents,
      nodeEvents,
      edgeEvents: edgeEvents,
      onGraphLayoutEnd,
      graphData,
      actions,
      renderNode: Node,
      renderEdge: Edge
    };
  },
  template: `<div style="width: 100vw;height:100vh">
    <force v-bind="$data" class="demo2">
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
        <image
          id="user"
          width="24"
          height="24"
          xlink:href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDAuMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik02MjAuNzQ0MTkxIDUzOC44NzkxODRjODIuNzM2MzUzLTQwLjUyMzk0OSAxNDAuMzA4NTgzLTEyNC43ODUwMjggMTQwLjMwODU4My0yMjIuOTM2NDY1IDAtMTM3LjM2NzYwMS0xMTEuNzE0MzM4LTI0OS4wODA5MTUtMjQ5LjAyNjY4LTI0OS4wODA5MTUtMTM3LjM2NzYwMSAwLTI0OS4wODA5MTUgMTExLjcxMzMxNC0yNDkuMDgwOTE1IDI0OS4wODA5MTUgMCA5OC4xNTE0MzcgNTcuNTcyMjMgMTgyLjQxMjUxNiAxNDAuMzYzODQxIDIyMi45MzY0NjVDMjM1LjMzMDIzOCA1ODYuNDI5MTUzIDExMS43OTY3MTQgNzQwLjczNjU2NSAxMTEuNzk2NzE0IDkyMy42OTQ1MDNjMCAxOC40NjQ1MzcgMTUuMDMyMzY4IDMzLjQ0MzY5MyAzMy40OTY5MDUgMzMuNDQzNjkzIDE4LjQ2NDUzNyAwIDMzLjQ5NzkyOC0xNC45NzkxNTYgMzMuNDk3OTI4LTMzLjQ0MzY5MyAwLTE4My43NzQ1MzcgMTQ5LjQ2MDAxLTMzMy4zNDMwMTcgMzMzLjIzNDU0Ny0zMzMuMzQzMDE3IDE4My43NzU1NiAwIDMzMy4yMzQ1NDcgMTQ5LjU2ODQ4MSAzMzMuMjM0NTQ3IDMzMy4zNDMwMTcgMCAxOC40NjQ1MzcgMTQuOTc4MTMzIDMzLjQ0MzY5MyAzMy40NDM2OTMgMzMuNDQzNjkzIDE4LjUxOTc5NiAwIDMzLjQ5NjkwNS0xNC45NzkxNTYgMzMuNDk2OTA1LTMzLjQ0MzY5M0M5MTIuMjAxMjQgNzQwLjczNjU2NSA3ODguNjY4NzM5IDU4Ni40MjkxNTMgNjIwLjc0NDE5MSA1MzguODc5MTg0ek0zMjkuODg2ODAxIDMxNS45NDI3MTljMC0xMDAuNDM4NTI3IDgxLjcwMTc5LTE4Mi4xOTQ1NTIgMTgyLjE0MDMxNy0xODIuMTk0NTUyIDEwMC4zODQyOTEgMCAxODIuMDg2MDgyIDgxLjc1NjAyNSAxODIuMDg2MDgyIDE4Mi4xOTQ1NTIgMCAxMDAuMzg0MjkxLTgxLjcwMjgxMyAxODIuMDg2MDgyLTE4Mi4wODYwODIgMTgyLjA4NjA4MkM0MTEuNTg3NTY4IDQ5OC4wMjg4IDMyOS44ODY4MDEgNDE2LjMyNzAxIDMyOS44ODY4MDEgMzE1Ljk0MjcxOXoiIC8+PC9zdmc+"
        />
      </defs>
    </force>
  </div>`
};
