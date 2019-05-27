const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')
const {
    getList,
    getDetail,
    addBlog

} = require('../controller/blog')


const handleBlogRouter = (req, res) => {
    //获取数据
    const method = req.method
    const path = req.path
    const {
        author,
        keyword,
        id
    } = req.query
    const postData = req.postData;
    //获取博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
    }

    //获取博客详情
    if (method === 'GET' && path === '/api/blog/detail') {
        const detailData = getDetail(author, id)
        return new SuccessModel(detailData)
    }

    //新建博客
    if (method === 'POST' && path === '/api/blog/new') {
        const newData = addBlog(postData)
        return new SuccessModel(newData)
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