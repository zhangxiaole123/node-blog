<template>
    <div>
        <el-input name="" :disabled="isView" v-model="detail.title"></el-input>
        <el-input class="content" name="content" type="textarea" :rows="6" :disabled="isView" v-model="detail.content"></el-input>
        <el-button type="primary" @click="savaBlog">新建博客</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isView:false,
            detail:{
                title:"",
                content:""
            }
        }
    },
    methods:{
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
        }
    },
    mounted(){
        console.log(this.$route)
        if(this.$route.query.isView){
            this.isView = true
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
