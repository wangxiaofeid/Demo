<template>
  <div>
    <cb-table :data="value">
      <template v-for="(column, index) in columns">
        <cb-table-column
          :key="index"
          :prop="column.prop"
          :label="column.title"
          :align="column.align"
          :width="column.width"
          :fixed="column.fixed"
          :show-overflow-tooltip="true"
        >
        </cb-table-column>
      </template>
    </cb-table>
    <!-- <cb-pagination
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
      :page-size="pagination.limit"
      :page-sizes="pagination.pageSizes"
      :current-page="pagination.current"
      @current-change="onCurrentPageChange"
      @size-change="onPageSizeChange"
    /> -->
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data () {
    return {
      pagination: {
        limit: 20,
        current: 1,
        total: 0,
        pageSizes: [10, 20, 30, 40]
      }
    }
  },
  methods: {
    onCurrentPageChange (current) {
      // this.fetchData({ current })
    },
    onPageSizeChange (limit) {
      this.pagination.limit = limit
      this.pagination.current = 1
      // this.fetchData({ limit })
    }
  }
}
</script>
