// 公共组件
<template>
  <div>
    <div class="botmbar">
      <router-link tag="div" class="botm" to="/index">
        <span class="iconfont icon-dianying"></span>
        <p>电影/影院</p>
      </router-link>
      <router-link tag="div" class="botm" to="/video">
        <span class="iconfont icon-dianshiju"></span>
        <p>小视频</p>
      </router-link>
      <!-- 路由 -->
      <router-link tag="div" class="botm" to="/mine">
        <span class="iconfont icon-shouye"></span>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
  .botmbar {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    display: flex;
    border-top: 1px solid #e9e9e9;
    padding-top: 4px;
    .botm {
      // 分三份
      flex-shrink: 0;
      flex-grow: 1;
      color: #696997;
      text-align: center;
      .iconfont {
        font-style: 24px;
      }
      p{
        font-style: 12px;
        text-align: center;
      }
    }
  }
</style>