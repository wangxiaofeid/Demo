<template>
  <div style="width: 100vw; height: 100vh;" class="demo5">
    <div class="demo5-top">
      <top
        :actions="actions"
        :mode="mode"
        @setMode="setMode"
        @setPathData="setPathData"
      ></top>
    </div>
    <div class="demo5-content">
      <force
        :graphData="graphData"
        :actions="actions"
        :style="{ display: !!mode ? 'none' : 'block' }"
        v-bind="otherPorps"
      >
        <svg-defs />
        <svg-style />
      </force>

      <force
        v-if="!!mode"
        :graphData="pathData"
        :canDrag="false"
        :isFixed="true"
        :renderNode="otherPorps.renderNode"
        :renderEdge="otherPorps.renderEdge"
      >
        <svg-defs />
        <svg-style />
      </force>

      <div class="legend-box">
        <span
          v-for="item in schema.nodes"
          :key="item.name"
          class="legend-box-item"
        >
          <span :style="{ backgroundColor: item.fill }" />
          <span>{{ item.labelName }} </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { forEach } from "lodash";
import {
  ForceBase as Force,
  createForceBaseActions as createForceActions
} from "@xiaofei.wang/test";
import graphData, { extendNode } from "./mock";
import { schema } from "./constants";
import { Top, SvgDefs, SvgStyle, Node, Edge } from "./components";
import "./index.less";

const actions = createForceActions();
const otherPorps = {
  renderNode: Node,
  renderEdge: Edge,
  regionEvents: {
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
    }
  },
  graphEvents: {
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
  },
  nodeEvents: {
    dblclick: (node, e) => {
      console.log("node dblclick");
      e.stopPropagation();
      // actions.addData(extendNode(node))
    }
  },
  nodeTools: [
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
  ]
};

export default {
  name: "App",
  components: { force: Force, top: Top, svgDefs: SvgDefs, svgStyle: SvgStyle },
  data: () => ({
    graphData,
    actions,
    schema,
    mode: "",
    pathData: {},
    otherPorps
  }),
  methods: {
    setPathData: function(pathData) {
      this.pathData = pathData;
    },
    setMode: function(mode) {
      this.mode = mode;
    }
  }
};
</script>
