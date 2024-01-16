async function test() {
  // 获取工单列表
  const list = await fetch('https://tdoa.tongdun.me/api/proc/list/sent?pageNum=1&pageSize=500&start=2022-01-01&end=2022-12-31&pending=false&t=1666586329754').then(res=>res.json()).then(res=>{
    const data = res?.data?.list?.filter(it=>it.flowKey==="workhtb")
    // console.log(res, data)
    return data
  });
  // 获取详情
  const allTime = [];
  for (let i = 0; i < list.length; i++) {
    const { applicationNo } = list[i];
    await fetch(`https://tdoa.tongdun.me/api/proc/data/${applicationNo}?t=1666584589209`).then(res=>res.json()).then(res=>{
      // console.log(applicationNo, JSON.parse(res.data.formData));
      [].push.apply(allTime, JSON.parse(res.data.formData).gsmx);
    })
  }
  // console.log(allTime);
  console.log(JSON.stringify(allTime))
}
test();