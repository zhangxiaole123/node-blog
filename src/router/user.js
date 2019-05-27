const handleUserRouter = (req, res) => {
    const method = req.method
    const path = req.path

    if (method === 'POST' && path === '/api/user/login') {
        return {
            msg: "登陆"
        }
    }
}

module.exports = handleUserRouter