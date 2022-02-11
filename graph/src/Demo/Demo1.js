import { forEach } from "lodash";
import {
  ForceBase as Force,
  createForceBaseActions as createForceActions
} from "@xiaofei.wang/test";
import graphData, { extendNode } from "./Demo5/mock";

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
  }
};

const nodeEvents = {
  click: (node, e) => {
    e.stopPropagation();
    console.log("node click", node, e);
  }
};

const nodeTools = [
  {
    key: "extend",
    label: "拓展",
    events: {
      click: node => {
        actions.addData(extendNode(node));
      }
    }
  },
  {
    key: "delete",
    label: "删除",
    events: {
      click: node => {
        actions.deleteDataByIds([node.id]);
      }
    }
  },
  {
    key: "tag",
    label: "备注",
    events: {
      click: node => {
        console.log("自定义处理过程", node);
      }
    }
  },
  {
    key: "other",
    label: "操作",
    events: {
      click: node => {
        console.log("自定义处理过程", node);
      }
    }
  }
];

const legend = {
  nodes: [
    {
      label: "人fewfewf",
      code: "person",
      nodeSize: 60,
      color: "#f39b3e",
      hollow: false // 是否空心
    },
    {
      label: "电影",
      code: "movie",
      nodeSize: 60,
      color: "#d7000f",
      hollow: true
    },
    {
      label: "纪录片",
      code: "movie2",
      nodeSize: 60,
      color: "#d7000f"
    }
  ],
  edges: [
    {
      label: "演员",
      code: "movie_actor",
      width: 1,
      color: "#d7000f",
      style: "solid" //  solid|dashed|dotted
    },
    {
      label: "导演",
      code: "movie_director",
      width: 1,
      color: "#d7000f",
      style: "dashed" //  solid|dashed|dotted
    },
    {
      label: "出品人",
      code: "movie_publisher",
      width: 1,
      color: "#d7000f",
      style: "dotted" //  solid|dashed|dotted
    },
    {
      label: "制片人",
      code: "movie_maker",
      width: 3,
      color: "#0F6FC6",
      style: "dashed" //  solid|dashed|dotted
    },
    {
      label: "编剧",
      code: "movie_writer",
      width: 4,
      color: "#00d70c",
      style: "solid" //  solid|dashed|dotted
    }
  ],
  hide: true
};

window.demo1Actions = actions;

export default {
  components: { force: Force },
  data() {
    return {
      canRegion: true,
      regionEvents,
      graphEvents,
      nodeEvents,
      graphData,
      actions,
      nodeTools,
      legend
    };
  },
  template: `<div style="width: 100vw;height:100vh">
    <force v-bind="$data" class="demo1"></force>
  </div>`
};
