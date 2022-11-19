<template>
  <div class="main">
    <!-- 头部logo -->
    <div class="catTop">
      <span></span>
      <h2>猫眼电影</h2>
      <span class="iconfont icon-liebiao2"></span>
    </div>
    <!-- 猫眼导航栏 -->
    <div class="catNav">
      <div class="catLeft">
        <img src="../assets/img/猫眼logo.png" alt="">
      </div>
      <div class="catRight">
          <h3>发现最新最热的电影</h3>
          <h2>打开APP<span class="iconfont icon-xiangyou1"></span></h2>
        </div>
    </div>
    <!-- 顶部选项卡 -->
    <div class="current">
      <!-- 城市选择区 -->
      <router-link tag="div" to="/position" class="city">
        <span>{{cityname}}</span>
        <span class="iconfont icon-xiajiantou"></span>
      </router-link>
      <!-- 选项卡区 -->
      <div class="cinema">
        <div @click="gochange1" :class="{'router-link-active':moveIndex == 0}">热映</div>
        <div @click="gochange2" :class="{'router-link-active':moveIndex == 1}">影院</div>
        <div @click="gochange3" :class="{'router-link-active':moveIndex == 2}">待映</div>
        <div @click="gochange4" :class="{'router-link-active':moveIndex == 3.3}">经典电影</div>
        <span :style="{left : 54 * moveIndex + 7 + 'px'}"></span>
      </div>
      <!-- 搜索 -->
      <!-- <span class="search iconfont icon-fangdajing"></span> -->
      <router-link tag="span" to="/search" class="search iconfont icon-fangdajing"></router-link>
    </div>
    <!-- 路由显示 -->
    <div>
      <router-view :cityip="cityip"></router-view>
    </div>
  </div>
</template>

<script>
  import "../assets/font/iconfont.js"
  export default {
    props:["cityip","cityname"],
    data(){
      return {
        moveIndex:0,
      }
    },
    methods:{
      gochange1(){
        this.moveIndex = 0;
        this.$router.push("/index/one")
      },
      gochange2(){
        this.moveIndex = 1;
        this.$router.push("/index/two")
      },
      gochange3(){
        this.moveIndex = 2.1;
        this.$router.push("/index/three")
      },
      gochange4(){
        this.moveIndex = 3.5;
        this.$router.push("/index/four")
      },
      gosearch(){
      }
    }
  }
</script>
<style lang="less" scoped>
  .main{
    
    // 头部logo
    .catTop{
      box-sizing: border-box;
      height: 50px;
      width: 100%;
      padding: 0 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #e54847;
      color: #fff;
      span {
        font-size: 18px;
        color: #fff;
      }
    }
    // 导航
    .catNav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      padding: 0 10px;
      border-bottom: 1px solid #f1f1f1;
      .catLeft {
        width: 94px;
        height: 39px;
        img {
          width: 94px;
          height: 39px;
        }
      }
      .catRight {
        display: flex;
        align-items: center;
        h3{
          font-size: 14px;
          font-weight: bold;
          color: #666;
          padding-right: 10px;
          border-right: 1px solid #f4f4f4;
        }
        h2{
          font-size: 16px;
          font-weight: bold;
          color: #b37ea6;
          span{
            font-style: 12px;
            font-weight: normal;
          }
        }
      }
    }
    //顶部选项卡
    .current{
      display: flex;
      height: 44px;
      border-bottom: 1px solid #ededed;
      align-items: center;
      justify-content: space-between;
      padding: 0 14px;
      .city {
        margin-right: 12px;
        .iconfont {
          font-size: 12px;
          color: #b0b0b0;
          display: inline-block;
          transform: scale(0.5s);
        }
      }
      .cinema {
        display: flex;
        flex: 1;
        justify-content: space-between;
        font-weight: bold;
        position: relative;
        span{
          position: absolute;
          background: #f03d37;
          width: 20px;
          height: 4px;
          left: 6px;
          bottom: -8px;
          transition: 0.5s;
        }
      }
      .search{
        color: #ef4339;
        font-size: 22px;
        font-weight: bold;
        margin-left: 30px;
      }
    }
  }
</style>