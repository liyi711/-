<template>
  <div>
    <div class="showMovie">
      <div class="niceTalk">近期最受期待</div>
      <!-- 好评电影层 -->
      <div class="more">
        <div class="niceMovie" v-for="item in expectlist" :key="item.id">
          <div class="img">
            <img :src="item.img" />
            <span>{{item.wish}}人想看</span>
            <!-- 阴影层 -->
            <p class="like">
              <span></span>
            </p>
            <div></div>
          </div>
          <h4>{{item.nm}}</h4>
          <p>{{item.comingTitle}}</p>
        </div>
      </div>
    </div>
    <!-- 过渡层 -->
    <div class="mask"></div>
    <div class="showMovie2" v-if="readylist" v-for="item in readylist" :key="item.id">
      <!-- 单元格 -->
      <p class="date">{{item.comingTitle}}</p>
      <div class="mob"  >
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
              <span>{{item.wish}}</span>人想看
            </p>
            <p>
              主演 <span>{{item.star}}</span>
            </p>
            <p class="date">{{item.showInfo}}</p>
          </div>
        <div class="button" >预售</div>
        <!-- :style="`background:${item.color}`" -->
        <!-- {{item.showStateButton.content}} -->
        </div>
      </div>
    </div>
    <botmbar></botmbar>
  </div>
</template>

<script>
import { getReadyMovie,getReadyMovieList} from "@/api/ready.js"
import botmbar from "../components/MybtmBar.vue"
export default {
  data(){
    return {
      expectlist:null,
      readylist:null
    }
  },
  methods:{
    getReadyMovieFun(){
      getReadyMovie().then(
        (data) => {
          this.expectlist = data.coming;
        }
      )
    },
    getReadyMovieListFun(){
      getReadyMovieList().then(
        (data) => {
          this.readylist = data.coming;
          console.log(this.readylist);
        }
      )
    }
  },
  created(){
    this.getReadyMovieFun(),
    this.getReadyMovieListFun()
  },
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
    }
    .more::-webkit-scrollbar {
  	  display: none;
    }
    .niceMovie {
      margin-right: 10px;
      padding-bottom: 20px;
      p{
        color: #999;
        font-size: 12px;
        margin-top: 6px;
      }
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
        .like {
          position: absolute;
          left: 0;
          top: 0;
          background: rgba(0,0,0,.4);
          width: 28px;
          height: 28px;
          border-radius: 0 0 10px 0;
          margin: 0;
          span {
            background: url(../assets/img/love.png) no-repeat;
            background-size: 100%;
            width: 10px;
            height: 10px;
            display: inline-block;
            position: absolute;
            top: 10px;
            left: 8px;
          }
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
      p{
        height: 17px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 84px;
      }
      
    }
  }
  .mask {
    width: 100%;
    height: 10px;
    background: #f5f5f5;
  }
  .showMovie2 {
    .date {
      color:#333;
      font-size: 12px;
      margin-top: 16px;
      padding-left: 14px;
    }
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
          background: #3c9fe6;
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
          .date{
            font-size: 12px;
            padding-left: 0;
          }
        }
      }
    }
  }
</style>