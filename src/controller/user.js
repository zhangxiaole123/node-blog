const login = (name, password) => {
    if (name === 'zxl' && password === '123') {
        return {
            success: true,
            msg: "登录成功"
        }
    } else {
        return {
            success: false,
            msg: "登录失败"
        }
    }

}
module.exports = {
    login
}