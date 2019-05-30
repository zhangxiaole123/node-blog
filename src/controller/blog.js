const {
    exec
} = require('../db/mysql');

const getList = (author, keyword) => {
    let sql = `selete * from blogs where 1=1 `
    if (author) {
        sql += `and author=${author}`
    }
    if (keyword) {
        sql += `and title like '% ${keyword}%'`
    }
    sql += `order by createtime desc;`
    return exec(sql)
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