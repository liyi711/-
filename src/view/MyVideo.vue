<template>
  <div>
    <div class="viTop">
      <span></span>
      <h2>猫眼电影</h2>
      <span class="iconfont icon-liebiao2"></span>
    </div>
    <div>
      <router-link tag="div" :to="'/limovie?videoid=' + item.video.id + '&videourl=' + item.video.url" class="smvideo" v-for="item in videolist" :key="item.id" :style="{'background-image':'url('+item.images[0].url+')'}">
        <p>{{item.title}}</p>
        <!-- 图片层 -->
        <div class="user">
          <img :src="item.user.avatarurl" alt="">
          <div class="username">{{item.user.nickName}}</div>
        </div>
      </router-link>
    </div>
    <botmbar></botmbar>
  </div>
</template>

<script>
import botmbar from "../components/MybtmBar.vue"
import {getVideo} from "../api/video.js";
export default {
  data(){
    return {
      videolist:null,
    }
  },
  methods:{
    // 获取
    getVideoFun(){
      getVideo().then(
        data => {
          this.videolist = data.data.feeds;
          console.log(this.videolist);
        }
      )
    }
  },
  created(){
    this.getVideoFun()
  },
  components:{
    botmbar,
  },
}
</script>

<style lang="less" scoped>
  .viTop{
    height: 44px;
    width: 100%;
    font-size: 17px;
    box-sizing: border-box;
    padding: 0 10px;
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

  .smvideo {
    background-image: url(http://p0.meituan.net/movie/c43dbf2bfb58d44a33d31041f99e3b5b72867.jpg);
    display: inline-block;
    width: 49.5%;
    height: 300px;
    margin: 0.5% 0.015px 0;
    background-position: 50% 50%;
    background-size: cover;
    position: relative;
    p{
      width: 170px;
      margin: 0 8px;
      position: absolute;
      bottom: 40px;
      color: #fff;
      font-size: 16px;
    }
    .user{
      margin: 0 8px;
      display: flex;
      align-items: center;
      font-size: 12px;
      position: absolute;
      bottom: 10px;
      img {
        opacity: 0.9;
        border: 1px solid rgba(28, 28, 20, 0.5);
        width: 22px;
        height: 22px;
        border-radius: 50%;
        display: block;
      }
      .username {
        margin: 0 6px;
        flex: 1;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #fff;
      }
    }
  }
</style>