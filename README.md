# Wafer2 Startup

Wafer 2.0 客户端和服务端集合 Demo 仓库。

本仓库适用于想要使用 Wafer SDK 开发的开发者，Demo 对 SDK 进行了详细的使用和介绍，降低开发者的学习成本。

如果你想要更加简单的客户端 Demo，可以查看 [wafer2-quickstart](https://github.com/tencentyun/wafer2-quickstart)。

## 目录

- [开始使用](#开始使用)
  - [一、通过微信公众平台授权登录腾讯云](#一通过微信公众平台授权登录腾讯云)
  - [二、安装开发工具](#二安装开发工具)
  - [三、导入 DEMO 和配置](#三导入-demo-和配置)
  - [四、上传和部署代码](#四上传和部署代码)
- [文档](#其他文档)

## 开始使用

你只需要四步即可部署属于自己的小程序开发环境。

### 一、通过微信公众平台授权登录腾讯云

打开[微信公众平台](https://mp.weixin.qq.com)注册并登录小程序，点击左侧菜单栏中的“设置”，接着点击右侧 Tab 栏中的“开发者工具”，接着点击“腾讯云”，进入腾讯云工具页面，点击开通。此后会弹出一个二维码，通过小程序绑定的微信扫码即可将小程序授权给腾讯云，开通之后会自动进去腾讯云微信小程序控制台，显示开发环境已开通，此时可以进行接下来的操作。

###### 此时通过小程序开发者工具查看腾讯云状态并不会同步，状态会在第一次部署开发环境之后才会同步腾讯云的状态到微信开发者工具上。

![进入微信公众平台后台](https://user-images.githubusercontent.com/3380894/29357289-92f2745a-82a9-11e7-9b42-d1a530f94da2.jpg)

![开通腾讯云](https://user-images.githubusercontent.com/3380894/29357290-92f31086-82a9-11e7-818a-038a0cfd72fc.jpg)

![腾讯云微信小程序控制台](https://user-images.githubusercontent.com/3380894/29357742-2c97ba88-82ab-11e7-8947-de819ad5aa45.png)

### 二、安装开发工具

下载并安装[微信开发者工具 1.0](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，使用小程序绑定的微信号扫码登录开发者工具。

![微信开发者工具](https://user-images.githubusercontent.com/3380894/29358006-2ba9cda4-82ac-11e7-8417-4df838750270.png)

### 三、导入 DEMO 和配置

你可以通过两个途径访问 Github 上 `wafer2-startup` 项目下载 Demo 代码：

1. 直接访问 [Release](https://github.com/tencentyun/wafer2-startup/releases)，点击最新版本的代码，下载打包好的 Demo 代码。

2. 通过 git clone 下载代码并安装依赖：

   ```bash
   git clone https://github.com/tencentyun/wafer2-startup.git
   ```

下载好 Demo 代码之后，使用编辑器打开 Demo 代码中 `server` 目录下的 `config.js` 文件，将其中的 `mysql` 配置项的密码 `pass` 改成你的微信小程序 AppID 。

![修改 MySQL 密码](https://user-images.githubusercontent.com/3380894/29360756-fb2412c4-82b6-11e7-8d6f-c4277cd5d783.jpg)

**安装依赖**

###### 这步非常重要请不要忽略！

接着在下载下来的目录打开 CMD 安装依赖：

```bash
# 切换到 server 文件夹
cd server

# 安装依赖
npm install
```

### 四、上传和部署代码

打开第二步安装的微信开发者工具，点击“小程序项目”按钮，输入小程序 AppID，项目目录选择上一步下载下来的代码目录，点击确定创建小程序项目。

![上传代码](https://user-images.githubusercontent.com/3380894/29361218-1bd9af72-82b9-11e7-9dab-d20fd9aebf7c.png)

进入开发者工具之后，点击界面右上角的腾讯云按钮，在下拉的菜单栏中选择“上传测试代码”，选择“模块上传”并勾选“node_modules之外的代码”和“node_modules”，点击确定开始上传代码：

<img width="1341" alt="上传代码" src="https://user-images.githubusercontent.com/3380894/29876217-bc3a37aa-8dce-11e7-9486-98417ccadfbf.png">

<img width="1341" alt="勾选两个选项并点击确定" src="https://user-images.githubusercontent.com/3380894/29876209-b73f4b14-8dce-11e7-8d4b-cfb5a0b4c809.png">

上传代码完成之后，点击右上角的“项目”按钮，接着选择“腾讯云状态”即可看到腾讯云自动分配给你的开发环境域名：

![figure7](https://user-images.githubusercontent.com/3380894/29362023-b1ed75ea-82bc-11e7-87f4-88c21883196c.jpg)

复制开发环境 request 域名，然后在编辑器中打开 `client/config.js` 文件，将复制的域名填入 `host` 中并保存，保存之后编辑器会自动编译小程序，左边的模拟器窗口即可实时显示出客户端的 Demo：

![修改 host 配置](https://user-images.githubusercontent.com/3380894/29362107-1e3fae84-82bd-11e7-8cc5-8831f432939a.jpg)

在模拟器中点击登录，看到显示登陆成功，即为配置完成，可以开始你的其他开发了。

![登录测试](https://user-images.githubusercontent.com/3380894/29362214-968fd67a-82bd-11e7-899e-76cd7c92d969.jpg)

## 其他文档

我们还提供了服务端、客户端的 Demo、SDK 的具体文档：

- [Wiki 首页](https://github.com/tencentyun/wafer2-startup/wiki)
- [开发环境和生产环境](https://github.com/tencentyun/wafer2-startup/wiki/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%92%8C%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83)
- [自行部署](https://github.com/tencentyun/wafer2-startup/wiki/%E8%87%AA%E8%A1%8C%E9%83%A8%E7%BD%B2)
- [一站式部署](https://github.com/tencentyun/wafer2-startup/blob/master/README.md)
- [常见问题](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)
  - [如何部署代码到开发环境](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2%E4%BB%A3%E7%A0%81%E5%88%B0%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)
  - [如何重启服务器](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E9%87%8D%E5%90%AF%E6%9C%8D%E5%8A%A1%E5%99%A8)
  - [如何恢复初始化环境](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E6%81%A2%E5%A4%8D%E5%88%9D%E5%A7%8B%E5%8C%96%E7%8E%AF%E5%A2%83)
  - [如何远程调试后台代码](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E8%BF%9C%E7%A8%8B%E8%B0%83%E8%AF%95%E5%90%8E%E5%8F%B0%E4%BB%A3%E7%A0%81)
  - [如何查看后台日志](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E6%9F%A5%E7%9C%8B%E5%90%8E%E5%8F%B0%E6%97%A5%E5%BF%97)
  - [如何修改数据库密码](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E4%BF%AE%E6%94%B9%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AF%86%E7%A0%81)
  - [如何新建和修改数据库的库表](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E6%96%B0%E5%BB%BA%E5%92%8C%E4%BF%AE%E6%94%B9%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E5%BA%93%E8%A1%A8)
  - [如何上传图片](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87)
  - [如何部署 Demo 到自己的服务器](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2-demo-%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E6%9C%8D%E5%8A%A1%E5%99%A8)
  - [如何快速新建路由](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E5%BF%AB%E9%80%9F%E6%96%B0%E5%BB%BA%E8%B7%AF%E7%94%B1)
  - [微信后台如何配置客服消息推送接口](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%BE%AE%E4%BF%A1%E5%90%8E%E5%8F%B0%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE%E5%AE%A2%E6%9C%8D%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81%E6%8E%A5%E5%8F%A3)
  - [如何使用服务端 SDK 连接和操作数据库](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8A%A1%E7%AB%AF-sdk-%E8%BF%9E%E6%8E%A5%E5%92%8C%E6%93%8D%E4%BD%9C%E6%95%B0%E6%8D%AE%E5%BA%93)
  - [本地如何搭建开发环境](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E6%9C%AC%E5%9C%B0%E5%A6%82%E4%BD%95%E6%90%AD%E5%BB%BA%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)
- [Wafer2 服务端 Demo 文档](./server/README.md)
- [Wafer2 服务端 Demo 工具文档](./server/tools.md)
- [Wafer2 客户端 Demo 文档](./client/README.md)
- [Wafer2 服务端 SDK 使用文档](https://github.com/tencentyun/wafer2-node-sdk/blob/master/README.md)
- [Wafer2 服务端 SDK API 文档](https://github.com/tencentyun/wafer2-node-sdk/blob/master/API.md)
- [Wafer2 客户端 SDK 使用文档](https://github.com/tencentyun/wafer2-client-sdk/blob/master/README.md)
