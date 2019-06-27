<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-container>
        <Headers></Headers>
        <el-main>
            <router-view></router-view>
            <!-- <CardList></CardList> -->
        </el-main>
        <el-footer class="footer">
            版权声明：本文为博主原创文章，未经博主允许不得转载。
        </el-footer>
        <!-- <Footers></Foote   rs> -->
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Headers from './components/header.vue'
import Footers from './components/footer.vue'
import CardList from './components/cardList'
 

export default {
  name: 'app',
  components: {
    Headers,
    Footers,
    CardList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,#app,body {
    height: 100%;
    margin: 0;
}
.footer{
    text-align: center;
    line-height: 60px;
    background: #eee;
    color: #333;
    position: absolute;;
    bottom: -60px;
    left: 0;
    width: 100%;
}
.el-container{
  position: relative;
  min-height: 100%;
}
</style>
