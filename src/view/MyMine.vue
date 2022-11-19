<template>
  <div class="myb">
    <div class="mineTop">
      我的
    </div>
    <div class="minehead">
      <div class="shot">
        <!-- 头像 -->
        <img src="../assets/img/head.jpg" alt="">
      </div>
    </div>
    <div class="mylist">
      <p>我的订单</p>
      <!-- 路由 -->
      <div class="line"></div>
      <div class="list">
        <img src="https://obj.pipi.cn/festatic/asgard/resources/images/dpmmweb/mycenter/movie.png" alt="">
        <span>电影</span>
      </div>
    </div>
    <botmbar></botmbar>
  </div>
  
</template>

<script>
import botmbar from "../components/MybtmBar.vue"
export default {
  components:{
    botmbar,
  }
}
</script>

<style lang="less" scoped>
  .myb{
    position: absolute;
    background: #f4f4f4;
    width: 100%;
    height: 100%;
    .mineTop {
      background-color: #df2d2d;
      padding: 14px 0;
      text-align: center;
      color: #fff;
    }
    .minehead {
      height: 150px;
      width: 100%;
      background-size: 100%;
      // 不平铺
      background-repeat: no-repeat;
      background-image: url(https://ts1.cn.mm.bing.net/th/id/R-C.35f089e670f8960ecf67bc6bf2ce0442?rik=4kg5y7mj%2bHJVyg&riu=http%3a%2f%2fbpic.588ku.com%2fback_pic%2f04%2f20%2f10%2f12582d616353d59.jpg!%2ffh%2f300%2fquality%2f90%2funsharp%2ftrue%2fcompress%2ftrue&ehk=MovLkWvhtFmPSJHZCbHij9lN0RBdwLrQwEiFQdMgMqM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1);
      display: flex;
      justify-content: center;
      align-items: center;
      .shot{
        width: 66px;
        height: 66px;
        border-radius: 50%;
        border: 4px solid #fff;
        img {
          width: 66px;
          height: 66px;
          border-radius: 50%;
          display: inline-block;
        }
      }
    }
    .mylist {
      margin-top: 10px;
      padding: 0 15px;
      background: #fff;
      width: 100%;
      box-sizing: border-box;
      text-align: center;
      height: 150px;
      position: relative;
      p {
        position: relative;
        top: 13px;
        font-style: 15px;
        height: 21px;
        display: block;
        z-index: 1;
      }
      .line {
        height: 1px;
        width: 160px;
        position: absolute;
        left: 50%;
        top: 23px;
        margin-left: -80px;
        background: #f0f0f0;
      }
      .list {
        margin-top: 33px;
        display: flex;
        // 改变主轴方向
        flex-direction: column;
        align-items: center;
        img{
          width: 42px;
          height: 42px;
        }
        span{
          margin-top: 10px;
          font-size: 15px;
        }
      }
    }
  }
</style>