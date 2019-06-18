const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring');
const { get ,set} = require('./src/db/redis')
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
const getCookieExprise = ()=>{
    const d = new Date()
    d.setTime(d.getTime() + (24*60*60*1000))
    return d.toGMTString()
}

// let SESSION_DATA = {}

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

    //解析session
    let userId = req.cookie.userid
    let needCookie = false
    // if(userId){
    //     if(!SESSION_DATA[userId]){
    //         SESSION_DATA[userId] = {}
    //     }
    // }else{
    //     needCookie = true
    //     userId = Date.now() +'_'+ Math.random()
    //     SESSION_DATA[userId] = {}
    // }

    // req.session = SESSION_DATA[userId]

    //redis 保存session
    if(!userId){
        needCookie = true
        userId = Date.now() +'_'+ Math.random()
        set(userId,{})
    }
    req.sessionId = userId
    get(req.sessionId).then(sessionData=>{
        if(sessionData == null){
            set(req.sessionId,{})
            req.session = {}
        }else{
            req.session = sessionData
        }
        console.log('req.session',req.session)
        return getPostData(req)
    })
    .then(postData => {

        req.postData = postData

        //处理博客路由
        // const blogData = handleBlogRouter(req, res)
        const blogResult = handleBlogRouter(req, res);
        if (blogResult) {
            blogResult.then(blogData => {
                if(needCookie){
                    res.setHeader('Set-Cookie',`userid=${userId};path=/;httpOnly;expires=${getCookieExprise()} `)
                }
                res.end(JSON.stringify(blogData))
            })
            return
        }

        //处理登录路由
        const userResult = handleUserRouter(req, res)

        if (userResult) {
            userResult.then(userData => {
                console.log(userData)
                if(needCookie){
                    res.setHeader('Set-Cookie',`userid=${userId};path=/;httpOnly;expires=${getCookieExprise()} `)
                }
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