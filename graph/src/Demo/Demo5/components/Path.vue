<template>
  <div class="panel-box">
    <h4 class="panel-title">分析实体</h4>
    <div class="panel-body">
      起点：
      <cb-select placeholder="选择起点" filterable v-model="start" class="w160">
        <cb-option
          v-for="node in actions.nodes"
          :key="node.id"
          :value="node.id"
          :label="node.label"
        />
      </cb-select>
      终点：
      <cb-select placeholder="选择终点" filterable v-model="end" class="w160">
        <cb-option
          v-for="node in actions.nodes"
          :key="node.id"
          :value="node.id"
          :label="node.label"
        />
      </cb-select>
    </div>
    <h4 class="panel-title">查询方式</h4>
    <div class="panel-body">
      <cb-radio-group v-model="type">
        <cb-radio :label="1">最短路径</cb-radio>
        <cb-radio :label="2">
          全路径
          <cb-input-number
            v-if="type === 2"
            :min="1"
            :max="10"
            class="ml5"
            v-model="step"
          />
        </cb-radio>
      </cb-radio-group>
    </div>
    <h4 class="panel-title">路径条数</h4>
    <div class="panel-body">
      <cb-input-number :min="1" :max="20" v-model="pathNum" />
    </div>
    <div class="tc">
      <cb-button @click="reset" size="small"> 重置 </cb-button>
      <cb-button type="primary" @click="onSubmit" size="small" class="ml10">
        分析
      </cb-button>
    </div>
    <span class="close" @click="onClose"> 收起 </span>
  </div>
</template>
<script>
import { pathUtils } from "@xiaofei.wang/test";

const { shortestPath, fullPath, getGraphByPaths } = pathUtils;

const defaultValue = {
  start: undefined,
  end: undefined,
  type: 1,
  step: 4,
  pathNum: 10
};
export default {
  props: ["actions"],
  data: function() {
    return {
      ...defaultValue
    };
  },
  methods: {
    onClose: function() {
      this.$emit("close");
    },
    reset: function() {
      Object.keys(defaultValue).forEach(key => {
        this[key] = defaultValue[key];
      });
    },
    onSubmit: function() {
      const { start, end, type, step, pathNum } = this;
      if (!(start && end && type && step && pathNum)) {
        this.$message.info("请填写完整");
        return;
      }
      if (start === end) {
        this.$message.info("起点和终点不能相同");
        return;
      }
      const { nodes, edges } = this.actions;
      const baseData = {
        nodes: nodes.map(n => n.backupData),
        edges: edges.map(e => e.backupData)
      };
      const params = {
        ...baseData,
        start,
        end,
        step,
        pathNum
      };
      const allPaths = type === 1 ? shortestPath(params) : fullPath(params);
      if (allPaths.length > 0) {
        this.$emit("setPathData", getGraphByPaths(baseData, allPaths));
        this.onClose();
      } else {
        this.$message.info("未发现路径");
      }
    }
  }
};
</script>
