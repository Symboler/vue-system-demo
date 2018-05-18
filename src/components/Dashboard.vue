<template>
  <div class="dashboard">
   <el-breadcrumb separator="/">
    <el-breadcrumb-item>主页</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="main-content">
    <el-row :gutter="4">
        <el-col :span="8">
          <el-card shadow="hover" class="user-info-card">
            <div class="user-info-card-main">
              <div class="user-info-card-main-left">
                <img src="static/images/default-head.png" alt="" class="user-photo" />
              </div>
              <div class="user-info-card-main-right">
                <span class="user-name">admin</span>
                <span class="user-play">超级管理员</span>
              </div>
            </div>
            <div class="user-info-card-footer">
              <div class="last-login-time">
                上次登录时间：2018-05-18
              </div>
              <div class="last-login-city">
                上次登录地点：杭州
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
  </div>  
</div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      msg: '平台信息'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .main-content {
    padding:40px;
  }
  .user-info-card{
    width:282px;
  }
  .user-info-card-main{
    border-bottom:2px solid #eee;
    height:120px;
    padding-bottom:10px;
    .user-info-card-main-left{
      display:inline-block;
      .user-photo{
        width:110px;
        height:110px;
        border-radius: 50%;
      }
    }
    .user-info-card-main-right{
      display:inline-block;
      position:relative;
      height:120px;
      width:110px;
      .user-name{
        position:absolute;
        font-size: 30px;
        top: 28px;
        left: 30px;
      }
      .user-play{
        position:absolute;
        top: 60px;
        left: 35px;
        font-size:14px;
        color:#999;
      }
    }
  }
   .user-info-card-footer{
      margin-top:10px;
      font-size: 14px;
      color: #999;
      div{
        line-height: 25px;
      } 
    }
  
</style>
