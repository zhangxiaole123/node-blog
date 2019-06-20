const {exec} = require('../db/mysql')

const login = (name, password) => {
    console.log(name,password)
    let sql = `select * from users where username='${name}' and password='${password}'`
    return exec(sql).then(loginData=>{
        console.log('loginData[0]...',loginData)
        return loginData[0] || {}
    })

}
module.exports = {
    login
}