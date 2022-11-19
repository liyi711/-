<template>
  <div>
    <!-- 下拉菜单 -->
    <div class="opcity" @click="openlight" v-show="light"></div>
    <!-- 筛选区 -->
    <div class="bigbox">
      <div class="alltag">
      <div :class="['city',type == 1 ? 'con' : '']" @click="typeOne(1)" >
        全城
        <!-- <span class="iconfont icon-xiajiantou"></span> -->
        <span :class="['iconfont icon-xiajiantou',type==1 ? 'toy' : '']"></span>
      </div>
      <div :class="['brand',type == 2 ? 'con' : '']" @click="typeOne(2)">
        品牌
        <!-- <span class="iconfont icon-xiajiantou"></span> -->
        <span :class="['iconfont icon-xiajiantou',type==2 ? 'toy' : '']"></span>
      </div>
      <div :class="['feature',type == 3 ? 'con' : '']" @click="typeOne(3)">
        特色
        <span class="iconfont icon-xiajiantou"></span>
      </div>
      </div>
      <!-- 全城的详细 -->
      <div class="t1" v-show="type == 1">
        <van-tabs v-model="active" >
          <van-tab title="商圈">
            <van-tree-select
            :items="items"
            :active-id.sync="activeId"
            :main-active-index.sync="activeIndex"
            @click-nav="ck" 
            @click-item="cj"
             />
          </van-tab>
          <van-tab title="地铁站">
            <van-tree-select
            :items="items1"
            :active-id.sync="activeId1"
            :main-active-index.sync="activeIndex1"
            @click-nav="ck"
            @click-item="cj"
          />
        </van-tab>

        </van-tabs>
      </div>
      <!-- 品牌详细 -->
      <div class="t2" v-show="type == 2">
        <van-list v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
          <van-cell v-for="(item,index) in list" :key="item.id" :class="[selectnum == index ? 'con' : '']" @click="becomearea(index)" >
          <div>{{item.name}}</div>
          <div>{{item.count}}</div>
          </van-cell>
        </van-list>
      </div>
      <!-- 特色详细 -->
      <div class="t3" v-show="type == 3">
        <!-- 特色功能 -->
        <div class="top" v-if="area">
          <div class="bot1">特色功能</div>
          <div class="bot2">
            <div :class="['part1',index == contype ? 'con' : '']" v-for="(item,index) in area" :key="item.id" @click="activeCon(index)">{{item.name}}</div>
          </div>
        </div>
        <!-- 特色厅 -->
        <div class="top" v-if="featureWay">
          <div class="bot1">特色功能</div>
          <div class="bot2">
            <div :class="['part1',index == contype1 ? 'con' : '']" v-for="(item,index) in featureWay" :key="item.id" @click="activeCon1(index)" >{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCinema} from '../api/cinema.js';
