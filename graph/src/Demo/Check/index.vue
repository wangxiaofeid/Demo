<template>
  <div>
    <cb-table :data="tableData" style="width: 100%;">
      <cb-table-column prop="date" label="日期" width="180"> </cb-table-column>
      <cb-table-column prop="name" label="姓名" width="180"> </cb-table-column>
      <cb-table-column prop="address" label="地址"> </cb-table-column>
      <cb-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <cb-button @click="detailData = scope.row" type="text" size="small">查看核查单</cb-button>
        </template>
      </cb-table-column>
    </cb-table>
    <detail :data="detailData" :onBack="() => (detailData = false)" />
  </div>
</template>

<script>
import Detail from './Detail'

export default {
  components: { detail: Detail },
  data () {
    return {
      detailData: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>
