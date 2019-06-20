const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')
const {
    login
} = require('../controller/user');

const {set} = require('../db/redis')

const handleUserRouter = (req, res) => {
    const method = req.method
    const path = req.path

    if (method === 'POST' && path === '/api/user/login') {
        const {
            username,
            password
        } = req.postData

        const loginData = login(username, password)
        return loginData.then(data=>{
            if(data.username){
                req.session.username = data.username;
                req.session.realname = data.realname;
                console.log('req.session is', req.session)
                //同步到redis
                set(req.sessionId,req.session)

                return new SuccessModel(req.session)
            }else{
                return new ErrorModel('登陆失败')
            }
        })
    }

    // if(method === 'GET' && path === '/api/user/login-test'){
    //     console.log(req.session)
    //     if(req.session.username){
    //         return Promise.resolve(
    //             new SuccessModel(req.session)
    //         )
    //     }
    //     return Promise.resolve(
    //         new ErrorModel('尚未登陆')
    //     )
            
    // }
}

module.exports = handleUserRouter