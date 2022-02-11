<template>
  <g v-html="style"></g>
</template>
<script>
import { schema } from '../constants'
export default {
  data: function () {
    return {
      style: `<style>
            ${schema.nodes
              .map(
                ({ name, fill }) =>
                  `.node_${name} circle{
                fill: ${fill};
            }
            .node_${name} .is_root{
                fill: transparent;
                stroke: ${fill};
                stroke-width: 1!important;
            }`
              )
              .join('')}
        </style>`
    }
  }
}
</script>
