# Hamburg周边局

面向汉堡华人的周边付费活动微信小程序 MVP。第一版使用 `uni-app/Vue`，无后端、无登录、无支付，所有活动数据先通过本地配置维护，咨询、报价、报名和付款通过微信人工确认。

## 第一版页面

- 首页：三大项目入口，突出赶海、观星、Bobo 书店。
- 活动日历：读取本地活动日历配置。
- 活动详情：展示亮点、安全说明、费用说明和加微信咨询。
- 赶海攻略：潮汐、装备、安全边界、路线、FAQ。
- Bobo书店：保留青蛙形象和书店字体气质，只影响 Bobo 专区。
- 社区预告：未来组局社区的内测入口。
- 加微信咨询：统一联系方式、报价说明和二维码占位。

## 内容维护

- 活动内容：`src/data/activities.js`
- 活动日历：`src/data/calendar.js`
- 赶海攻略：`src/data/oysterGuide.js`
- Bobo 书店：`src/data/bobo.js`
- 社区预告：`src/data/community.js`
- 联系方式：`src/data/contact.js`

## 运行方式

1. 用 HBuilderX 打开本目录。
2. 在 `manifest.json` 的 `mp-weixin.appid` 中填入微信小程序 AppID。
3. 运行到微信开发者工具。
4. 把真实微信二维码图片放到 `assets/contact/wechat-qr-placeholder.png`，并按需要替换联系信息。

## 本地验证

```bash
npm test
```

该命令会检查 MVP 必要页面、数据模块、赶海攻略、Bobo 青蛙/字体风格入口和统一微信咨询入口是否存在。
