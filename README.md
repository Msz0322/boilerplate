# react-ts 模板

### 项目介绍


### 更新日志

> 版本更新 v1.0.0 正式上线

### 项目命令

```bash
# 安装npm依赖
npm install

# 启动本地开发环境
npm start

# 单元测试
npm test

# 项目打包
npm run build
```

### 注意事项


### 待优化


### 目录结构

```
 ├─ public                  // 静态文件夹
 | ├─  favicon.ico          // 图标
 | ├─  index.html           // 入口页
 | ├─  manifest.json        // 应用配置
 | └─  robots.txt           // 爬虫协议
 ├─ src
 | ├─ @types                // 生命文档
 | | └─  global.d.ts
 | ├─ api                   // api
 | ├─ assets
 | | ├─ css                 // css
 | | | ├─  base.scss
 | | | └─  initial.scss
 | | ├─ images              // 图片
 | | ├─ lib                 // 库
 | ├─ components            // 组件
 | ├─ interface             // 接口
 | | ├─  index.ts
 | | └─  IOption.ts
 | ├─ router                // 路由
 | | └─  index.tsx
 | ├─ store                 // mobx
 | | ├─ modules
 | | | └─  view.ts
 | | └─  index.tsx
 | ├─ utils                 // 工具
 | | ├─  env.ts
 | | ├─  file.ts
 | | └─  index.ts
 | ├─ views                 // 视图
 | | ├─ App
 | | | ├─  App.test.tsx
 | | | └─  App.tsx
 | | ├─ Index
 | | | └─  Index.tsx
 | | ├─ Show
 | | | └─  Show.tsx
 | ├─  index.tsx            // 入口
 | ├─  react-app-env.d.ts
 | ├─  serviceWorker.ts
 | └─  setupTests.ts
 ├─  .editorconfig
 ├─  .env.development       // 环境变量 - 开发环境
 ├─  .env.production        // 环境变量 - 生产环境
 ├─  .gitignore
 ├─  .prettierrc
 ├─  config-overrides.js    // 复写webpack配置
 ├─  package.json
 ├─  paths.json
 ├─  README.md
 └─  tsconfig.json
```

### 核心模块

### 人员

sz.ma(125569215@qq.com)

**PS:如有优化建议，请反馈至以上人员**

### 项目参考

https://gitee.com/dyb881/react-limit
