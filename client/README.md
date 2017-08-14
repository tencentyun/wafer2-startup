腾讯云微信小程序一站式解决方案客户端示例
=====================================

本示例包含：

1. 登录接口使用示例
2. 进行带会话的网络请求示例
3. WebSocket 信道服务使用示例

> 注意：所有示例均需要配合解决方案的云资源运行，具体请到[腾讯云控制台](https://console.qcloud.com/la)进行购买和配置。

## 运行示例

云资源准备好之后，修改 `config.js` 里面的服务域名：

```js
// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'yourid.qcloud.la';
```

修改之后，就可以使用微信开发者工具运行本示例。

## 源码简介

```tree
Demo
├── LICENSE
├── README.md
├── app.js
├── app.json
├── bower.json
├── config.js
├── package.json
├── pages
│   ├── chat
│   │   ├── chat.js
│   │   ├── chat.wxml
│   │   └── chat.wxss
│   └── index
│       ├── index.js
│       ├── index.wxml
│       └── index.wxss
└── vendor
    └── qcloud-weapp-client-sdk/
```

`app.js` 是小程序入口文件。

`app.json` 是小程序的微信配置，其中指定了本示例的两个页面，页面分别在 `pages/index/` 和 `pages/chat/` 目录下。

`config.js` 是我们小程序自己的业务配置。

`wafer2-client-sdk` 是[客户端 SDK](https://github.com/tencentyun/wafer2-client-sdk)