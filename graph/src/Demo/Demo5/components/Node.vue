<template>
  <g>
    <circle v-if="node.isRoot" :r="r + 5" :cy="-offset" class="is_root" />
    <circle :r="r" :cy="-offset"></circle>
    <use :xlink:href="'#' + node.type" :transform="transform"></use>
    <text :dy="r + offset + 4">{{ node.label }}</text>
  </g>
</template>
<script>
export default {
  props: ['node'],
  computed: {
    r: function () {
      return this.node.nodeSize / 2 - 10
    },
    transform: function () {
      const imageWidth = ((this.node.nodeSize / 2 - 10) * 24) / 20
      return `translate(${-imageWidth / 2}, ${-imageWidth / 2 - 6}) scale(${imageWidth / 24})`
    },
    offset: function () {
      return 5
    }
  }
}
</script>
