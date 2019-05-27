const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring');
const serverHandle = (req, res) => {
    //设置返回格式
    res.setHeader('Content-type', 'application/json')

    //获取path
    const url = req.url
    req.path = url.split('?')[0]

    // 利用querystring 获取url中的query
    req.query = querystring.parse(url.split('?')[1])

    //处理博客路由
    const blogData = handleBlogRouter(req, res)

    if (blogData) {
        res.end(JSON.stringify(blogData))
        return
    }

    //处理博客路由
    const userData = handleUserRouter(req, res)

    if (userData) {
        res.end(JSON.stringify(userData))
        return
    }

    //未命中路由,返回404

    res.writeHead(404, {
        'Content-type': "text/plain"
    })
    res.write('404 NOT FOUND')
    res.end()
}
module.exports = serverHandle

//env: process.env.NODE_ENV