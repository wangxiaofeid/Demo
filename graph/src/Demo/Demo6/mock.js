import { find, get } from 'lodash'
import { schema } from './constants'

const mockData = {
  nodes: [
    {
      id: '456285',
      type: 'person',
      label: '于夫海',
      properties: {
        uid: '8207',
        education:
          '小学中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国',
        gender: '男',
        constellation: '双子座',
        name: '于夫海',
        age: 76
      }
    },
    {
      id: '441217',
      type: 'person',
      label: '周星驰',
      isRoot: true,
      properties: {
        uid: '24',
        education: '博士',
        gender: '男',
        constellation: '射手座',
        name: '周星驰',
        age: 56
      }
    },
    {
      id: '445879',
      type: 'movie2',
      label: '冲锋战警',
      properties: {
        area: '中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国',
        name: '冲锋战警',
        uid: '1887',
        type: '惊悚片',
        publish: '1994-11-18 12:50:50'
      }
    },
    {
      id: '439966',
      type: 'person',
      label: '文松行',
      properties: {
        uid: '1258',
        education: '本科',
        gender: '女',
        constellation: '双子座',
        name: '文松行',
        age: 73
      }
    },
    {
      id: '453713',
      type: 'person',
      label: '乔 意',
      properties: {
        uid: '5852',
        education: '专科',
        gender: '女',
        constellation: '水瓶座中国中国中国中国中国中国中国中国中国中国中国中国',
        name: '乔 意',
        age: '34'
      }
    },
    {
      id: '444914',
      type: 'movie',
      label: '旗正飘飘',
      properties: {
        area: '中国',
        name: '旗正飘飘',
        uid: '5806',
        type: '惊悚片中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国',
        publish: '2012-04-16 12:50:50'
      }
    },
    {
      id: '439722',
      type: 'person',
      label: '韩妤琇',
      properties: {
        uid: '1032',
        education: '高中',
        gender: '女中国中国中国中国中国中国中国中国中国中国中国中国',
        constellation: '射手座',
        name: '韩妤琇',
        age: 66
      }
    },
    {
      id: '441630',
      type: 'person',
      label: '孔昀升',
      properties: {
        uid: '2781',
        education: '高中',
        gender: '男',
        constellation: '处女座',
        name: '孔昀升',
        age: 41
      }
    },
    {
      id: '454463',
      type: 'person',
      label: '戴峻齐',
      properties: {
        uid: '6538',
        education: '小学',
        gender: '女',
        constellation: '狮子座',
        name: '戴峻齐',
        age: 32
      }
    },
    {
      id: '456273',
      type: 'person',
      label: '谭书齐',
      properties: {
        uid: '8197',
        education: '初中',
        gender: '女',
        constellation: '双子座',
        name: '杜天友',
        age: 55
      }
    },
    {
      id: '453641',
      type: 'person',
      label: '谭书齐',
      properties: {
        uid: '5786',
        education: '本科',
        gender: '女',
        constellation: '魔羯座',
        name: '谭书齐',
        age: 93
      }
    },
    {
      id: '448075',
      type: 'movie',
      label: 'Ying Wang',
      properties: {
        area: '中国',
        name: 'Ying Wang',
        uid: '4962',
        type: '惊悚片',
        publish: '1998-12-26 12:50:50'
      }
    },
    {
      id: '440634',
      type: 'person',
      label: '钱廷琇',
      properties: {
        uid: '1862',
        education: '初中',
        gender: '女',
        constellation: '射手座',
        name: '钱廷琇',
        age: 32
      }
    },
    {
      id: '442260',
      type: 'person',
      label: '万英盛',
      properties: {
        uid: '3365',
        education: '初中',
        gender: '女',
        constellation: '双鱼座',
        name: '万英盛',
        age: 69
      }
    },
    {
      id: '449500',
      type: 'movie',
      label: '露水红颜',
      properties: {
        area: '中国',
        name: '露水红颜',
        uid: '5533',
        type: '战争片',
        publish: '2014-02-18 12:50:50'
      }
    },
    {
      id: '442587',
      type: 'person',
      label: '徐辛仪',
      properties: {
        uid: '3668',
        education: '专科',
        gender: '男',
        constellation: '狮子座',
        name: '徐辛仪',
        age: 16
      }
    },
    {
      id: '455328',
      type: 'person',
      label: '吕昱季',
      properties: {
        uid: '7329',
        education: '博士',
        gender: '女',
        constellation: '水瓶座',
        name: '吕昱季',
        age: 6
      }
    },
    {
      id: '454616',
      type: 'person',
      label: '金秋英',
      properties: {
        uid: '6679',
        education: '初中',
        gender: '男',
        constellation: '牡羊座',
        name: '金秋英',
        age: 52
      }
    },
    {
      id: '454404',
      type: 'person',
      label: '尹尚妮',
      properties: {
        uid: '6483',
        education: '初中',
        gender: '男',
        constellation: '双子座',
        name: '尹尚妮',
        age: 51
      }
    },
    {
      id: '446540',
      type: 'movie',
      label: 'Ling hu',
      properties: {
        area: '中国',
        name: 'Ling hu',
        uid: '3985',
        type: '惊悚片',
        publish: '2003-05-12 12:50:50'
      }
    },
    {
      id: '442427',
      type: 'person',
      label: '姚仁佩',
      properties: {
        uid: '3521',
        education: '小学',
        gender: '男',
        constellation: '金牛座',
        name: '姚仁佩',
        age: 10
      }
    },
    {
      id: '442003',
      type: 'person',
      label: '易裕盛',
      properties: {
        uid: '3126',
        education: '硕士',
        gender: '男',
        constellation: '巨蟹座',
        name: '易裕盛',
        age: '90'
      }
    },
    {
      id: '440428',
      type: 'person',
      label: '文韦州',
      properties: {
        uid: '1677',
        education: '本科',
        gender: '女',
        constellation: '魔羯座',
        name: '文韦州',
        age: 84
      }
    },
    {
      id: '440149',
      type: 'person',
      label: '袁宸泉',
      properties: {
        uid: '1424',
        education: '专科',
        gender: '男',
        constellation: '巨蟹座',
        name: '袁宸泉',
        age: 92
      }
    },
    {
      id: '454403',
      type: 'person',
      label: '唐廷梅',
      properties: {
        uid: '6482',
        education: '初中',
        gender: '男',
        constellation: '天蝎座',
        name: '唐廷梅',
        age: 57
      }
    },
    {
      id: '456861',
      type: 'person',
      label: '曾荣来',
      properties: {
        uid: '8742',
        education: '博士',
        gender: '女',
        constellation: '水瓶座',
        name: '曾荣来',
        age: 95
      }
    },
    {
      id: '457308',
      type: 'person',
      label: '苏 裕',
      properties: {
        uid: '9152',
        education: '博士',
        gender: '女',
        constellation: '射手座',
        name: '苏 裕',
        age: 50
      }
    },
    {
      id: '449501',
      type: 'movie',
      label: 'The Transporter',
      properties: {
        area: '中国',
        name: 'The Transporter',
        uid: '7304',
        type: '惊悚片',
        publish: '2000-02-29 12:50:50'
      }
    },
    {
      id: '441546',
      type: 'person',
      label: '徐莹俊',
      properties: {
        uid: '2703',
        education: '本科',
        gender: '男',
        constellation: '金牛座',
        name: '徐莹俊',
        age: 38
      }
    }
  ],
  edges: [
    {
      id: '605541',
      target: '445879',
      source: '441217',
      type: 'movie_director',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', hh: 20 }
    },
    {
      id: '6055412',
      target: '445879',
      source: '441217',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', hh: 20 }
    },
    {
      id: '600327',
      target: '445879',
      source: '439966',
      type: 'movie_maker',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', hh: 20 }
    },
    {
      id: '631201',
      target: '445879',
      source: '456285',
      type: 'movie_maker',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', hh: 60 }
    },
    {
      id: '620785',
      target: '445879',
      source: '453713',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', hh: 10, time: '2010-03-04' }
    },
    {
      id: '605545',
      target: '444914',
      source: '441217',
      type: 'movie_director',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b' }
    },
    {
      id: '599286',
      target: '444914',
      source: '439722',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', hh: 27, time: '2009-03-04' }
    },
    {
      id: '607122',
      target: '444914',
      source: '441630',
      type: 'movie_director',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', hh: 50 }
    },
    {
      id: '623838',
      target: '444914',
      source: '454463',
      type: 'movie_director',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b' }
    },
    {
      id: '631155',
      target: '444914',
      source: '456273',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', time: '2010-01-04' }
    },
    {
      id: '620483',
      target: '444914',
      source: '453641',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', time: '2020-03-04' }
    },
    {
      id: '605543',
      target: '448075',
      source: '441217',
      type: 'movie_maker',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', time: '2008-11-04' }
    },
    {
      id: '603145',
      target: '448075',
      source: '440634',
      type: 'movie_director',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b' }
    },
    {
      id: '609675',
      target: '448075',
      source: '442260',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', time: '2008-03-04' }
    },
    {
      id: '605544',
      target: '449500',
      source: '441217',
      type: 'movie_director',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b' }
    },
    {
      id: '611043',
      target: '449500',
      source: '442587',
      type: 'movie_director',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b' }
    },
    {
      id: '606822',
      target: '449500',
      source: '441546',
      type: 'movie_writer',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b' }
    },
    {
      id: '624437',
      target: '449500',
      source: '454616',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', time: '2014-03-04' }
    },
    {
      id: '623591',
      target: '449500',
      source: '454404',
      type: 'movie_writer',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b' }
    },
    {
      id: '605542',
      target: '446540',
      source: '441217',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', time: '2010-03-04' }
    },
    {
      id: '610363',
      target: '446540',
      source: '442427',
      type: 'movie_director',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b' }
    },
    {
      id: '608621',
      target: '446540',
      source: '442003',
      type: 'movie_director',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b' }
    },
    {
      id: '602301',
      target: '446540',
      source: '440428',
      type: 'movie_director',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b' }
    },
    {
      id: '601091',
      target: '446540',
      source: '440149',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', time: '2018-02-04' }
    },
    {
      id: '623585',
      target: '446540',
      source: '454403',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', time: '2018-03-02' }
    },
    {
      id: '633521',
      target: '446540',
      source: '456861',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', time: '2018-03-04' }
    },
    {
      id: '635416',
      target: '446540',
      source: '457308',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', time: '2020-01-04' }
    },
    {
      id: '605546',
      target: '449501',
      source: '441217',
      type: 'movie_writer',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b' }
    },
    {
      id: '60554612',
      target: '2781',
      source: '441217',
      type: 'movie_writer',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b' }
    },
    {
      id: '627332',
      target: '449501',
      source: '455328',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', time: '2013-09-04' }
    },
    {
      id: '62733211',
      target: '449501111',
      source: '455328',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', time: '2012-09-04' }
    },
    {
      id: '4546165344242',
      target: '454616',
      source: '454404',
      type: 'movie_actor',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b', time: '2018-09-04' }
    },
    {
      id: '4616dd5344242',
      target: '442003',
      source: '456285',
      type: 'movie_director',
      properties: { uid: '99914b932bd37a50b983c5e7c90ae93b' }
    }
  ]
}
mockData.edges.forEach((e) => {
  e.label = get(
    find(schema.edges, (ed) => ed.name === e.type),
    'labelName'
  )
})

export default mockData

export function extendNode (node) {
  const { properties, id, type, label } = node
  const nodes = [{ ...node }]
  const edges = []
  for (let i = 0; i < 5; i++) {
    const newProperties = { ...properties }
    Object.keys(newProperties).map((key) => {
      newProperties[key] += i
    })
    nodes.push({
      id: id + i,
      type,
      label: `${label}${i + 1}`,
      properties: newProperties
    })
    const edgeType = get(schema.edges, parseInt(Math.random() * 100) % 5)
    edges.push({
      id: id + (2 * i + 1),
      target: id,
      source: id + i,
      type: edgeType.name,
      label: edgeType.labelName,
      properties: { uid: '99914b932bd37a5' + i, hh: '20' + i }
    })
  }
  return {
    nodes,
    edges
  }
}
