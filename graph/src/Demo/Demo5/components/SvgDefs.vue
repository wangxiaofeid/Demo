<template>
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
      <path d="M0,0 L0,8 L8,4 L0,0" :style="{ fill: 'rgb(204, 204, 204)', strokeWidth: 0 }"></path>
    </marker>
    <image
      v-for="node in nodes"
      :key="node.name"
      :id="node.name"
      width="24"
      height="24"
      :xlink:href="node.icon"
    />
  </defs>
</template>

<script>
import { schema } from '../constants'
export default {
  data: function () {
    return {
      nodes: schema.nodes
    }
  }
}
</script>
