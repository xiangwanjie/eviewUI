# 快速开始

#### 安装件组件

```bash
npm i eview-ui
```

#### 使用组件库
> 在 main.js 中引入组件库
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