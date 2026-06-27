export const activities = [
  {
    id: 'oyster-coast',
    type: 'outdoor',
    title: '生蚝赶海之旅',
    shortTitle: '赶海',
    coverTone: 'sea',
    tags: ['潮汐窗口', '装备清单', '主理人带队'],
    intro: '在北德海岸跟着潮汐出发，学习判断安全时间、寻找生蚝、体验汉堡周边少见的海岸活动。',
    highlights: [
      '出发前确认潮汐、天气和集合方式',
      '现场讲解装备、路线和安全边界',
      '适合第一次赶海的人，也适合想认识周边朋友的人'
    ],
    safetyTitle: '安全说明',
    safetyNotes: [
      '必须跟随主理人路线，不建议独自行动。',
      '潮汐和天气不适合时会调整日期或取消。',
      '需要穿防滑鞋、防风外套，并准备可清洗袋子。'
    ],
    feeTitle: '费用说明',
    feeNotes: '咨询后根据人数、日期、交通方式和活动条件确认费用。',
    ctaText: '加微信咨询赶海',
    guidePath: '/pages/oyster-guide/index'
  },
  {
    id: 'meteor-aurora',
    type: 'outdoor',
    title: '流星雨/极光观测之旅',
    shortTitle: '观星',
    coverTone: 'sky',
    tags: ['夜间出行', '天气窗口', '自然观测'],
    intro: '选择远离城市光污染的观测点，在合适天气窗口一起等待流星雨、银河或极光机会。',
    highlights: [
      '提前筛选天气、云量和月相',
      '准备夜间保暖、热饮和拍摄建议',
      '适合想体验北德夜空和轻社交的人'
    ],
    safetyTitle: '安全说明',
    safetyNotes: [
      '夜间活动以小队出行为主，集合和返程需提前确认。',
      '流星雨、极光和银河都受自然条件影响，不保证可见。',
      '低温和大风天气需要额外保暖装备。'
    ],
    feeTitle: '费用说明',
    feeNotes: '咨询后根据人数、日期、交通方式和活动条件确认费用。',
    ctaText: '加微信咨询观星'
  },
  {
    id: 'bobo-books',
    type: 'culture',
    title: 'Bobo书店原生活动',
    shortTitle: '书店',
    coverTone: 'book',
    tags: ['中文书店', '读书会', '文化空间'],
    intro: '把 Bobo 书店作为汉堡中文文化空间入口，展示读书会、分享会和线下互动活动。',
    highlights: [
      '了解书店活动和空间信息',
      '发现中文阅读、亚洲文化和城市生活主题',
      '适合安静交流和线下文化活动'
    ],
    safetyTitle: '参与说明',
    safetyNotes: [
      '书店活动以具体场次说明为准。',
      '部分活动可能需要提前预约。',
      '书店视觉元素仅用于 Bobo 专区。'
    ],
    feeTitle: '费用说明',
    feeNotes: '书店活动费用以具体活动说明或微信确认信息为准。',
    ctaText: '查看Bobo书店',
    targetPath: '/pages/bobo/index'
  }
];

export function getActivityById(id) {
  return activities.find((activity) => activity.id === id) || activities[0];
}
