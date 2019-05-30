const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')
const {
    getList,
    getDetail,
    addBlog,
    updateBlog,
    deleteBlog
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
        // const listData = getList(author, keyword)
        const result = getList(author, keyword);
        return result.then(listData => {
            return new SuccessModel(listData)
        })

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
        const updateData = updateBlog(postData)
        return new SuccessModel(updateData)
    }

    //删除
    if (method === 'POST' && path === '/api/blog/delete') {
        const deleteData = deleteBlog(id, author)
        return new SuccessModel(deleteData)
    }

}

module.exports = handleBlogRouter