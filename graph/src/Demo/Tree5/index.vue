<template>
  <div style="width: 100vw; height: 100vh;">
    <tree v-bind="graphProps" class="demo7">
      <tip-detail
        v-if="!!tipData"
        :tipData="tipData"
        :actions="actions"
        @close="tipData = null"
      />
    </tree>
  </div>
</template>

<script>
import { get } from "lodash";
import { Tree, createTreeActions } from "@xiaofei.wang/test";
import TipDetail from "./TipDetail";

const actions = createTreeActions();

window.treeActions = actions;

export default {
  name: "Tree5",
  components: { tree: Tree, "tip-detail": TipDetail },
  data() {
    return {
      tipData: null,
      actions,
      graphProps: {
        actions,
        graphCode: "test",
        searchData: {
          label: "enterprise",
          propsName: "name",
          propsValue: "杭州汇俱广告有限公司"
        },
        // filterData: [
        //   { label: 'enterprise', type: 'vertex' },
        //   { label: 'person', type: 'vertex' },
        //   { label: 'invest', type: 'edge' }
        // ],
        edgeSort: {
          top: [{ label: "invest", prop: "ratio", type: "DESC" }],
          bottom: [
            { label: "invest", prop: "invest_state_amount", type: "DESC" }
          ]
        }, // ASC：升序  DESC：降序
        edgeText: {
          top: edges =>
            parseInt(get(edges, "[0].properties.ratio", 0) * 10000, 10) / 100 +
            "%",
          bottom: edges => get(edges, "[0].properties.invest_state_amount", 0)
        },
        initDepth: 2, // 初始展示多少层
        maxLength: 3, // 每层最多展示多少个
        graphEvents: {
          click: () => {
            this.setTipData();
          }
        },
        nodeEvents: {
          click: (node, e) => {
            e.stopPropagation();
            this.setTipData(node);
          }
        },
        edgeEvents: {
          click: (edge, e) => {
            e.stopPropagation();
            // this.setTipData(edge)
          }
        },
        graphTools: [
          "search", // 搜索
          "reset", // 重置
          "download", // 下载
          "scale", // 缩放
          "center", // 居中
          "fullScreen", // 全屏

          "filter", // 过滤
          "treePath" // 路径分析
        ]
      }
    };
  },
  methods: {
    setTipData(node) {
      this.tipData = node;
    }
  }
};
</script>
