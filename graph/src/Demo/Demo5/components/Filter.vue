<template>
  <div class="panel-box">
    <h4 class="panel-title">实体</h4>
    <div class="panel-body">
      <cb-checkbox-group v-model="selectNodeTypes">
        <cb-checkbox v-for="node in nodeOptions" :key="node.value" :label="node.value">
          {{ node.label }}
        </cb-checkbox>
      </cb-checkbox-group>
    </div>
    <h4 class="panel-title">关系</h4>
    <div class="panel-body">
      <cb-checkbox-group v-model="selectEdgeTypes">
        <cb-checkbox v-for="edge in edgeOptions" :key="edge.value" :label="edge.value">
          {{ edge.label }}
        </cb-checkbox>
      </cb-checkbox-group>
    </div>
    <div class="tc">
      <cb-button @click="reset" size="small"> 重置 </cb-button>
      <cb-button type="primary" @click="onSubmit" size="small" class="ml10"> 过滤 </cb-button>
    </div>
    <span class="close" @click="onClose"> 收起 </span>
  </div>
</template>

<script>
import { filter } from 'lodash'
import { schema } from '../constants'
export default {
  props: ['actions'],
  data: function () {
    return {
      selectNodeTypes: schema.nodes.map((n) => n.name),
      selectEdgeTypes: schema.edges.map((e) => e.name)
    }
  },
  computed: {
    nodeOptions: function () {
      return schema.nodes.map(({ name, labelName }) => ({
        label: labelName,
        value: name
      }))
    },
    edgeOptions: function () {
      return schema.edges.map(({ name, labelName }) => ({
        label: labelName,
        value: name
      }))
    }
  },
  methods: {
    reset: function () {
      this.selectNodeTypes = schema.nodes.map((n) => n.name)
      this.selectEdgeTypes = schema.edges.map((e) => e.name)
    },
    onSubmit: function () {
      const { nodes, edges } = this.actions
      let filterNodes = filter(nodes, (n) => this.selectNodeTypes.includes(n.type))
      let filterEdges = filter(
        edges,
        (e) =>
          this.selectEdgeTypes.includes(e.type) &&
          filterNodes.includes(e.source) &&
          filterNodes.includes(e.target)
      )
      this.actions.replaceData({
        nodes: filterNodes,
        edges: filterEdges
      })
      this.onClose()
    },
    onClose: function () {
      this.$emit('close')
    }
  }
}
</script>
