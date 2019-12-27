<template>
  <div id="app">
    <el-container>
      <el-aside>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu :index="item.id + ''" v-for="item in appConfig" :key="item.id">
            <template slot="title">
              <span>{{item.appLabelName}}</span>
            </template>
            <el-menu-item 
              :index="item.id + menu.id + ''"
              v-for="menu in item.menuList"
              :key="menu.id"
              @click="onClickMenu($event, `/${item.appName}#/${menu.url}`)">
              {{menu.labelName}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container class="portal-content">
        <el-header class="portal-header">
          Header
          <input v-model="nameInput" style="border: 1px solid #ddd">
          名称{{$store.getters.name}}----{{name}}
        </el-header>
        <el-main class="portal-main">
          <div id="account-app-wrapper" class="account-app-wrapper">
            <div id="account-app-test"></div>
          </div>
          <div id="salary-app-wrapper" class="salary-app-wrapper">
            <div id="salary-app-test"></div>
          </div>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {navigateToUrl} from 'single-spa'
import {mapGetters} from 'vuex'
const appConfig = require('./config/appConfig.json')
export default {
  computed: {
    ...mapGetters(['name'])
  },
  data() {
    return {
      appConfig,
      nameInput: ''
    }
  },
  created() {
    // setTimeout(() => {
      // this.$store.commit('setName', '444ldddddll')
      // console.log(window.store.getters, this.$store.getters, this.$store.getters === window.store.getters)
      // console.log(this.$store)
    // }, 3000);
  },
  watch: {
    nameInput(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$store.commit('setName', newVal)
      }
    }
  },
  methods: {
    onClickMenu(e, url) {
      // console.log(e)
      // e.preventDefault()
      navigateToUrl(url)
    }
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
  body{
    padding: 0;
    margin: 0;
    height: 100%;
  }
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  >.el-container{
    display: flex;
    height: 100%;
    .el-aside{
      /* background: #262b2d; */
      flex: 0 0 200px;
      width: 200px;
      height: 100%;
      border-right: 1px solid #ddd;
      .el-menu{
        height: 100%;
      }
    }
    .portal-content{
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      .portal-header{
        background: #f0f3f6;
        flex: 0 0 60px;
        line-height: 60px;
      }
      .portal-main{
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
