<template>
  <div class="video">
    <div class="myvideo" v-if="videoid" @click.stop="bobo">
      <div class="videoTop"  @click="backvideo">&lt;</div>
    </div>
    <div class="videoimg">
      <video :src="videoid.videourl" ref="vivi"></video>
    </div>
    <div class="bofang iconfont icon-bofang" v-show="palys"></div>
  </div>

</template>

<script>
export default {
  data(){
    return {
      videoid:null,
      palys:false,

    }
  },
  methods:{
    backvideo(){
      // 返回上一个页面
      this.$router.go(-1);
    },
    bobo(){
      this.palys = !this.palys;
      if(this.$refs.vivi.paused){
        this.$refs.vivi.play();
      } else{
        this.$refs.vivi.pause();
      }
    },
  },
  created(){
    // router 获取对象  route 获取传参参数
    console.log(this.$route);
    this.videoid = this.$route.query;

  },
  mounted(){
    console.log(this.$refs.vivi);
    this.$refs.vivi.play();
  }
}
</script>

<style lang="less" scoped>
  .video{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: hidden;
    .myvideo{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // 背景颜色 透明
      background-color: transparent;
      z-index: 3;
    }
    .videoTop{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 7;
      font-size: 24px;
      font-weight: bold;
      font-family: "宋体";
      padding: 10px;
      background: rgba(0,0,0,0.3);
      color: #fafafa;
    }
    .videoimg{
      background: #fff;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      video{
        width: 100%;
      }
    }
    .bofang {
      position: absolute;
      z-index: 5;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      width: 60px;
      height: 60px;
      font-size: 60px;

    }
  }
</style>