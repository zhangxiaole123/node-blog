<template>
    <el-header class="padleft">
        张小乐的个人博客网站
        <el-button class="login" type="text">登陆</el-button>
        <Login></Login>
    </el-header>
</template>

<script>
import Login from './login'
export default {
    name: 'headers',
    components: {
        Login
    }
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
