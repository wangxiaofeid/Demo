<template>
  <div class="tip-detail">
    <div class="tip-detail-title">
      {{ tipData.isNode ? "实体信息" : "关系信息" }}
    </div>
    <div class="tip-detail-content" v-if="tipData.isGroup">
      <group-list :actions="actions" :node="tipData" @close="close" />
    </div>
    <div class="tip-detail-content" v-else>
      <p v-for="item in properties" :key="item.name">
        <span>{{ item.cname }}：</span>
        {{ $get(tipData, `properties.${item.name}`) }}
      </p>
      <cb-tabs v-model="currentTabKey" @tab-click="onTabChange">
        <cb-tab-pane name="back" label="投资">
          <table-change
            :value="backTableData"
            :columns="columnsBack"
          ></table-change>
        </cb-tab-pane>
        <cb-tab-pane name="forward" label="被投资">
          <table-change
            :value="forWardTableData"
            :columns="columnsForward"
          ></table-change>
        </cb-tab-pane>
      </cb-tabs>
    </div>
  </div>
</template>

<script>
import { get } from "lodash";
import { GroupList } from "@xiaofei.wang/test";
import tableChange from "./tableChange";
import { toJS } from "mobx";
export default {
  components: {
    "group-list": GroupList,
    tableChange
  },
  props: ["tipData", "actions"],
  data() {
    return {
      visible: true,
      currentTabKey: "back",
      backTableData: [],
      forWardTableData: [],
      columnsBack: [
        { title: "股东名称", prop: "relCustCnNm" },
        { title: "投资比例", prop: "invest_ratio" }
      ],
      columnsForward: [
        { title: "股东名称", prop: "cusCnNm" },
        { title: "投资比例", prop: "invest_amount" }
      ]
    };
  },
  mounted() {
    const key = this.currentTabKey;
    this.graphPageQueryList({ current: 1, limit: 10, key });
  },
  computed: {
    properties() {
      if (!this.tipData) {
        return [];
      }
      const { nodesMap, edgesMap } = this.actions.schema;
      const { isNode, type } = this.tipData;
      return toJS(get(isNode ? nodesMap : edgesMap, [type, "properties"], []));
    }
  },
  methods: {
    $get: get,
    close() {
      this.$emit("close");
    },
    onTabChange(tab) {
      const name = tab.name;
      this.currentTabKey = name;
      this.graphPageQueryList({ current: 1, limit: 10, name });
    },
    graphPageQueryList({ current = 1, limit = 10, key }) {
      if (!this.tipData) {
        return [];
      }
      // let uid = this.tipData.properties.uid
      // let param = {
      //   graphCode: this.actions.graphCode,
      //   uids: [
      //     {
      //       uid: uid,
      //       label: 'corp'
      //     }
      //   ],
      //   curPage: current,
      //   limit,
      //   direction: key
      // }
      // service.graphPageQueryList(param).then((res) => {
      //   console.log(res)
      //   let resData = res.list
      //   if (key === 'back') {
      //     this.backTableData = resData
      //   } else {
      //     this.forWardTableData = resData
      //   }
      // })
    }
  }
};
</script>

<style scoped>
.tip-detail {
  position: absolute;
  right: 0;
  top: 50px;
  height: calc(100vh - 90px);
  width: 340px;
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
  content: "";
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
