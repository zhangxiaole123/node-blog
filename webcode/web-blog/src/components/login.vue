<template>
    <el-dialog title="登陆" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="账号" :label-width="formLabelWidth">
                <el-input placeholder="请输入账号" v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align: center;">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="login">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    name:"login",
    data() {
        return {
            dialogFormVisible:true,
            form:{},
            formLabelWidth:"120px"
        }
    },
    methods:{
        login(){
            this.$axios({
                method:'post',
                url:"",
                data:this.qs.stringify(this.form)
            })
            .then(res=>{
                console.log(res)
            })
        }
    }
}
</script>

<style lang="less" scoped>

</style>
