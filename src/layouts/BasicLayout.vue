<template>
  <div class="wrapper">
   <el-container>
    <el-aside width="auto" class="el-aside-diy">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo " @open="handleOpen" @close="handleClose" :collapse="isCollapse"  background-color="#2c3c4c"
        text-color="#fff"
        active-text-color="#00b4ed"
        >
        <div class="header-logo">
         <i class="el-icon-picture"></i>
         <span v-show="!isCollapse">个人管理平台</span>
        </div>
        <div class="collapse-bar">
         <i :class="{'el-icon-minus':!isCollapse,'el-icon-plus':isCollapse}" v-on:click="toggle"></i>
        </div>
         <el-menu-item index="1">
          <i class="el-icon-tickets"></i>
          <span slot="title">主页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">常用表单</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <span slot="title">选项4</span>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-news"></i>
          <span slot="title">常用表格</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-rank"></i>
          <span slot="title">树形控件</span>
        </el-menu-item>
         <el-menu-item index="5">
          <i class="el-icon-star-on"></i>
          <span slot="title">echart</span>
        </el-menu-item>
         <el-menu-item index="6">
          <i class="el-icon-news"></i>
          <span slot="title">Tab标签页</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="head-border">
        <div class="pull-left">
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#2b3b4b" active-text-color="#00b4ed">
            <el-menu-item index="1">项目</el-menu-item>
            <el-submenu index="2">
              <template slot="title">环境</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>应用</el-menu-item>
          </el-menu>
        </div>
        <div class="pull-right">
         <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#2b3b4b" active-text-color="#00b4ed">
           <el-submenu index="4">
            <template slot="title">帮助</template>
            <el-menu-item index="4-1">常见问题</el-menu-item>
            <el-menu-item index="4-2">提交工单</el-menu-item>
          </el-submenu>
          <el-menu-item index="5">symboler</el-menu-item>
        </el-menu>
      </div>
    </el-header>
    <el-main class="main-content">
       <router-view/>
    </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
export default {
  name: 'Basiclayout',
  data () {
     return {
        activeIndex: '1',
        activeIndex2: '1',
        isCollapse: true
      };
  },
   methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toggle(){
        this.$data.isCollapse = !this.$data.isCollapse
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .pull-left{
    float:left;
    height: 100%;
  }
  .pull-right{
    float:right;
    height: 100%;
  }
  .head-border{
    border-bottom:1px solid #e6e6e6;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .header-logo{
    height:60px;
    text-align:center;
    background: #12202e;
    line-height:60px;
    width:100%;
    transition: all .3s, padding 0s;
    color:#fff;
    span{
      font-size:20px;
    }
  }
  .collapse-bar{
    text-align:center;
    height:30px;
    background:#3f4c5f;
    line-height:30px;
    color:#fff;
    cursor:pointer;
    transition: all .3s, padding 0s;
  }
  .wrapper{
    .el-aside-diy{
      height: 100vh;
      overflow-x: hidden;
      background-color: rgb(44, 60, 76);
      .el-menu-vertical-demo{
        border:0;
      }
    }
  }
  .main-content{
    background: #edeff0;
  }
</style>
