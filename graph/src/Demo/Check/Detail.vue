<template>
  <full-modal
    class="checklist-full-modal"
    title="核查单"
    :visible="!!data"
    :isFixed="true"
    :onBack="onBack"
  >
    <force v-bind="graphProps" :graphData="graphData" class="checklist-force">
      <cb-button
        type="text"
        icon="el-icon-arrow-left"
        slot="tool-bar-left"
        @click="onBack()"
      >
        返回
      </cb-button>
      <cb-button-group slot="tool-bar-right">
        <cb-button icon="el-icon-tickets" size="small">
          分析报告
        </cb-button>
        <cb-button icon="el-icon-setting" size="small">
          完成核查
        </cb-button>
      </cb-button-group>
      <tip-detail v-if="!!tipData" :tipData="tipData" :actions="actions" />
    </force>
  </full-modal>
</template>

<script>
import { FullModal } from "@yuntu/components";
import {
  ForceBase as Force,
  createForceBaseActions as createForceActions
} from "@xiaofei.wang/test";
import { searchNode } from "@xiaofei.wang/test/service";
import TipDetail from "./TipDetail";

export default {
  name: "Demo7",
  components: {
    "full-modal": FullModal,
    force: Force,
    "tip-detail": TipDetail
  },
  props: {
    data: {
      type: [Object, Boolean]
    },
    onBack: {
      type: Function
    }
  },
  data() {
    const actions = createForceActions();

    return {
      tipData: null,
      actions,
      graphData: null,
      graphProps: {
        actions,
        graphCode: "test",
        graphEvents: {
          click: () => {
            this.setTipData();
            actions.setAllMode();
          }
        },
        nodeEvents: {
          click: (node, e) => {
            e.stopPropagation();
            this.setTipData(node);
            actions.highlightNode(node);
          }
        },
        edgeEvents: {
          click: (edge, e) => {
            e.stopPropagation();
            this.setTipData(edge);
            actions.highlightEdge(edge);
          }
        },
        graphTools: [
          // 'search', // 搜索
          // 'reset', // 重置
          // 'history', // 操作历史
          "download", // 下载
          "scale", // 缩放
          "center", // 居中
          "reLayout", // 重新布局
          // 'fullScreen', // 全屏

          "filter", // 过滤
          "path" // 路径分析
        ],
        legendOther: {
          nodes: [
            {
              label: "注册资本大于50万",
              size: "small", // small|stand|large
              color: "#666666"
            },
            {
              label: "注册资本大于500万",
              size: "stand", // small|stand|large
              color: "#ff0000"
            },
            {
              label: "注册资本大于5000万",
              size: "large", // small|stand|large
              color: "#d7000f"
            }
          ],
          edges: [
            {
              label: "强关系",
              size: "small", // small|stand|large
              style: "solid", // solid|dashed|dotted
              color: "#ff0000"
            },
            {
              label: "中等关系",
              size: "small",
              style: "dashed",
              color: "#ff0000"
            },
            {
              label: "弱关系",
              size: "small",
              style: "dotted",
              color: "#ff0000"
            }
          ],
          systemMerge: [
            {
              types: ["guarantee", "concert", "is_family_of"],
              name: "合并后关系"
            },
            {
              types: [
                "send_core_manager",
                "same_person_ctrl",
                "same_ctrl_manager"
              ],
              name: "合并后关系2"
            }
          ]
        }
      }
    };
  },
  methods: {
    setTipData(node) {
      this.tipData = node;
    }
  },
  watch: {
    data(val, oldVal) {
      if (val && val !== oldVal) {
        // 这里改成核查单的接口
        searchNode({
          graphCode: "ddd",
          depth: 1,
          label: "enterprise",
          propsName: "name",
          propsValue: "杭州汇俱广告有限公司"
        }).then(graphData => {
          this.graphData = graphData;
        });
      }
    }
  }
};
</script>
<style lang="less">
.checklist-full-modal {
  .header {
    display: none;
  }

  .body {
    padding: 0 !important;
    width: 100vw;
    height: 100vh;
  }
}
</style>
