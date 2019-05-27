const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')
const {
    getList
} = require('../controller/blog')
const handleBlogRouter = (req, res) => {
    const method = req.method
    const path = req.path

    //获取博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        const {
            author,
            keyword
        } = req.query
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
    }

    //获取博客详情
    if (method === 'GET' && path === '/api/blog/detail') {
        return {
            msg: '获取博客详情'
        }
    }

    //新建博客
    if (method === 'POST' && path === '/api/blog/new') {
        return {
            msg: '新建博客'
        }
    }

    //更新博客
    if (method === 'POST' && path === '/api/blog/update') {
        return {
            msg: '更新博客'
        }
    }

    //删除
    if (method === 'POST' && path === '/api/blog/delete') {
        return {
            msg: '删除'
        }
    }

}

module.exports = handleBlogRouter