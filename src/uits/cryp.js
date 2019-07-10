const cryp = require('crypto')
//秘钥
const SECRET_KEY = 'HddUje_64DF';


//md5加密
function md5(content){ 
    let md5 = cryp.createHash('md5');
    return md5.update(content).digest('hex')
}
//加密函数
function genPassword(password){
    const str = `password=${password}&key=${SECRET_KEY}`
    return md5(str)
}

module.exports ={
    genPassword
}