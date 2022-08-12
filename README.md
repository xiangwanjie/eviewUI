# eview-ui组件库

文档地址: https://xiangwanjie.github.io/eviewUI/

### 快速开始

#### 1.安装件组件

```bash
npm i eview-ui
```

#### 2.引入组件库
```javascript
//  全局引入
import 'eview-ui/lib/css/index.css';
import EUI from 'eview-ui';
Vue.use(EUI);

// 按需引入
import 'eview-ui/lib/css/demo.css';
import { Demo } from 'eview-ui';
Vue.use(Demo);
```

### 项目启动
使用 node版本v10.15.0

#### 1、本地调试组件服务
```
npm run serve
```
#### 2、组件打包
```
npm run build
```

### 文档服务
使用 node版本v14.16.0
#### 1、文档本地预览
```
npm run docs:dev
```
#### 2、文档打包
```
npm run docs:build
```
#### 3、部署文档到Github站点
```
npm run deploy
```