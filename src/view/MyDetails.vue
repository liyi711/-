<template>
  <div class="detailsBox">
    <div class="container" v-if="datalist">
      <div class="topCon" :style="{'background-color':movielist.backgroundColor}">
        <div class="black">猫眼电影&nbsp;>&nbsp;{{movielist.nm}}</div>
        <div class="top">
          <div class="left">
            <img src="../assets/img/人生大事.png" alt="">
          </div>
          <div class="right">
            <h3 class="h3">{{movielist.nm}}</h3>
            <p>{{movielist.cat}}</p>
            <p>{{movielist.star}}</p>
            <p class="p3">{{movielist.pubDesc}}</p>
            <div class="look">
              <div class="love">
                <img src="../assets/img/love.png" alt="">想看
              </div>
              <div class="star">
                <img src="../assets/img/star.png" alt="">看过
              </div>
            </div>
          </div>
        </div>
        <!-- 评分 -->
        <div class="score">
          <div class="scoreTop">
            <div class="scorelogo">
              <div class="img">
                <img src="../assets/img/pgradelog.png" alt="">
              </div>
              <span class="logotext">{{movielist.scoreLabel}}</span>
            </div>
            <div class="num">
              {{movielist.wish}}人想看
            </div>
            <div class="numed">
              {{movielist.watched}}人看过<span>&gt;</span>
            </div>
          </div>
          <div class="scoreBot">
            <div class="nums">
              <p class="scors">{{movielist.sc}}</p>
              <p class="count">{{movielist.watched}}人评</p>
            </div>
            <div class="xingxingbox">
              <div class="xingxing">
                <div class="star">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                </div>
                <div class="progress-bar">

                </div>
              </div>
              <div class="xingxing">
                <div class="star">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                </div>
                <div class="progress-bar">

                </div>
              </div>
              <div class="xingxing">
                <div class="star">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                </div>
                <div class="progress-bar">

                </div>
              </div>
              <div class="xingxing">
                <div class="star">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                </div>
                <div class="progress-bar">

                </div>
              </div>
              <div class="xingxing">
                <div class="star">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                  <img src="../assets/img/white-star.png" alt="">
                </div>
                <div class="progress-bar">

                </div>
              </div>
            </div>
            <div class="date">
              <div class="left">
                <h4 class="h4">Top</h4>
                <span>{{movielist.vnum}}</span>
              </div>
              <div class="right">
              <div class="year">
                {{movielist.rt}}
              </div>
              <div class="list">中国大陆票房</div>
              </div>
          <!-- </div> -->
            </div>
          </div>
        </div>
        
        <!-- 简介 -->
        <div class="introduction">
          <h4 class="h4">简介</h4>
          <p class="p">爱爱爱爱爱爱爱爱爱啊</p>
          <h5 class="h5">演职人员</h5>
          <div class="listbox">
            <div class="list">
              <ul>
                <li v-for="item in actorlist" :key="item.id">
                  <div class="img">
                    <img :src="item.avatar" alt="">
                  </div>
                  <div class="actor">{{item.cnm}}</div>
                  <div class="actor1">{{item.desc}}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 视频推荐 -->
        <div class="introduction2">
          <h5 class="h5">视频推荐</h5>
          <div class="listbox">
            <div class="list">
              <ul>
                <li v-for="items in video" :key="items.id">
                  <div class="img">
                    <img :src="items.img" alt="">
                    <span class="span">
                      <img src="../assets/img/จmจ]จbจe.png" alt="">
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 剧照 -->
        <div class="introduction3">
          <h5 class="h5">剧照</h5>
          <div class="listbox">
            <div class="list">
              <ul>
                <li v-for="{item,index} in datalist.photos" :key="index">
                  <div class="img">
                    <img src="../assets/img/人生大事.png" alt="">
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 票房 -->
      <div class="box-office">
        <div class="officeTitle">票房</div>
        <ul class="officeCon">
          <li>
            <p class="number">{{mbox.lastDayRank}}</p>
            <p class="info">昨日排名</p>
          </li>
          <li>
            <p class="number">{{mbox.firstWeekBox}}</p>
            <p class="info">首周票房</p>
          </li>
          <li>
            <p class="number">{{mbox.sumBox}}</p>
            <p class="info">累计票房（万）</p>
          </li>
        </ul>
      </div>

      <!-- 相关快讯 -->
      <div class="correlation">
        <div class="correlationTitle">
          相关快讯
        </div>
        <ul class="correlation-item">
          <li>
            <div class="item-top">
              <p>我说的肌肤dsajfljsdalkjf dsdss </p>
              <div class="img">
                <img src="../assets/img/人生大事.png" alt="">
              </div>
            </div>
            <div class="item-bot">
              <div class="left">猫眼电影</div>
              <div class="right"><span class="look">1234</span><span class="count">1</span></div>
            </div>
          </li>

          <li>
            <div class="item-top">
              <p>我说的肌肤dsajfljsdalkjf dsdss </p>
              <div class="img">
                <img src="../assets/img/人生大事.png" alt="">
              </div>
            </div>
            <div class="item-bot">
              <div class="left">猫眼电影</div>
              <div class="right"><span class="look">1234</span><span class="count">1</span></div>
            </div>
          </li>
          
        </ul>
      </div>
      <!-- 底部信息 -->
      <div class="bot-info">
        <p class="bottext">影视行业信息<span class="botspan">《免责声明》</span>违法和不良信息举报电话：19307665585</p>
        <div class="img">
          <img src="../assets/img/bottom-logo.png" alt="">
        </div>
      </div>
    </div>
    <div class="buy-ticket" v-if="datalist">
      <div class="ticket" >特惠购票</div>
    </div>
    <loading v-else></loading>
  </div>
