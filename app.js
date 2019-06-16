const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring');

//处理http post请求传递的 data  数据
const getPostData = (req, res) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        //规定CotentType 为 application/json
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }

        let postData = "";
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', _ => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
    return promise
}

const serverHandle = (req, res) => {
    //设置返回格式
    res.setHeader('Content-type', 'application/json')

    //获取path
    const url = req.url
    req.path = url.split('?')[0]

    // 利用querystring 获取url中的query
    req.query = querystring.parse(url.split('?')[1])

    //解析cookie
    req.cookie = {};
    const cookieStr = req.headers.cookie || ""
    cookieStr.split(';').forEach(element => {
        if(!element){
            return
        }
        const arr = element.split('=')
        const key = arr[0].trim()
        const value = arr[1].trim()
        req.cookie[key] = value

    });
    console.log(req.cookie)

    //处理postdate
    getPostData(req).then(postData => {

        req.postData = postData

        //处理博客路由
        // const blogData = handleBlogRouter(req, res)
        const blogResult = handleBlogRouter(req, res);
        if (blogResult) {
            blogResult.then(blogData => {
                res.end(JSON.stringify(blogData))
            })
            return
        }

        //处理登录路由
        const userResult = handleUserRouter(req, res)

        if (userResult) {
            userResult.then(userData => {
                res.end(JSON.stringify(userData))
            })
            return
        }

        //未命中路由,返回404

        res.writeHead(404, {
            'Content-type': "text/plain"
        })
        res.write('404 NOT FOUND')
        res.end()
    })

}
module.exports = serverHandle

//env: process.env.NODE_ENV