<template>
    <el-header class="padleft">
        张小乐的个人博客网站
        <el-button class="login" type="text" @click="goBack">返回</el-button>
        <el-button class="login" type="text" @click="toNewBlog">新建博客</el-button>
        <el-button class="login" type="text" @click="dialogFormVisible = true">登陆</el-button>
        <Login :dialogFormVisible="dialogFormVisible" @close="close"></Login>
    </el-header>
</template>

<script>
import Login from './login'
export default {
    name: 'headers',
    components: {
        Login
    },
    data(){
        return {
            dialogFormVisible:false
        }
    },
    methods: {
        close(value){
            this.dialogFormVisible = value;
        },
        toNewBlog(){
            this.$router.push({path:'/detail',query: {detailType:'new' }})
        },
        goBack(){
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="less">
.el-header {
    font-size: 20px;
    font-weight: bold;

    &.padleft {
        line-height: 60px;
        background: #0080ff;
        color: #fff;
        padding: 0 50px;
    }
}

.el-button.login {
    margin-top: 8px;
    float: right;
    font-weight: bold;
    font-size: 20px;

    span {
        color: #fff;
    }
}
</style>
