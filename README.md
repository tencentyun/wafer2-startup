# Wafer2 Startup

Wafer 2.0 版本的基础代码资源库

## 开始使用

你只需要三部即可部署属于自己的小程序开发环境。

#### 通过小程序授权登录腾讯云

打开[微信公众平台](https://mp.weixin.qq.com)注册并登录小程序，进入[腾讯云](https://www.qcloud.com/login)，点击右下角“微信公众号”按钮，使用绑定了小程序的微信扫码登录，即成功授权小程序给腾讯云。

#### 下载代码并安装依赖

点击本页面右边绿色的“Clone or download”按钮，然后点击“Download ZIP”下载代码。

你可以可以通过 git 将代码 clone 到本地：

```bash
git clone http://git.code.oa.com/wafer2/wafer2-startup.git
```

打开 CMD，为服务端 Demo 安装依赖：

```bash
cd server

npm install
```

#### 部署到测试环境并启动

下载并打开[微信开发者工具2.0](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html)，扫码登录开发者工具，新建小程序并选择项目目录到你下载本代码的目录（含有 `project.config.json` 文件的目录），如图：

![微信小程序开发工具截图](https://user-images.githubusercontent.com/3380894/29261245-23ee3fde-8101-11e7-8745-77cbb48bc026.png)

打开 `server/config.js` ，修改 MySQL 密码为你的微信小程序的 Appid：

![修改 MySQL 密码](https://user-images.githubusercontent.com/3380894/29261355-a1a9e716-8101-11e7-8748-9d056f058ff7.png)

修改并保存之后，点击右上角的“腾讯云”按钮，然后点击“上传代码”，选中三个选项全量上传代码，即可将代码上传到分配给你的开发环境中：

![上传代码](https://user-images.githubusercontent.com/3380894/29261607-002e0492-8103-11e7-86d8-e24db848f8e4.png)

![上传代码](https://user-images.githubusercontent.com/3380894/29261693-717983f6-8103-11e7-8098-5776fcac2403.png)

上传代码完成之后，点击“部署测试环境”，即可将刚刚上传的代码部署到开发环境中，这一步会返回一个腾讯云自动分配的二级域名，域名已经配置好了 HTTPS 证书，将这个域名写到 `client/config.js` 中，并关闭 TLS 校验：

![二级域名](https://user-images.githubusercontent.com/3380894/29307433-6c6e686e-81d4-11e7-8dd1-bfb00a387cc3.png)

![关闭 TLS 校验](https://user-images.githubusercontent.com/3380894/29307432-6c6b675e-81d4-11e7-9524-e0f404c7ad91.png)

这样，客户端的 Demo 也配置完成，你可以开始联调了。你还可以直接通过这个二级域名访问、开发和测试：

![部署测试环境](https://user-images.githubusercontent.com/3380894/29261608-0060780a-8103-11e7-8108-b6b7b9c6d4bc.png)

## 其他文档

我们还提供了服务端、客户端的 Demo、SDK 的具体文档：

- [Wafer2 服务端 Demo 文档](./server/README.md)
- [Wafer2 服务端 Demo 工具文档](./server/tools.md)
- [Wafer2 客户端 Demo 文档](./client/README.md)
- [Wafer2 服务端 SDK 使用文档](https://github.com/tencentyun/wafer2-node-sdk/blob/master/README.md)
- [Wafer2 服务端 SDK API 文档](https://github.com/tencentyun/wafer2-node-sdk/blob/master/API.md)
- [Wafer2 客户端 SDK 使用文档](https://github.com/tencentyun/wafer2-client-sdk/blob/master/README.md)