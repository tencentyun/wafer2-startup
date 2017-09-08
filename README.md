# Wafer2 简化版 Demo

本仓库是对 [wafer2-startup](https://github.com/tencentyun/wafer2-startup) 的一个精简，降低开发者对 Wafer 解决方案的理解和学习成本。

### 快速添加 CGI 指引

本 Demo 新增快速添加 CGI 指引，手把手指导快速添加后端接口：

1. 打开 `server/routes/index.js` 文件，添加如下语句：

  ```javascript
  router.get('/demo', controllers.demo)
  ```

2. 在 `server/controllers` 下新建一个 `demo.js` 文件，写入如下代码：

   ```javascript
   module.exports = ctx => {
       ctx.state.data = {
           msg: 'Hello World'
       }
   }
   ```

3. 点击开发者工具右上角“腾讯云” - “上传代码”，上传完成再点击“部署开发环境”

4. 点击测试 CGI 按钮，即可看到结果

