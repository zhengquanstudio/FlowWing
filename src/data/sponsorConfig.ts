// src/data/zanzhuConfig.ts

export const sponsorConfig = {
  title: '赞助支持',
  notice: '您的赞助将用于服务器维护、内容创作和功能开发，帮助我持续提供优质内容。',
  count: 2, // 【重要】这里控制右上角的数字显示
  methods: [
    {

      name: '支付宝',
      type: 'alipay',
      // 确保你的图片放在 public/images/ 目录下，或者修改为你实际的路径
      qrcode: 'https://img.zhengquan.org/img/alipay.jpg',
    },
    {
      name: '微信',
      type: 'wechat',
      qrcode: 'https://img.zhengquan.org/img/wechat.png',
    },
    {
      name: '爱发电',
      type: 'afdian',
      url: 'https://afdian.net/'
    },
    {
      name: 'Ko-fi',
      type: 'kofi',
      url: 'https://ko-fi.com/'
    }
  ],
  sponsors: [
    { name: '张三', amount: 50, date: '2023-10-24' },
    { name: '李四', amount: 20, date: '2023-10-25' },
    { name: '匿名好心人', amount: 100, date: '2023-10-26' }
  ]
};