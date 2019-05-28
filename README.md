# node-blog

记录 nodejs 学习过程

## 项目结构
```
vue
 |---build         #构建脚本和配置
 |---config        #配置文件目录
 |---mock          #mock接口定义文件目录
 |---src
     |---assets    #资源
     |---css/common.css  #css
     |---font/    #字体图标
     |---js/common.js    #自己定义的全局通用事件
     |---js/conf.js    #项目的配置
     |---js/Lib.js    #暴露接口给组件调用
     |---js/vueFilter.js    #注册vue的全局过滤器	
 |---components 公共组件
     |---Button.vue  按钮组件
     |---hb-head.vue  head组件
 |---router   #路由配置，添加路由时目录结构和views一致
 |---store    #状态配置，要求和router一致
 |---views    #各个页面模块，模块名可以自定义哦！
     |---home    #一级目录
        |---index    #二级目录
             |---index.html
             |---index.js
             |---app.vue
        |---ajax    #二级目录
             |---ajax.html
             |---ajax.js
             |---app.vue
     |---ui    #一级目录
        |---index    #二级目录
             |---index.html
             |---index.js
             |---app.vue
......
```
## 下载

```
>git clone https://github.com/zhangxiaole123/node-blog.git
>npm install
>npm run dev
```

