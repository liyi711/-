// 引入
<template>
  <div class="main">
    <div class="showMovie" v-if="hotMovieList">
      <div class="niceTalk">{{hotMovieList.title}}</div>
      <!-- 好评电影层 -->
        <div class="more">
          <router-link class="niceMovie" :to="'/details?movieId='+item.movieId"  v-for="item in hotMovieList.movieList" :key="item.movieId">
            <div class="img">
              <img :src="item.poster" />
              <span v-if="item.score">观众评分 &nbsp;{{item.score}}</span>
              <!-- 阴影层 -->
              <div></div>
            </div>
          <h4>{{item.name}}</h4>
        </router-link>
      </div>
    </div>
    <!-- 过渡层 -->
    <div class="mask"></div>
    <!-- 内容 -->
    <div class="showMovie2" v-if="MorehotMovieList">
      <!-- 单元格 -->
      <div class="mob" v-for="item in MorehotMovieList.coming" :key="item.id" >
        <!-- 左盒子 -->
        <div class="left">
          <img :src="item.img" alt="">
        </div>
        <!-- 右盒子 -->
        <div class="right">
          <div class="text">
            <h3>{{item.nm}} {{item.version}}</h3>
            <!-- 评分 -->
            <p class="point">
              观众评分 <span>{{item.sc}}</span>
            </p>
            <p>
              主演 <span>{{item.star}}</span>
            </p>
            <p></p>
          </div>
          <div class="button">购票</div>
        </div>
      </div>
    </div>
    <botmbar></botmbar>
  </div>
</template>

<script>
// import 
import botmbar from "../components/MybtmBar.vue"
import { getNiceMovie, getNiceMovieList } from '@/api/home.js';

export default {
  data(){
    return {
      hotMovieList:null,
      MorehotMovieList:null,
    }
  },
  methods:{
    getNiceMovieFun(){
      getNiceMovie().then(
        (data) => {
          this.hotMovieList = data;
          console.log(this.hotMovieList.movieList);
        }
      )
    },
    getNiceMovieListFun(){
      getNiceMovieList().then(
        (data) => {
          this.MorehotMovieList = data;
          console.log(this.MorehotMovieList);
        }
      );
    },
  },
  created(){
    this.getNiceMovieFun();
    this.getNiceMovieListFun();
  },
  // 注册
  components:{
    botmbar
  }
}
</script>

<style lang="less">
  .showMovie {
    padding: 0 14px;
    background: #fff;
    .niceTalk {
      height: 44px;
      line-height: 40px;
      font-size: 14px;
    }
    .more{
      display: flex;
      overflow: hidden;
      // 滚动条生成
      overflow: scroll;
      .niceMovie {
      margin-right: 10px;
      padding-bottom: 20px;

      .img{
        width: 84px;
        height: 114px;
        position: relative;
        img {
          width: 84px;
          height: 114px;
        }
        span{
        position: absolute;
        font-size: 12px;
        color: #dd9d08;
        font-weight: bold;
        z-index: 999;
        left: 0;
        bottom: 0;
        }
        // 阴影层
        div{
          display: inline-block;
          width: 100%;
          height: 35px;
          position: absolute;
          left: 0;
          bottom: 0;
          // C3 线性渐变
          background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
        }
      }
      h4{
        font-size: 13px;
        font-weight: bold;
        margin-top: 6px;
        height: 17px;
        overflow: hidden;
        // 超出部分文字
        text-overflow: ellipsis;
        // 不换行
        white-space: nowrap;
        width: 84px;
      }
      
    }
    }
    .more::-webkit-scrollbar {
  	  display: none;
    }
    
    
  }
  .mask {
    width: 100%;
    height: 10px;
    background: #f5f5f5;
  }
  .showMovie2 {
    .mob {
      padding-left: 14px;
      height: 114px;
      display: flex;
      align-items: center;
      .left {
        width: 64px;
        height: 90px;
        margin-right: 10px;
        img{
          width: 64px;
          height: 90px;
        }
      }
      .right{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        border-bottom: 1px solid #f5f5f5;
        height: 100%;
        .button{
          color: #fff;
          background: #f03d37;
          width: 54px;
          height: 28px;
          text-align: center;
          line-height: 28px;
          border-radius: 20px;
          font-size: 14px;
          margin-right: 14px;
        }
        .text {
          font-size: 14px;
          color: #777;
          h3 {
            font-size: 17px;
            font-weight: bold;
            color: #000;
          }
          p{
            margin-top: 2px;
          }
          .point {
            span {
              font-weight: bold;
              font-size: 16px;
              color: #fab109;
            }
          }
        }
      }
    }
  }
</style>