<template>
  <g>
    <path
      key="path"
      class="path"
      :d="path.d"
      :stroke-width="edge._strokeWidth || 1"
      marker-end="url(#sjx)"
    />
    <text key="edgeText" class="edgeText" v-bind="path.textPoint" :transform="path.textTransform">
      {{ edge.label }}
    </text>
  </g>
</template>

<script>
export default {
  props: ['edge'],
  computed: {
    path: function () {
      return this.edge.getPath()
    }
  }
}
</script>
