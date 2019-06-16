const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')
const {
    login
} = require('../controller/user');

const getCookieExprise = ()=>{
    const d = new Date()
    d.setTime(d.getTime() + (24*60*60*1000))
    return d.toGMTString()
}

const handleUserRouter = (req, res) => {
    const method = req.method
    const path = req.path

    if (method === 'GET' && path === '/api/user/login') {
        const {
            username,
            password
        } = req.query

        const loginData = login(username, password)
        return loginData.then(data=>{
            if(data.username){
                res.setHeader('Set-Cookie',`username=${data.username};path=/;httpOnly;expires=${getCookieExprise()} `)
                return new SuccessModel(data.username)
            }else{
                return new ErrorModel('登陆失败')
            }
        })
    }
}

module.exports = handleUserRouter