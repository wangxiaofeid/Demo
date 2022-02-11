<template>
  <div class="tip-detail">
    <div class="tip-detail-title">{{ nodeData.isNode ? '实体信息' : '关系信息' }}</div>
    <div class="tip-detail-content">
      <p v-for="item in properties" :key="item.name">
        <span>{{ item.cname }}：</span>
        {{ $get(nodeData, ['properties', item.name]) }}
      </p>
    </div>
  </div>
</template>

<script>
import { get } from 'lodash'

export default {
  props: ['tipData', 'actions'],
  data () {
    return { visible: true }
  },
  computed: {
    nodeData () {
      return this.tipData || {}
    },
    properties () {
      if (!this.tipData) {
        return []
      }
      const { nodesMap, edgesMap } = this.actions.schema
      const { isNode, type } = this.tipData
      return get(isNode ? nodesMap : edgesMap, [type, 'properties'], [])
    }
  },
  methods: {
    $get: get
  }
}
</script>

<style scoped>
.tip-detail {
  position: absolute;
  right: 0;
  top: 50px;
  height: calc(100% - 90px);
  width: 260px;
  box-shadow: 0 0 10px 0 rgba(22, 26, 39, 0.1);
  padding: 20px 10px;
  overflow: hidden auto;
  background: #ffffff;
}

.tip-detail-title {
  font-size: 14px;
  color: #d7000f;
  position: relative;
  line-height: 1em;
  padding-left: 16px;
  margin-bottom: 10px;
}

.tip-detail-title::after {
  position: absolute;
  content: '';
  left: 0;
  width: 5px;
  height: 14px;
  background: #d7000f;
  border-radius: 1px;
}

.tip-detail-content {
  background: rgba(40, 85, 240, 0.05);
  border-radius: 2px;
  padding: 20px 10px;
}

.tip-detail-content p {
  font-size: 12px;
  color: #17233d;
  padding: 3px 0;
  margin: 0;
  word-break: break-all;
}

.tip-detail-content p span {
  color: #999999;
}
</style>
