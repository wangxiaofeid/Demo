module.exports = {
  'GET /api/userConfig/query': {
    success: true,
    data: [
      {
        uuid: '12323',
        workspaceUuid: '20190912102911302dec3227f4f8f486',
        businessModule: 'extend',
        content:
          '{"name":"自定义拓展","inNode":[{"type":"person","filterType":"attr","group":{"groups":[{"left":"name","operator":"largerOrEqual","right":"2321"}],"logic":"|"}}],"outEdge":[{"type":"movie_director","filterType":"attr","group":{"groups":[{"left":"hh","dataType":"String","operator":"eq","right":"321"}],"logic":"or"}}],"outNode":[{"type":"person","filterType":"attr","group":{"groups":[{"left":"age","dataType":"Integer","operator":"gt","right":13},{"left":"gender","dataType":"Boolean","operator":"eq","right":true}],"logic":"or"}},{"type":"movie","filterType":"attr","group":{"groups":[{"left":"area","dataType":"String","operator":"eq","right":"ew"}],"logic":"or"}}]}',
      },
      {
        uuid: '123dd23',
        workspaceUuid: '20190912102911302dedc3227f4f8f486',
        businessModule: 'filter',
        content:
          '{"name":"自定义过滤","outEdge":[{"type":"movie_director","filterType":"attr","group":{"groups":[{"left":"hh","operator":"larger","right":"321"}],"logic":"|"}}],"outNode":[{"type":"person","filterType":"attr","group":{"groups":[{"left":"age","operator":"larger","right":"13"},{"left":"gender","operator":"larger","right":"true"}],"logic":"|"}},{"type":"movie","filterType":"attr","group":{"groups":[{"left":"area","operator":"larger","right":"ew"}],"logic":"|"}}]}',
      },
    ],
    code: 200,
    message: null,
  },
  'POST /api/userConfig/delete': {
    success: true,
    data: [],
    code: 200,
    message: null,
  },
  'POST /api/userConfig/create': {
    success: true,
    data: {
      uuid: '123ddd23',
      workspaceUuid: '20190912102911302dec3227f4f8f486',
      businessModule: 'extend',
      content:
        '{"name":"自定义拓展","inNode":[{"type":"person","filterType":"attr","group":{"groups":[{"left":"name","operator":"largerOrEqual","right":"2321"}],"logic":"|"}}],"outEdge":[{"type":"movie_director","filterType":"attr","group":{"groups":[{"left":"hh","dataType":"String","operator":"eq","right":"321"}],"logic":"or"}}],"outNode":[{"type":"person","filterType":"attr","group":{"groups":[{"left":"age","dataType":"Integer","operator":"gt","right":13},{"left":"gender","dataType":"Boolean","operator":"eq","right":true}],"logic":"or"}},{"type":"movie","filterType":"attr","group":{"groups":[{"left":"area","dataType":"String","operator":"eq","right":"ew"}],"logic":"or"}}]}',
    },
    code: 200,
    message: null,
  },
}