</template>

<script>
import {getMovieDetail} from "../api/details.js"
import loading from "../components/Myonlyloading.vue"
export default {
  data(){
    return{
      movieId:null, //电影id
      flag:false,   //控制加载效果
      movielist:null,   //电影基本信息
      datalist:null,    //电影数据
      actorlist:null,   //演职人员
      video:null,       //视频推荐
      mbox:null,    //票房
      newlist:null, //相关快讯
    }
  },
  methods:{
    getMovieDetailFun(){
      getMovieDetail({movieId:this.movieId}).then(data=>{
        console.log(data);
        this.datalist = data;
        // 电影基本信息
        this.movielist=data.movie;
        // 演职人员
        this.actorlist=data.celebrities;
        // 视频推荐
        this.video=data.relatedMovies;
        // 票房
        this.mbox=data.mbox.mbox;
      })
    }
  },
  created(){
    this.movieId = this.$route.query.movieId
    if(this.$route.query.movieId){
      this.getMovieDetailFun()
    }
    if(!this.datalist){
      this.flag = true;
    }
  },
  components:{
    loading,
  },
}
</script>

<style lang="less" scoped>
  .detailsBox{
    .container{
      background-color: #f4f4f4;
      padding-bottom: 60px;
      .topCon{
        padding: 0 12px;
        padding-bottom: 15px;
        background-color: #66593e;
        .black{
          font-size: 12px;
          color: rgba(0, 0, 0, 0.4);
          padding: 15px 0;
        }
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left{
            width: 80px;
            margin-right: 10px;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .right{
            flex: 1;
            .h3 {
              font-size: 22px;
              color: white;
              padding-bottom: 10px;
            }
            p{
              font-size: 12px;
              color: #758ba1;
              margin-top: 2px;
            }
            .p3{
              margin-bottom: 2px;
            }
            .look{
              display: flex;
              justify-content: space-between;
              align-items: center;
              .love,
              .star {
                width: 45%;
                padding: 4px 0;
                background-color: #6a7783;
                border-radius: 6px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                color: white;
                img{
                  width: 12px;
                  height: 12px;
                  margin-right: 5px;
                }
              }
            }
          }
        }

        // 评分
        .score {
          background: #544933;
          padding: 8px;
          border-radius: 8px;
          margin-top: 12px;
          .scoreTop{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .scorelogo{
              display: flex;
              align-items: center;
              .img{
                width: 32px;
                height: 32px;
                transform: scale(0.7);
              }
              .logotext{
                font-size: 12px;
                color: white;
              }
            }
            .num,
            .numed{
              font-size: 12px;
              color: #757066;
            }
          }
          .scoreBot{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .nums{
              .scors{
                font-size: 36px;
                text-align: right;
                color: #ffb400;
              }
              .count{
                font-size: 12px;
                color: #675e4a;
              }
            }
            .xingxingbox{
              .xingxing{
                transform: scale(0.8);
                display: flex;
                align-items: center;
                .star{
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  width: 30px;
                  // 缩小
                  transform: scale(0.4);
                  img{
                    display: block;
                    margin-right: 4px;
                  }
                }
                .progress-bar{
                  width: 70px;
                  height: 4px;
                  background-color: #233340;
                  margin-left: 20px;
                  overflow: hidden;
                  position: relative;
                  &::after{
                    content: "";
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background-color: #59564a;
                  }
                }
              }
            }
            .date{
              display: flex;
              align-items: center;
              border: 1px solid #6b634f;
              padding: 2px;
              border-radius: 2px;
              .left{
                background-color: #614830;
                border-radius: 2px;
                margin-right: 10px;
                .h4{
                  font-size: 14px;
                  color: #c88e38;
                }
                span{
                  display: block;
                  text-align: center;
                  color: #e1c969;
                  font-size: 12px;
                }
              }
              .right{
                .year{
                  color: #9a8d5e;
                  font-size: 12px;
                }
                .list{
                  color: #d2b767;
                }
              }
            }
          }
          
        }
        
        // 简介
        .introduction{
          .h4{
            font-size: 14px;
            color: #dafff3;
            margin-top: 15px;
          }
          .p{
            color: white;
            font-size: 12px;
            padding: 12px 0;
          }
          .h5{
            font-size: 12px;
            color: white;
            padding-bottom: 10px;
          }
          .listbox{
            .list{
              overflow: hidden;
              ul{
                display: flex;
                overflow: auto;
                li{
                  margin-right: 12px;
                  .img{
                    width: 80px;
                    height: 100px;
                    overflow: hidden;
                    img{
                      display: block;
                      width: 100%;
                    }
                  }
                  .actor{
                    font-size: 14px;
                    color: white;
                    text-align: center;
                  }
                  .actor1{
                    font-size: 14px;
                    color: #76828c;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
        // 视频推荐
        .introduction2{
          margin-top: 15px;
          .h4{
            font-size: 14px;
            color: #dafff3;
            margin-top: 15px;
          }
          .p{
            color: white;
            font-size: 12px;
            padding: 12px 0;
          }
          .h5{
            font-size: 12px;
            color: white;
            padding-bottom: 10px;
          }
          .listbox{
            .list{
              overflow: hidden;
              ul{
                display: flex;
                overflow: auto;
                li{
                  margin-right: 12px;
                  .img{
                    width: 140px;
                    height: 80px;
                    overflow: hidden;
                    position: relative;
                    img{
                      display: block;
                      width: 100%;
                    }
                    .span{
                      position: absolute;
                      width: 30px;
                      height: 30px;
                      top: 50%;
                      left: 50px;
                      background-color: rgba(255, 255, 255, .5);
                      border-radius: 50%;
                      transform: translate(-10%,-50%);
                      overflow: hidden;
                      img{
                        display: block;
                        width: 36px;
                        height: 38px;
                        margin-top: -4px;
                        margin-left: -2px;
                      }
                    }
                  }
                  .actor{
                    font-size: 14px;
                    color: white;
                    text-align: center;
                  }
                  .actor1{
                    font-size: 14px;
                    color: #76828c;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
        // 剧照
        .introduction3{
          margin-top: 15px;
          .h4{
            font-size: 14px;
            color: #dafff3;
            margin-top: 15px;
          }
          .p{
            color: white;
            font-size: 12px;
            padding: 12px 0;
          }
          .h5{
            font-size: 12px;
            color: white;
            padding-bottom: 10px;
          }
          .listbox{
            .list{
              overflow: hidden;
              ul{
                display: flex;
                overflow: auto;
                li{
                  margin-right: 12px;
                  .img{
                    width: 140px;
                    height: 80px;
                    overflow: hidden;
                    position: relative;
                    img{
                      display: block;
                      width: 100%;
                    }
                    .span{
                      position: absolute;
                      width: 30px;
                      height: 30px;
                      top: 50%;
                      left: 50px;
                      background-color: rgba(255, 255, 255, .5);
                      border-radius: 50%;
                      transform: translate(-10%,-50%);
                      overflow: hidden;
                      img{
                        display: block;
                        width: 36px;
                        height: 38px;
                        margin-top: -4px;
                        margin-left: -2px;
                      }
                    }
                  }
                  .actor{
                    font-size: 14px;
                    color: white;
                    text-align: center;
                  }
                  .actor1{
                    font-size: 14px;
                    color: #76828c;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
      // 票房
      .box-office{
        padding: 12px;
        margin-top: 15px;
        background-color: #fff;
        .officeTitle{
          color: #000;
          font-size: 16px;
          padding: 10px 12px;
        }
        .officeCon{
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 8px;
          padding: 15px 0;
          background-color: #f8f8f8;
          li{
            .number{
              color: #f15a55;
              font-size: 12px;
              text-align: center;
            }
            .info{
              color: #666666;
              font-size: 12px;
              text-align: center;
            }
          }
        }
      }

      // 相关快讯
      .correlation{
        margin-top: 15px;
        background-color: white;
        .correlationTitle{
          color: #787878;
          font-size: 12px;
          padding: 12px;
          border-bottom: 1px solid #f9f9f9;
        }
        .correlation-item{
          padding: 12px;
          li{
            margin-top: 10px;
            border-bottom: 1px solid #f9f9f9;
            .item-top{
              display: flex;
              .con{
                color: #202020;
                font-size: 14px;
                font-weight: bold;
              }
              .img{
                width: 140px;
                img{
                  display: block;
                  width: 100%;
                }
              }
            }
            .item-bot{
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 10px;
              .left{
                color: #ddddd3;
                font-size: 12px;
              }
              .right{
                width: 105px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #ddddd3;
                font-size: 16px;
              }
            }
          }
        }
        
      }

      // 底部信息
      .bot-info{
        padding: 30px 12px;
        .bottext{
          color: #bdbdbd;
          font-size: 12px;
          .botspan{
            color: #5e80a5;
          }
        }
        .img{
          width: 100%;
          text-align: center;
          img{
            margin: 0 auto;
            width: 100px;
            display: block;
          }
        }
      }
    }
    .buy-ticket{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 60px;
      background-color: white;
      .ticket{
        margin: 0 auto;
        margin-top: 10px;
        width: 85%;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-radius: 36px;
        color: white;
        background-color: #fb383b;
      }
    }
  }
</style>