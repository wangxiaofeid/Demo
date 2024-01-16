const _ = require("./lodash");
// const sourceData = require("./data/wxf");
// const sourceData = require("./data/jlb");
// const sourceData = require("./data/zsd");
const sourceData = require("./data/zy");

// 工作类型有 [ '研发', '实施', '售前', '通用' ]
/**
  gsTime: "2022-10-17",
  xmManagerAccount: "hongbin.duan",
  workType: "null",
  xmid: "176256",
  gsType: "研发",
  xmName: "云图平台V3.2.2",
  xmgsHour: "8.5",
  lineNumber: 1,
  xmManager: "段宏斌"
 */
// todo：把超过8的改成8
const data = _.cloneDeep(sourceData).map((it) => ({ ...it, xmgsHour: parseInt(it.xmgsHour) }));

const timeMap = _.groupBy(data, "gsTime");
Object.keys(timeMap).map((key) => {
  const arr = timeMap[key];
  if (arr.length === 1) {
    if (arr[0].xmgsHour > 8) {
      arr[0].xmgsHour = 8;
    }
  } else if (arr.length > 1) {
    const sumNum = _.sumBy(arr, "xmgsHour");
    if (sumNum > 8) {
      arr.forEach((it) => {
        it.xmgsHour = parseFloat(((it.xmgsHour * 8) / sumNum).toFixed(2));
      });
    }
  }
});

// 过滤研发项目
console.log(
  _.sortBy(
    // _.filter(data, (it) => it.gsType === "研发"),
    data,
    [(it) => new Date(it.gsTime).getTime()]
  )
    .map(
      ({ gsTime, gsType, xmName, xmgsHour }) => `${gsTime},${gsType},${xmgsHour},${xmName}
`
    )
    .join("")
);
