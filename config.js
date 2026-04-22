const siteConfig = {
  // 网站基本信息
  site: {
    name: 'TradePro',
    domain: 'https://tradepro.com',
    logo: {
      text: 'TradePro',
      icon: 'T'
    },
    language: 'zh', // 默认语言: zh, en
    seo: {
      keywords: '外贸公司, 全球贸易解决方案, 产品定制, 供应链管理, 国际市场拓展',
      author: 'TradePro Team'
    }
  },
  
  // 配色方案配置
  colors: {
    // 方案一：专业蓝色系
    blueScheme: {
      primary: '#1e40af', // 主蓝色
      secondary: '#3b82f6', // 辅助蓝色
      accent: '#93c5fd', // 浅蓝色
      white: '#ffffff', // 白色
      lightGray: '#f3f4f6', // 浅灰
      mediumGray: '#9ca3af', // 中灰
      darkGray: '#374151', // 深灰
      black: '#111827' // 黑色
    },
    // 方案二：简约白色系
    whiteScheme: {
      primary: '#ffffff', // 主白色
      secondary: '#3b82f6', // 辅助蓝色
      accent: '#10b981', // 点缀绿色
      lightGray: '#f9fafb', // 超浅灰
      mediumGray: '#f3f4f6', // 浅灰
      darkGray: '#9ca3af', // 中灰
      text: '#374151', // 文本颜色
      darkText: '#111827' // 深色文本
    },
    // 当前使用的配色方案
    current: 'whiteScheme' // 可切换为 'whiteScheme'
  },
  
  // SEO配置
  seo: {
    zh: {
      index: {
        title: '外贸公司 - 全球贸易解决方案 | TradePro',
        description: 'TradePro是专业的全球贸易解决方案提供商，拥有15年行业经验，为您提供产品定制、供应链管理、全球市场拓展等一站式服务。'
      },
      solutions: {
        title: '全方位贸易解决方案 | TradePro',
        description: 'TradePro提供从产品开发到物流配送的一站式贸易解决方案，包括产品定制、供应链管理、全球市场拓展和品质控制。'
      },
      products: {
        title: '产品中心 - 高品质产品 | TradePro',
        description: 'TradePro提供多种高品质产品，包括消费电子、家居用品、户外用品和商务礼品，满足全球客户的不同需求。'
      },
      cases: {
        title: '客户案例 - 成功故事 | TradePro',
        description: '了解全球知名品牌如何通过TradePro的贸易解决方案实现业务增长，包括市场拓展、供应链优化等成功案例。'
      },
      news: {
        title: '新闻中心 - 公司动态 | TradePro',
        description: '关注TradePro的最新动态和行业资讯，了解全球贸易趋势、公司新闻和活动信息。'
      },
      about: {
        title: '关于我们 - 全球贸易伙伴 | TradePro',
        description: 'TradePro是您的全球贸易伙伴，拥有15年行业经验，为全球客户提供专业的贸易解决方案。'
      },
      contact: {
        title: '联系我们 - TradePro',
        description: '联系TradePro，了解如何通过我们的专业贸易解决方案帮助您拓展全球市场，创造商业价值。'
      }
    }
  },
  
  // 导航菜单
  navigation: {
    zh: [
      { name: '首页', url: 'index.html', id: 'home' },
      { name: '解决方案', url: 'solutions.html', id: 'solutions' },
      { name: '产品中心', url: 'products.html', id: 'products' },
      { name: '客户案例', url: 'cases.html', id: 'cases' },
      { name: '新闻中心', url: 'news.html', id: 'news' },
      { name: '关于我们', url: 'about.html', id: 'about' },
      { name: '联系我们', url: 'contact.html', id: 'contact' }
    ]
  },
  
  // 首页内容
  home: {
    zh: {
      hero: {
        badge: '专业的全球贸易解决方案',
        title: '连接全球市场<br>创造商业价值',
        desc: '我们拥有15年以上的外贸经验，为您提供高品质的产品和专业的服务，助力您的品牌走向世界',
        btn1: '探索解决方案',
        btn2: '联系我们'
      },
      stats: [
        { number: '15+', text: '年行业经验' },
        { number: '500+', text: '全球客户' },
        { number: '2000+', text: '成功案例' },
        { number: '30+', text: '国家地区' }
      ],
      solutions: {
        tag: '我们的服务',
        title: '全方位贸易解决方案',
        desc: '从产品开发到物流配送，我们提供一站式服务，让您的全球贸易更简单',
        items: [
          {
            icon: 'fa-cubes',
            title: '产品定制开发',
            desc: '根据您的需求，提供专业的产品定制服务，从设计到生产全程把控品质'
          },
          {
            icon: 'fa-truck',
            title: '供应链管理',
            desc: '优化您的供应链，从采购、生产到配送全流程高效管理'
          },
          {
            icon: 'fa-globe',
            title: '全球市场拓展',
            desc: '帮助您进入全球市场，提供市场分析和本地化服务'
          },
          {
            icon: 'fa-shield',
            title: '品质控制',
            desc: '严格的品质控制体系，确保每一件产品都符合国际标准'
          }
        ]
      },
      products: {
        tag: '热门产品',
        title: '精选产品',
        desc: '我们提供多种高品质产品，满足全球客户的不同需求',
        items: [
          { name: '智能手机', desc: '高端智能手机，支持全球频段' },
          { name: '智能家居', desc: '智能家电，提升生活品质' },
          { name: '户外装备', desc: '专业户外用品，适合各种环境' },
          { name: '商务礼品', desc: '精致商务礼品，彰显品牌价值' }
        ]
      },
      cases: {
        tag: '客户案例',
        title: '成功故事',
        desc: '了解全球知名品牌为何选择与我们合作',
        items: [
          { name: 'TechCorp 欧洲市场拓展', desc: '帮助TechCorp成功进入欧洲市场，年销售额增长200%' },
          { name: 'HomeStyle 全球供应链优化', desc: '为HomeStyle优化全球供应链，降低成本30%' },
          { name: 'OutdoorPro 品牌国际化', desc: '助力OutdoorPro品牌全球化，覆盖30+国家' }
        ]
      },
      cta: {
        tag: '开始合作',
        title: '准备好开启您的全球贸易之旅了吗？',
        desc: '无论您有什么需求，我们都会为您提供专业的解决方案',
        btn: '联系我们'
      }
    }
  },
  
  // 解决方案页面
  solutions: {
    zh: {
      page: {
        tag: '解决方案',
        title: '全方位贸易解决方案',
        desc: '从产品开发到物流配送，我们提供一站式服务，让您的全球贸易更简单'
      },
      items: [
        {
          title: '产品定制开发',
          desc: '根据您的需求，提供专业的产品定制服务，从设计到生产全程把控品质。',
          list: ['产品设计与打样', '小批量生产', '大规模量产']
        },
        {
          title: '供应链管理',
          desc: '优化您的供应链，从采购、生产到配送全流程高效管理。',
          list: ['供应商管理', '库存优化', '物流配送']
        },
        {
          title: '全球市场拓展',
          desc: '帮助您进入全球市场，提供市场分析和本地化服务。',
          list: ['市场调研', '品牌定位', '渠道建设']
        },
        {
          title: '品质控制',
          desc: '严格的品质控制体系，确保每一件产品都符合国际标准。',
          list: ['原材料检测', '生产过程监控', '成品检验']
        }
      ],
      cta: {
        title: '需要定制解决方案？',
        desc: '我们的专家团队将根据您的具体需求，为您提供量身定制的解决方案',
        btn: '联系我们'
      }
    }
  },
  
  // 产品中心页面
  products: {
    zh: {
      page: {
        tag: '产品中心',
        title: '热门产品',
        desc: '我们提供多种高品质产品，满足全球客户的不同需求'
      },
      filters: ['全部', '消费电子', '家居用品', '户外用品', '商务礼品'],
      categories: [
        {
          name: '消费电子',
          items: [
            { name: '智能手机', desc: '高端智能手机，支持全球频段' },
            { name: '平板电脑', desc: '轻薄便携，性能强劲' },
            { name: '智能手表', desc: '健康监测，智能提醒' }
          ]
        },
        {
          name: '家居用品',
          items: [
            { name: '智能家居套装', desc: '智能控制，节能环保' },
            { name: '厨房电器', desc: '高品质厨房电器，提升生活品质' },
            { name: '家居装饰', desc: '时尚美观的家居装饰品' }
          ]
        },
        {
          name: '户外用品',
          items: [
            { name: '户外帐篷', desc: '防水耐用，适合各种环境' },
            { name: '登山装备', desc: '专业登山装备，安全可靠' },
            { name: '户外服装', desc: '防水透气，舒适耐用' }
          ]
        },
        {
          name: '商务礼品',
          items: [
            { name: '定制钢笔', desc: '精美定制钢笔，彰显品质' },
            { name: '商务笔记本', desc: '高品质商务笔记本' },
            { name: '品牌礼品套装', desc: '定制品牌礼品套装' }
          ]
        }
      ],
      cta: {
        title: '需要更多产品信息？',
        desc: '联系我们，获取完整的产品目录和定制报价',
        btn: '联系我们'
      }
    }
  },
  
  // 客户案例页面
  cases: {
    zh: {
      page: {
        tag: '客户案例',
        title: '他们与我们合作',
        desc: '了解全球知名品牌为何选择与我们合作'
      },
      tags: ['消费电子', '家居用品', '商务礼品', '户外用品', '欧洲市场', '亚洲市场', '美洲市场', '全球市场', '中东市场'],
      items: [
        {
          title: 'TechCorp 欧洲市场拓展',
          desc: '帮助TechCorp成功进入欧洲市场，年销售额增长200%。',
          tags: ['消费电子', '欧洲市场']
        },
        {
          title: 'HomeStyle 全球供应链优化',
          desc: '为HomeStyle优化全球供应链，降低成本30%，提高交付效率。',
          tags: ['家居用品', '全球市场']
        },
        {
          title: 'OutdoorPro 品牌国际化',
          desc: '助力OutdoorPro品牌全球化，覆盖30+国家，品牌知名度提升50%。',
          tags: ['户外用品', '全球市场']
        },
        {
          title: 'GiftExpress 产品定制服务',
          desc: '为GiftExpress提供定制礼品服务，帮助其成为行业领导者。',
          tags: ['商务礼品', '美洲市场']
        },
        {
          title: 'ElectroTech 品质控制体系',
          desc: '为ElectroTech建立完善的品质控制体系，产品合格率提升至99.9%。',
          tags: ['消费电子', '亚洲市场']
        },
        {
          title: 'HomeLiving 市场进入策略',
          desc: '帮助HomeLiving制定中东市场进入策略，成功打开当地市场。',
          tags: ['家居用品', '中东市场']
        }
      ],
      cta: {
        title: '成为下一个成功案例',
        desc: '联系我们，了解如何像这些客户一样实现业务增长',
        btn: '开始合作'
      }
    }
  },
  
  // 新闻中心页面
  news: {
    zh: {
      page: {
        tag: '新闻中心',
        title: '公司新闻',
        desc: '了解我们的最新动态和行业资讯'
      },
      filters: ['全部', '公司新闻', '行业资讯', '活动信息'],
      items: [
        {
          date: '2026-04-20',
          category: '公司新闻',
          title: '公司荣获年度最佳外贸企业奖',
          desc: '我们很荣幸地宣布，TradePro被评为2026年度最佳外贸企业，这是对我们团队努力的认可。'
        },
        {
          date: '2026-04-15',
          category: '行业资讯',
          title: '2026年全球贸易趋势分析',
          desc: '最新数据显示，全球贸易正在复苏，新兴市场成为增长的主要动力。'
        },
        {
          date: '2026-04-10',
          category: '活动信息',
          title: '参加2026年春季广交会',
          desc: '我们将参加2026年春季广交会，欢迎新老客户前来洽谈合作。'
        },
        {
          date: '2026-04-05',
          category: '公司新闻',
          title: '公司成立15周年庆典',
          desc: 'TradePro迎来15周年华诞，感谢所有客户和合作伙伴的支持与信任。'
        },
        {
          date: '2026-03-28',
          category: '行业资讯',
          title: '东南亚市场贸易机会分析',
          desc: '东南亚市场正成为全球贸易的热点，我们为您分析最新的市场机会。'
        },
        {
          date: '2026-03-20',
          category: '活动信息',
          title: '与欧洲客户签署战略合作协议',
          desc: '我们与欧洲知名品牌达成战略合作，共同开拓全球市场。'
        }
      ],
      cta: {
        title: '订阅我们的新闻',
        desc: '获取最新的公司动态和行业资讯',
        placeholder: '您的邮箱',
        btn: '订阅'
      }
    }
  },
  
  // 关于我们页面
  about: {
    zh: {
      page: {
        tag: '关于我们',
        title: '您的全球贸易伙伴',
        desc: '15年行业经验，为全球客户提供专业的贸易解决方案'
      },
      stats: [
        { number: '15+', text: '年行业经验' },
        { number: '500+', text: '全球客户' },
        { number: '2000+', text: '成功案例' },
        { number: '30+', text: '国家地区' }
      ],
      story: {
        tag: '我们的故事',
        title: '连接全球，创造价值',
        desc1: '我们是一家专业的全球贸易解决方案提供商，拥有15年以上的外贸行业经验。',
        desc2: '从成立之初，我们就致力于为全球客户提供高品质的产品和专业的服务，帮助他们拓展国际市场，实现业务增长。',
        desc3: '凭借丰富的行业经验和专业的团队，我们已经成功为来自全球30多个国家和地区的500多家客户提供了贸易解决方案，帮助他们在国际市场上取得成功。'
      },
      team: {
        title: '专业团队',
        members: [
          { name: '张明', position: 'CEO', desc: '15年外贸行业经验，专注于全球市场拓展' },
          { name: '李华', position: '运营总监', desc: '10年供应链管理经验，优化全球供应链' },
          { name: '王芳', position: '销售总监', desc: '8年国际销售经验，拓展全球客户网络' }
        ]
      },
      cta: {
        title: '准备好开始合作了吗？',
        desc: '联系我们，了解更多关于我们的服务如何帮助您的业务增长',
        btn: '联系我们'
      }
    }
  },
  
  // 联系我们页面
  contact: {
    zh: {
      header: {
        tag: '联系我们',
        title: '开始合作',
        description: '我们期待与您建立联系，为您提供专业的贸易解决方案'
      },
      info: {
        title: '联系信息',
        items: [
          {
            title: '地址',
            content: '中国上海市浦东新区',
            icon: {
              class: 'fa-map-marker',
              bg: 'bg-blue-100',
              color: 'text-blue-600'
            }
          },
          {
            title: '电话',
            content: '+86 123 4567 8910',
            icon: {
              class: 'fa-phone',
              bg: 'bg-green-100',
              color: 'text-green-600'
            }
          },
          {
            title: '邮箱',
            content: 'info@tradepro.com',
            icon: {
              class: 'fa-envelope',
              bg: 'bg-purple-100',
              color: 'text-purple-600'
            }
          },
          {
            title: '工作时间',
            content: '周一至周五: 9:00 - 18:00',
            icon: {
              class: 'fa-clock-o',
              bg: 'bg-orange-100',
              color: 'text-orange-600'
            }
          }
        ]
      },
      follow: {
        title: '关注我们',
        social: [
          { icon: 'fa-facebook', url: '#' },
          { icon: 'fa-twitter', url: '#' },
          { icon: 'fa-linkedin', url: '#' }
        ]
      },
      map: {
        text: '地图加载中...'
      }
    }
  },
  
  // 页脚内容
  footer: {
    zh: {
      description: '专业的全球贸易解决方案提供商，帮助您拓展全球市场，创造商业价值。',
      quickLinks: {
        title: '快速导航',
        links: [
          { name: '首页', url: 'index.html' },
          { name: '解决方案', url: 'solutions.html' },
          { name: '产品中心', url: 'products.html' },
          { name: '客户案例', url: 'cases.html' },
          { name: '新闻中心', url: 'news.html' },
          { name: '关于我们', url: 'about.html' },
          { name: '联系我们', url: 'contact.html' }
        ]
      },
      contact: {
        title: '联系我们',
        address: '中国上海市浦东新区',
        phone: '+86 123 4567 8910',
        email: 'info@tradepro.com'
      },
      follow: {
        title: '关注我们',
        social: [
          { icon: 'fa-facebook', url: '#' },
          { icon: 'fa-twitter', url: '#' },
          { icon: 'fa-linkedin', url: '#' }
        ]
      },
      rights: '保留所有权利.'
    }
  }
};