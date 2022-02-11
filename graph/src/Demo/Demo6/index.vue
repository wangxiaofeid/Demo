<template>
  <div style="width: 100vw; height: 100vh;">
    <force v-bind="$data" class="demo6"></force>
    <tip-detail v-if="!!tipData" :tipData="tipData" />
    <div class="demo6-tools">
      <span title="放大" @click="actions.zoomTo(1.1)"
        ><i class="el-icon-circle-plus-outline"></i
      ></span>
      <span title="缩小" @click="actions.zoomTo(0.9)"
        ><i class="el-icon-remove-outline"></i
      ></span>
      <span title="自适应" @click="actions.adaption()"
        ><i class="el-icon-aim"></i
      ></span>
      <span title="重新布局" @click="actions.reLayout()"
        ><i class="el-icon-share"></i
      ></span>
      <span title="下载" @click="actions.exportImage('demo6.jpg')"
        ><i class="el-icon-picture-outline"></i
      ></span>
      <span title="全屏" @click="actions.fullPage()"
        ><i class="el-icon-full-screen"></i
      ></span>
    </div>
  </div>
</template>

<script>
import { select } from "d3-selection";
import {
  ForceBase as Force,
  createForceBaseActions as createForceActions
} from "@xiaofei.wang/test";
import TipDetail from "./TipDetail";
import graphData, { extendNode } from "./mock";

const actions = createForceActions();

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
    label: "钉住",
    events: {
      click: node => {
        actions.fixedNode(node);
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
      nodeSize: 80,
      color: "#d7000f",
      hollow: true
    },
    {
      label: "纪录片",
      code: "movie2",
      nodeSize: 80,
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
      width: 3,
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
      width: 2,
      color: "#0F6FC6",
      style: "solid", //  solid|dashed|dotted
      undirected: true // 无向边
    },
    {
      label: "编剧",
      code: "movie_writer",
      width: 4,
      color: "#00d70c",
      style: "solid" //  solid|dashed|dotted
    }
  ]
  // hide: true,
  // hideNodes: true,
  // hideEdges: true,
};

export default {
  components: { force: Force, "tip-detail": TipDetail },
  data() {
    return {
      actions,
      graphEvents: {
        click: () => {
          this.setTipData();
        },
        dblclick: () => {
          console.log("graph dblclick");
          actions.adaption();
        }
      },
      nodeEvents: {
        click: (node, e) => {
          e.stopPropagation();
          console.log("node click", node, e);
          this.setTipData(node, e);
        }
      },
      graphData,
      nodeTools,
      legend,
      tipData: null
    };
  },
  methods: {
    setTipData(node) {
      if (node) {
        const dom = select(`#${actions.rootId} #node_${node.id}`).node();
        const offset = dom.getBoundingClientRect();
        this.tipData = {
          x: offset.x,
          y: offset.y,
          data: node
        };
      } else {
        this.tipData = null;
      }
    }
  }
};
</script>

<style scoped>
.demo6-tools {
  position: absolute;
  right: 10px;
  top: 50%;
  background: #ffffff;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
  transform: translate(0, -50%);
}

.demo6-tools span {
  display: block;
  font-size: 14px;
  padding: 4px 10px;
  cursor: pointer;
}

.demo6-tools span:hover {
  background: #eeeeee;
}
</style>
