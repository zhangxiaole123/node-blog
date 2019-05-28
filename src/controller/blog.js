const getList = (author, keyword) => {
    return {
        id: 1,
        title: "1",
        content: "嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻",
        author: author
    }
}
const getDetail = (author, id) => {
    return {
        id: id,
        title: "1",
        content: "标题1",
        author: author
    }
}
const addBlog = (postData = {}) => {
    return Object.assign({
        id: 1,

    }, postData)
}
const updateBlog = (postData = {}) => {
    return Object.assign({
        id: 2,

    }, postData)
}
const deleteBlog = (id, author) => {
    return {
        id: id,
        msg: "删除成功"
    }
}
module.exports = {
    getList,
    getDetail,
    addBlog,
    updateBlog,
    deleteBlog
}