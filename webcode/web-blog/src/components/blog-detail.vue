<template>
    <div>
        <el-input name="" :disabled="detailType==='view'" v-model="detail.title"></el-input>
        <el-input class="content" name="content" type="textarea" autosize  :disabled="detailType==='view'" v-model="detail.content"></el-input>
        <el-button v-if="detailType!=='view'" type="primary" @click="detailType==='new'?savaBlog():savaEditBlog()">保存</el-button>
        <el-button type="primary" @click="editBlog">修改</el-button>
        <el-button type="primary" @click="deleteBlog">删除</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            detailType:"view",
            detail:{
                title:"",
                content:""
            }
        }
    },
    watch:{
        "$route":function (value) { 
            if(value === 'new'){
                this.$set(this,'detail',{})
            }
        }
    },
    methods:{
        deleteBlog(){
            this.$axios({
                method:'POST',
                url:"/api/blog/delete",
                data:JSON.stringify(this.detail),
            })
            .then(res=>{
                if(res.data.success){
                    this.$router.push({ path: '/list'})
                    this.$notify({
                        title: '删除成功',
                        type: 'success'
                    });
                }
            })
        },
        editBlog(){
            this.detailType = 'edit'
        },
        getDetailData(){
            this.$axios({
                method:'GET',
                url:"/api/blog/detail?id="+this.$route.query.id,
            })
            .then(res=>{
                if(res.data.success) this.$set(this,'detail',res.data.data[0]);
            })
        },
        savaBlog(){
            this.$axios({
                method:'POST',
                url:"/api/blog/new",
                data:JSON.stringify(this.detail),
            })
            .then(res=>{
                if(res.data.success){
                    this.$router.push({ path: '/list'})
                    this.$notify({
                        title: '新建成功',
                        type: 'success'
                    });
                }
            })
        },
        savaEditBlog(){
            this.$axios({
                method:'POST',
                url:"/api/blog/update",
                data:JSON.stringify(this.detail),
            })
            .then(res=>{
                if(res.data.success){
                    this.$router.push({ path: '/list'})
                    this.$notify({
                        title: '修改成功',
                        type: 'success'
                    });
                }
            })
        },
        
    },
    mounted(){
        console.log(this.$route)
        this.detailType = this.$route.query.detailType
        if(this.detailType === 'view' || this.detailType === 'edit'){
            this.getDetailData()
        }
        
    }
}
</script>
<style lang="less" scoped>
.content{
    margin-top: 20px;
}
</style>
