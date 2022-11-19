<template>
  <div class="main">
    <div class="classic">
      <div class="movie" v-for="item in classiclist" :key="item.movieId">
        <div class="img">
          <img :src="item.poster" alt="">
          <div class="item">
            <h2>{{item.movieInfo.title}}</h2>
            <p>{{item.movieInfo.englishTitle}}</p>
            <p>{{item.movieInfo.actors}}</p>
            <p>{{item.movieInfo.showInfo}}</p>
          </div>
        </div>
        <!-- 电影评分 -->
        <div class="point">
          <span>{{item.score}}</span>
          <div v-if="item.score">分</div>
          <div v-else="item.score">暂无评分</div>
        </div>
      </div>
    </div>
    <botmbar></botmbar>
  </div>
</template>

<script>
import botmbar from "../components/MybtmBar.vue"
// 拿数据
import { getClassicList } from "@/api/classic";
export default {
  data(){
    return {
      classiclist:null,
    }
  },
  methods:{
    getClassicListFun(){
      getClassicList().then(
        data => {
          this.classiclist = data
          console.log(this.classiclist);
        }
      )
    }
  },
  components:{
    botmbar
  },
  created(){
    this.getClassicListFun()
  }
}
</script>

<style lang="less">
  .main{
    .classic{
      padding-top: 16px;
      .movie {
        display: flex;
        justify-content: space-between;
        margin-left: 20px;
        margin-bottom: 20px;
        .img{
          display: flex;
          align-items: center;
          img {
            width: 66px;
            height: 94px;
          }
          .item {
            margin-left: 6px;
            h2 {
              font-weight: bold;
              color: #333;
            }
            p{
              color: #666;
              font-size: 14px;
              margin-top: 3px;
            }
          }
        }
        .point {
          width: 60px;
          display: flex;
          margin-right: 6px;
          span{
            color: #fbb600;
            font-size: 16px;
          }
          div{
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
  }
</style>