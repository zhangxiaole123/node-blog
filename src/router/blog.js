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

const loginCheck = (req)=>{
    if(!req.session.username){
        return Promise.resolve(
            new ErrorModel('尚未登陆')
        )
    }
}

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
        const result = getList(author, keyword);
        return result.then(listData => {
            return new SuccessModel(listData)
        })

    }

    //获取博客详情
    if (method === 'GET' && path === '/api/blog/detail') {
        const detailData = getDetail(author, id)
        return detailData.then(listData => {
            return new SuccessModel(listData)
        })
    }

    //新建博客
    if (method === 'POST' && path === '/api/blog/new') {

        const loginCheckResult = loginCheck(req)
        if(loginCheckResult){
            return loginCheck
        }
        postData.author = req.session.username
        const newData = addBlog(postData)
        return newData.then(listData => {
            return new SuccessModel(listData)
        })
    }

    //更新博客
    if (method === 'POST' && path === '/api/blog/update') {
        const loginCheckResult = loginCheck(req)
        if(loginCheckResult){
            return loginCheck
        }
        const updateData = updateBlog(postData)
        return updateData.then(listData => {
            if(listData){
                return new SuccessModel(listData)
            }else{
                return new ErrorModel('更新失败')
            }
        })
    }

    //删除
    if (method === 'POST' && path === '/api/blog/delete') {
        const loginCheckResult = loginCheck(req)
        if(loginCheckResult){
            return loginCheck
        }
        const {id,author} = postData
        postData.author = req.session.username
        const deleteData = deleteBlog(id, author)
        return deleteData.then(listData => {
            if(listData){
                return new SuccessModel(listData)
            }else{
                return new ErrorModel('删除失败')
            }
        })
    }

}

module.exports = handleBlogRouter