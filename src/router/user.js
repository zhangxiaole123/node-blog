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
        if (loginData.success) {
            return new SuccessModel(loginData)
        } else {
            return new ErrorModel(loginData)
        }
    }
}

module.exports = handleUserRouter