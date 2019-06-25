<template>
    <div>
        <el-card class="user-card" shadow="hover" v-for="item in blogdata" :key="item.title">
            <div class="title" @click="toDetail(item.id)">{{item.title}}</div>
            <span class="author">{{item.author}}</span><span calss="createtime">{{CommonJs.format(item.createdtime)}}</span>
        </el-card>
    </div>
</template>
<script>
export default {
    props:[],
    name:"card-list",
    data(){
        return {
            blogdata:[]
        }
    },
    methods:{
        getBlogData(){
            this.$axios({
                method:'GET',
                url:"/api/blog/list",
            })
            .then(res=>{
                if(res.data.success) this.blogdata = res.data.data;
            })
        },
        toDetail(id){
            this.$router.push({ name: 'detail', params: { id: id }})
        }
    },
    mounted(){
        this.getBlogData()
    }
}
</script>

<style lang="less" scoped>
    .title{
        line-height: 40px;
        font-size: 18px;
        font-weight: bold;
    }
    .author{
        display: inline-block;
        margin-right: 20px;
    }
</style>
<style lang="less">
.user-card {
    margin-bottom: 10px;
    .el-card__body{
        padding:10px;
    }
}

</style>

