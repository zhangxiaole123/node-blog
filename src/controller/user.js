const {exec} = require('../db/mysql')

const login = (name, password) => {
    let sql = `select * from users where username='${name}' and password='${password}'`
    return exec(sql).then(loginData=>{
        return loginData[0] || {}
    })

}
module.exports = {
    login
}