# node-blog

记录 nodejs 学习过程

## 项目结构
```
node-blog
|---bin         #http 服务相关配置
|---docment        #相关文档
|---logs   日志目录
|---src
    |---conf    #mysql 相关配置
    |--controller  
        |---blog.js  #博客API 请求mysql增删改查逻辑  包括sql语句 返回结果
        |---user.js  # 登陆API 请求mysql登陆逻辑  包括sql注入攻击 XSS 攻击解决方案
    |---db    #mysql 对象 统一执行sql函数
        |---mysql.js  #mysql连接
        |---redis.js   #redis 连接 查询 与设置
    |---model/resModel.js  #统一返回的SUCCESS 或者ERROR 基类方法
    |---router    #博客和登陆的  路由文件
    |---uits.js    #共用
        |---cryp.js  #md5  密码加密
        |---log.js   #写日志
        |---readline.js  #逐行读取日志
     
 |---webcode   web前端代码
......
```
## 下载

```
>git clone https://github.com/zhangxiaole123/node-blog.git
>npm install
>npm run dev
```

