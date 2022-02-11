<template>
  <div class="bar clearfix">
    <a class="btn-back" @click="onExit" v-if="mode === 'path'">
      <i class="el-icon-arrow-left" />
      退出路径分析
    </a>
    <template v-else>
      <div class="fr">
        <cb-select
          @change="(id) => actions.focus(actions.nodes.find((n) => n.id === id))"
          v-model="searchNode"
          placeholder="搜索节点"
          size="small"
          class="node-search"
          filterable
          clearable
        >
          <cb-option
            v-for="node in actions.nodes"
            :key="node.id"
            :value="node.id"
            :label="node.label"
          >
          </cb-option>
        </cb-select>
        <cb-divider direction="vertical" />
        <icon-text
          title="撤销"
          :disabled="actions.prevStack.length === 0"
          icon="el-icon-top-left"
          @click="actions.prev()"
        />
        <icon-text
          title="重做"
          :disabled="actions.nextStack.length === 0"
          icon="el-icon-top-right"
          @click="actions.next()"
        />
        <icon-text title="布局" icon="el-icon-share" @click="actions.reLayout()" />
        <icon-text title="居中" icon="el-icon-aim" @click="actions.adaption()" />
        <cb-dropdown trigger="hover">
          <i class="el-icon-more more-btn" />
          <cb-dropdown-menu slot="dropdown">
            <cb-dropdown-item>
              <icon-text
                title="放大"
                icon="el-icon-circle-plus-outline"
                @click="actions.zoomTo(1.1)"
              />
            </cb-dropdown-item>
            <cb-dropdown-item>
              <icon-text title="缩小" icon="el-icon-remove-outline" @click="actions.zoomTo(0.9)" />
            </cb-dropdown-item>
            <cb-dropdown-item>
              <icon-text
                :title="actions.isFull ? '退出全屏' : '全屏'"
                :icon="actions.isFull ? 'el-icon-circle-close' : 'el-icon-full-screen'"
                @click="actions.isFull ? actions.exitFullPage() : actions.fullPage()"
              />
            </cb-dropdown-item>
          </cb-dropdown-menu>
        </cb-dropdown>
        <cb-divider direction="vertical" />
        <cb-dropdown trigger="click" @command="downloadPic">
          <icon-text title="导出" icon="el-icon-picture-outline" />
          <cb-dropdown-menu slot="dropdown">
            <cb-dropdown-item command="jpeg">导出JPEG</cb-dropdown-item>
            <cb-dropdown-item command="png">导出PNG</cb-dropdown-item>
            <cb-dropdown-item command="svg">导出SVG</cb-dropdown-item>
          </cb-dropdown-menu>
        </cb-dropdown>
      </div>
      <div class="fl">
        <icon-text
          title="条件过滤"
          icon="el-icon-files"
          :class="{ active: active === 'filter' }"
          @click="active = active === 'filter' ? '' : 'filter'"
        />
        <icon-text
          title="路径分析"
          icon="el-icon-help"
          :class="{ active: active === 'path' }"
          @click="active = active === 'path' ? '' : 'path'"
        />
      </div>
    </template>
    <filterPanel v-if="active === 'filter'" @close="active = ''" :actions="actions" />
    <pathPanel
      v-if="active === 'path'"
      @setPathData="doSetPathData"
      @close="active = ''"
      :actions="actions"
    />
  </div>
</template>

<script>
import IconText from './IconText'
import Filter from './Filter'
import Path from './Path'

export default {
  name: 'Top',
  components: {
    iconText: IconText,
    filterPanel: Filter,
    pathPanel: Path
  },
  props: ['mode', 'actions'],
  data: function () {
    return {
      active: '',
      searchNode: undefined
    }
  },
  methods: {
    onExit: function () {
      this.$emit('setMode', '')
    },
    doSetPathData: function (data) {
      this.$emit('setPathData', data)
      this.$emit('setMode', 'path')
    },
    downloadPic (key) {
      this.actions.exportImage(`导出图片.${key}`, 2)
    }
  }
}
</script>
