<template>
  <div class="mysearch">
    <div class="Searchtop">
      <div class="title"><span class="black" @click="exit">返回</span>猫眼电影</div>
    </div>
    <div class="searchBox">
      <div class="searchCon">
        <input v-model.lazy="vue11" type="text" class="input" placeholder="搜电影、搜影院">
        <span class="text">取消</span>
      </div>
    </div>
    <div class="content" v-if="listdata">
      <div class="list">
        <ul>
          <li v-for="item in listdata" :key="item.id">
            <div class="left">
              <div class="image">
                <img :src="item.poster" alt="">
              </div>
            </div>
            <div class="right">
              <div class="title"><span class="span1">{{item.ename}}</span><span class="span2">{{item.score==''?'':item.score+"分"}}</span></div>
              <p class="p1">{{item.name}}</p>
              <p class="p2">{{item.catogary}}</p>
              <p class="time">{{item.release}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
</template>

<script>
import {searchMovie} from "../api/search.js"
export default {
  props:["cityip"],
  data(){
    return {
      vue11:null,
      listdata:null,
    }
  },
  methods:{
    searchMovieFun(){
      searchMovie({
        keyword:this.vue11,
        ci:this.cityip,
        limit:10
      }).then(data=>{
        console.log(data);
        this.listdata = data;
      })
    },
    exit(){
      this.$router.go(-1);
    },
  },
  watch:{
    vue11(){
      // console.log('执行了');
      this.searchMovieFun();
    }
  },
  created(){
  },
  
}
</script>

<style lang="less" scoped>
  .mysearch{
    // padding: 0 12px;
    .Searchtop{
      background-color: #e54847;
      padding: 12px;
      .title{
        position: relative;
        font-size: 18px;
        color: white;
        text-align: center;
        .black{
          position: absolute;
          top: 0;
          left: 5%;
          font-size: 12px;
          margin-top: 6px;
        }
      }

    }
    .searchBox{
      padding: 12px;
      background-color: #f5f5f5;
      .searchCon {
      display: flex;
      align-items: center;
        .input {
          flex: 1;
          outline: none;
          border: 0;
          background-color: white;
          height: 24px;
        }
        .text{
          font-size: 12px;
          color: #f0485e;
        }
      }
    }
    .content{
      .list{
        ul{
          li{
            display: flex;
            align-items: center;
            border-bottom: 1px solid #e6e6e6;
            padding: 12px;
            .left{
              .image{
                width: 80px;
                img{
                  display: block;
                  width: 100%;
                }
              } 
            }
            .right{
              flex: 1;
              .title{
                display: flex;
                justify-content: space-between;
                .span1 {
                  color: #222262;
                  font-size: 14px;
                }
                .span2 {
                  color: #ffaa84;
                  font-size: 13px;
                }
              }

              p {
                font-size: 13px;
              }
            }
          }
        }
      }
    }
    
  }
</style>