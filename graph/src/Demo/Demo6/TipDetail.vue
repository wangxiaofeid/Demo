<template>
  <div
    class="tip-detail"
    :style="{ left: $get(tipData, 'x', 0) + 'px', top: $get(tipData, 'y', 0) + 'px' }"
  >
    <div class="tip-detail-inner">
      <span>{{ nodeData.label }}</span>
      <pre>{{ JSON.stringify(nodeData.properties || {}, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
import { get } from 'lodash'

export default {
  props: ['tipData'],
  methods: {
    $get: get
  },
  computed: {
    nodeData () {
      return get(this.tipData, ['data', 'backupData'], {})
    }
  }
}
</script>

<style scoped>
.tip-detail {
  position: absolute;
}

.tip-detail-inner {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #ffffff;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
}
</style>
