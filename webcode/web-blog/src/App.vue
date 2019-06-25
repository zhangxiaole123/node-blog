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
body {
    margin: 0;
}
.footer{
    text-align: center;
    line-height: 60px;
    background: #eee;
    color: #333;
}
</style>
