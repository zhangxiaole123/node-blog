const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')
const {
    login
} = require('../controller/user');
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
                return new SuccessModel('登陆成功')
            }else{
                return new ErrorModel('登陆失败')
            }
        })
    }
}

module.exports = handleUserRouter