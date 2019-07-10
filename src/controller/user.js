const {exec,escape} = require('../db/mysql')
const {genPassword} = require('../uits/cryp')
const login = (name, password) => {
    name = escape(name)
    password = genPassword(password)
    password = escape(password)
    let sql = `select * from users where username=${name} and password=${password}`
    return exec(sql).then(loginData=>{
        console.log('loginData[0]...',loginData)
        return loginData[0] || {}
    })

}
module.exports = {
    login
}