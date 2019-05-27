const serverHandle = (req, res) => {
    //设置返回格式
    res.setHeader('Content-type', 'application/json')

    const resData = {
        name: "zxl100",
        age: '25',
        env: process.env.NODE_ENV
    }
    res.end(JSON.stringify(resData))
}
module.exports = serverHandle