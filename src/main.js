// import { createApp } from 'vue'
// import App from './App.vue'
// import ElementPlus from 'element-plus';
// import ElIcons from '@element-plus/icons';
//
// // 此处省略若干业务代码
//
// const app = createApp(App);
// for(const name in ElIcons){
//     /*
//      * 以elIcon为前缀的命名规则，是为了适配已经使用属性名添加图标的内置组件，
//      * 例如：<el-button icon="el-icon-refresh"></el-button>
//      */
//     app.component('elIcon' + name, ElIcons[name]);
// }
// app.use(ElementPlus, { size: 'mini', zIndex: 2000 });
// app.mount('#app');

// import { createApp } from 'vue'
// import App from './App.vue'
//
//
// // 新增代码：引入特定组件
// // 此时会自动引入对应的样式文件，无需再手动逐一引入
// import {
//     ElButton, ElIcon
// } from 'element-plus'
//
// const app = createApp(App)
//
//
//
// // 新增代码：注册特定组件
// app.component(ElButton.name, ElButton)
// app.component(ElIcon.name, ElIcon)
//
//
// app.mount('#app')
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@element-plus/icons";

createApp(App).use(ElementPlus).mount("#app");