export default {
  data(){
    return {
      light:false, //遮罩层开关
      // 状态选项卡
      type:0,
      // 点击功能高亮
      contype:0,
      contype1:0,
      // 商圈
      items:[
        {
          // 导航的名称
          text:"所有城市",
         
        }
      ],
      // 地铁站
      items1: [
        {
          // 导航名称
          text: "全部",
          // 导航下的可选项
          children: [
            {
              // 名称
              text: "白云",
              // id：作为匹配状态的标识符
              id: 1
            },
            {
              text: "黄埔",
              id: 2
            }
          ]
        }
      ],
      active:0,
      activeId:1,
      activeIndex:0,
      activeId1:1,
      activeIndex1:0,
      list:[],
      selectNum:0,
      finished:false,
      area:null,
      featureWay:null,
    };
  },
  methods:{
    // 点击品牌
    becomearea(index){
      this.$emit('becomeid',this.list[index].id);
      this.selectNum = index;
      this.light = false;
    },
    // 点击选项卡的左右侧
    ck(index){
      console.log(index);
      if(index == 0){
        this.$emit("becamedid",this.item[index].id);
        this.light = false;
      }
    },
    cj(index){
      this.$emit("becamedid",index.id);
      // console.log(index.id);
      this.light = false;
    },
    // 特色点击高亮
    activeCon(index){
      this.contype = index;
      this.$emit('becomeid',this.area[index].id);
    },
    activeCon1(index){
      this.contype1 = index;
      this.$emit('becomeid',this.featureWay[index].id);
      this.light = false;
    },
    openlight(){
      this.light = false;
      this,type = 0;
    },
    typeOne(index){
      this.type = index;
      this.light = !this.light
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    getCinemaFun(){
      getCinema({ci:this.cityip}).then(
        data =>  {
          // console.log(data);
          // 商圈
          this.items = data.district.subItems;
          // 地铁站
          this.items1 = data.subway.subItems;

          // 左侧选项卡
          this.items.forEach(item => {
          // 左侧的选项卡
          item.text = item.name + "(" + item.count + ")";
          // 右侧选项卡
          // 子数组遍历，把name变成text
          item.children = item.subItems;
          item.children.forEach(par => {
            par.text = par.name + "(" + par.count + ")";
          });
        });
        this.items1.forEach(item => {
          // 左侧的选项卡
          item.text = item.name + "(" + item.count + ")";
          // 右侧选项卡
          item.children = item.subItems;
          item.children.forEach(par => {
            par.text = par.name + "(" + par.count + ")";
          });
        });
        // 品牌
        this.list = data.brand.subItems;

        // 特色功能
        this.area = data.service.subItems;
        // 特色厅
        this.featureWay = data.hallType.subItems;
        }
      )
    }
  },
  created(){
    this.getCinemaFun();
  },
  watch:{
    type:function (newnum,oldnum){
      // console.log('新',newnum)
      // console.log('旧',oldnum)
      if(newnum != oldnum && newnum != 0){
        this.light = true
      }
    },
    light:function(){
      if(this.light == false){
        this.type - 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .opcity {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.3);
    display: none;
  }
  .bigbox {
    position: absolute;
    top: 156px;
    width: 100%;
    background: #ffffff;
    z-index: 10;
    .alltag{
      display: flex;
      margin: 0 18px;
      border-bottom: 1px solid #f7f7f7;
      color: #777;
      align-items: center;
      // justify-content: space-between;
      height: 40px;
      font-size:14px;
    }
    .city,
    .brand {
      border-right: 1px solid #f5f5f5;
    }

    .city,
    .brand,
    .feature{
      text-align: center;
      flex: 1;
      .iconfont {
        font-size: 12px;
        display: inline-block;
        transform: scale(0.8);
      }
    }
    .con {
      color: #e54847;
      .toy {
        // 箭头旋转180度
        transform: scale(0.8) rotate(180deg);
      }
    }

    .t2 {
      .van-cell__value {
        display: flex;
        justify-content: space-between;
        div:nth-of-type(2) {
          font-size: 12px;
          color: #8f9296;
          margin-right: 20px;
        }
      }
    }
    .t3{
      padding: 10px 12px;
      .top{
        .bot1{
          color: #777;
          height: 44px;
          line-height: 44px;
        }
        .bot2 {
            display: flex;
            // 自动换行
            // flex-grow: wrap;
            flex-wrap: wrap;
            .con {
              background: #f0f0f0 !important;
              color: #f03d37 !important;
              border: 0.02rem solid #f03d37 !important;
            }
            .part1 {
              width: 75px;
              height: 30px;
              text-align: center;
              line-height: 30px;
              font-size: 12px;
              border-radius: 8px;
              margin-right: 12px;
              border: 1px solid #ddd;
              margin-top: 10px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              color: #777;
              padding: 3px 0;
            }
            .part1:nth-child(4n+4){
              margin-right: 0;
            }
        }
      }
    }
  
  }
</style>