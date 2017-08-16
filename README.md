# Wafer2 Startup

Wafer 2.0 基础 Demo 代码资源库

[TOC]

## 开始使用

你只需要四部即可部署属于自己的小程序开发环境。

#### 1. 通过微信公众平台授权登录腾讯云

打开[微信公众平台](https://mp.weixin.qq.com)注册并登录小程序，点击左侧菜单栏中的“设置”，接着点击右侧 Tab 栏中的“开发者工具”，接着点击“腾讯云”，进入腾讯云工具页面，点击开通。此后会弹出一个二维码，通过小程序绑定的微信扫码即可将小程序授权给腾讯云，开通之后会自动进去腾讯云微信小程序控制台，显示开发环境已开通，此时可以进行接下来的操作。

![进入微信公众平台后台](https://user-images.githubusercontent.com/3380894/29357289-92f2745a-82a9-11e7-9b42-d1a530f94da2.jpg)

![开通腾讯云](https://user-images.githubusercontent.com/3380894/29357290-92f31086-82a9-11e7-818a-038a0cfd72fc.jpg)

![腾讯云微信小程序控制台](https://user-images.githubusercontent.com/3380894/29357742-2c97ba88-82ab-11e7-8947-de819ad5aa45.png)

#### 2. 安装开发工具

下载并安装[微信开发者工具 1.0](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，使用小程序绑定的微信号扫码登录开发者工具。

![微信开发者工具](https://user-images.githubusercontent.com/3380894/29358006-2ba9cda4-82ac-11e7-8417-4df838750270.png)

#### 3. 导入 DEMO 和配置

你可以通过两个途径访问 Github 上 `wafer2-startup` 项目下载 Demo 代码：

1. 直接访问 [Release](https://github.com/tencentyun/wafer2-startup/releases)，点击最新版本的代码，下载打包好的 Demo 代码。

2. 通过 git clone 下载代码：

   ```bash
   git clone https://github.com/tencentyun/wafer2-startup.git
   ```

下载好 Demo 代码之后，使用编辑器打开 Demo 代码中 `server` 目录下的 `config.js` 文件，将其中的 `mysql` 配置项的密码 `pass` 改成你的微信小程序 AppID 。

![修改 MySQL 密码](https://user-images.githubusercontent.com/3380894/29360756-fb2412c4-82b6-11e7-8d6f-c4277cd5d783.jpg)

接着在下载下来的目录打开 CMD 安装依赖：

```bash
# 切换到 server 文件夹
cd server

# 安装依赖
npm install
```

#### 4. 上传和部署代码

打开第二步安装的微信开发者工具，点击“小程序项目”按钮，输入小程序 AppID，项目目录选择上一步下载下来的代码目录，点击确定创建小程序项目。

![上传代码](https://user-images.githubusercontent.com/3380894/29361218-1bd9af72-82b9-11e7-9dab-d20fd9aebf7c.png)

进入开发者工具之后，点击界面右上角的腾讯云按钮，在下拉的菜单栏中选择“上传并部署代码”，勾选“node_modules之外的代码”和“node_modules”，点击确定开始上传并部署代码：

![上传代码](https://user-images.githubusercontent.com/3380894/29361779-a3606c72-82bb-11e7-863e-d7bc0b806787.jpg)

![勾选两个选项并点击确定](https://user-images.githubusercontent.com/3380894/29361778-a35a116a-82bb-11e7-9f70-0321190ed2e4.jpg)

上传代码完成之后，点击右上角的“项目”按钮，接着选择“腾讯云状态”即可看到腾讯云自动分配给你的开发环境域名：

![figure7](https://user-images.githubusercontent.com/3380894/29362023-b1ed75ea-82bc-11e7-87f4-88c21883196c.jpg)

复制开发环境 request 域名，然后在编辑器中打开 `client/config.js` 文件，将复制的域名填入 `host` 中并保存，保存之后编辑器会自动编译小程序，左边的模拟器窗口即可实时显示出客户端的 Demo：

![修改 host 配置](https://user-images.githubusercontent.com/3380894/29362107-1e3fae84-82bd-11e7-8cc5-8831f432939a.jpg)

在模拟器中点击登录，看到显示登陆成功，即为配置完成，可以开始你的其他开发了。

![登录测试](https://user-images.githubusercontent.com/3380894/29362214-968fd67a-82bd-11e7-899e-76cd7c92d969.jpg)

## 其他文档

我们还提供了服务端、客户端的 Demo、SDK 的具体文档：

- [Wafer2 服务端 Demo 文档](./server/README.md)
- [Wafer2 服务端 Demo 工具文档](./server/tools.md)
- [Wafer2 客户端 Demo 文档](./client/README.md)
- [Wafer2 服务端 SDK 使用文档](https://github.com/tencentyun/wafer2-node-sdk/blob/master/README.md)
- [Wafer2 服务端 SDK API 文档](https://github.com/tencentyun/wafer2-node-sdk/blob/master/API.md)
- [Wafer2 客户端 SDK 使用文档](https://github.com/tencentyun/wafer2-client-sdk/blob/master/README.md)