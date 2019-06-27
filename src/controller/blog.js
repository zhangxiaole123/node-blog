const {
    exec
} = require('../db/mysql');

const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author='${author}'`
    }
    if (keyword) {
        sql += ` and title like '%${keyword}%'`
    }
    sql += `order by createdtime desc;`
    return exec(sql)
}
const getDetail = (author, id) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author='${author}'`
    }
    if(id){
        sql += `and id='${id}'`
    }
    return exec(sql)
}
const addBlog = (postData = {}) => {
    const {title,content,author} = postData;
    const createdtime = Date.now();
    let sql = `insert into blogs(title,content,author,createdtime) values ('${title}','${content}','${author}','${createdtime}')`
    return exec(sql).then(newData=>{
        return {
            id:newData.insertId
        }
    })
}
const updateBlog = (postData = {}) => {
    const {title,content,author,id} = postData
    let sql = `update blogs set title='${title}', content='${content}', createdtime='${Date.now()} where author='${author}' and id='${id}'`
    return exec(sql).then(updateData=>{
        if(updateData.affectedRows>0){
            return true
        }
        return false
    })
}
const deleteBlog = (id, author) => {
    let sql = `delete from blogs where id='${id}' and author='${author}'`
    return exec(sql).then(deleteData=>{
        if(deleteData.affectedRows>0){
            return true
        }
        return false
    })
}
module.exports = {
    getList,
    getDetail,
    addBlog,
    updateBlog,
    deleteBlog
}