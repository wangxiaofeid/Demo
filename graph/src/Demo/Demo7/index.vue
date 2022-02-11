<template>
  <div style="width: 100vw; height: 100vh;">
    <force v-bind="graphProps" class="demo7">
      <tip-detail v-if="!!tipData" :tipData="tipData" :actions="actions" />
    </force>
  </div>
</template>

<script>
import { Force, createForceActions } from "@xiaofei.wang/test";
import TipDetail from "./TipDetail";
import deleteIcon from "./delete.svg";
import extendIcon from "./extend.png";

const actions = createForceActions();
window.actions = actions;
const nodeTools = [
  {
    key: "extend",
    label: "拓展",
    icon: extendIcon,
    desc: "拓展当前节点",
    events: {
      click: node => {
        actions.extendNode(node);
      }
    }
  },
  {
    key: "delete",
    label: "删除",
    icon: deleteIcon,
    desc: "删除当前节点",
    events: {
      click: node => {
        actions.deleteDataByIds([node.id], true);
      }
    }
  },
  {
    key: "other",
    label: "钉住",
    desc: "",
    events: {
      click: node => {
        actions.fixedNode(node);
      }
    }
  }
];

export default {
  name: "Demo7",
  components: { force: Force, "tip-detail": TipDetail },
  data() {
    return {
      tipData: null,
      actions,
      graphProps: {
        actions,
        graphCode: "test",
        searchData: {
          depth: 1,
          label: "enterprise",
          propsName: "name",
          propsValue: "杭州汇俱广告有限公司"
        },
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
        nodeTools,
        graphTools: [
          "search", // 搜索
          "reset", // 重置
          "history", // 操作历史
          "download", // 下载
          "scale", // 缩放
          "center", // 居中
          "reLayout", // 重新布局
          "fullScreen", // 全屏

          "filter", // 过滤
          "path" // 路径分析
        ],
        textLength: 100,
        legendOther: {
          // nodes: [
          //   {
          //     label: '注册资本大于50万',
          //     size: 'small', // small|stand|large
          //     color: '#666666'
          //   },
          //   {
          //     label: '注册资本大于500万',
          //     size: 'stand', // small|stand|large
          //     color: '#ff0000',
          //     hollow: true // 是否空心
          //   },
          //   {
          //     label: '注册资本大于5000万',
          //     size: 'large', // small|stand|large
          //     color: '#d7000f'
          //   }
          // ],
          edges: [
            {
              label: "强关系",
              size: "small", // small|stand|large
              style: "solid", // solid|dashed|dotted
              color: "#333"
            },
            {
              label: "中关系",
              size: "small",
              style: "dashed",
              color: "#333"
            },
            {
              label: "弱关系",
              size: "small",
              style: "dotted",
              color: "#333"
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
  }
};
</script>
