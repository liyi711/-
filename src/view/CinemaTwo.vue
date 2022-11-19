<template>
  <div class="main">
    <myselect 
    :cityip="cityip"
    :halltype="halltype"
    :brandid="brandid"
    :serviceid="serviceid"
    ></myselect>
    <!-- 影院位置 -->
    <div v-if="cinemalist">
      <div class="cinema" v-for="item in cinemalist" :key="item.cinemaId">
        <h3>
          <h3>{{item.title}}</h3>
          <span>{{item.price.n}}</span>
          <div>{{item.price.q}}</div>
        </h3>
        <p>&nbsp;{{item.location}}</p>
        <div class="tag">
          <div v-if="item.services[0]">改签</div>
          <div class="bor" v-if="item.services[1]">折扣卡</div>
          <div v-if="item.services[2]">杜比全景声厅</div>
          <div v-if="item.services[3]">LUXE巨幕厅</div>
        </div>
        <div class="tag2" v-if="item.discount[0]">
          <img :src="item.discount[0].card" alt="">
          <div>{{item.discount[0].text}}</div>
        </div>
      </div>
    </div>
    <botmbar></botmbar>
  </div>
</template>

<script>
import botmbar from "../components/MybtmBar.vue"
import myselect from "../components/MySelect.vue"
import { getmoreCinemas } from '@/api/cinema'
export default {
  props:['cityip'],
  data(){
    return{
      cinemalist:null,
      // 行政区id
      districid:null,
      // 影厅类型
      halltype:null,
      // 品牌
      brandid:null,
      // 影院服务
      serviceid:null,
    }
  },
  methods:{
    // 改变行政区id
    becomedid(id){
      this.districid = id,
      this.getmoreCinemasFun()
    },
    // 改变影厅类型id
    becomedhid(id){
      this.halltype = id,
      this.getmoreCinemasFun()
    },
    // 改变品牌id
    becomedbid(id){
      this.brandid = id,
      this.getmoreCinemasFun()
    },
    // 改变影院服务
    becomedeid(id){
      this.serviceid = id,
      this.getmoreCinemasFun()
    },
    getmoreCinemasFun(){
      getmoreCinemas({
        cityid:this.cityid,
        districid:this.districid,
        halltype:this.halltype,
        brandid:this.brandid,
        serviceid:this.serviceid,
      }
      ).then(
        data => {
          this.cinemalist = data;
        }
      )
    },
  },
  // 注册小组件
  components:{
    myselect,
    botmbar
  },
  created(){
    this.getmoreCinemasFun();
  },
  watch:{
    cityid:function(){
      this,getmoreCinemasFun();
    }
  }
}
</script>

<style lang="less" scoped>
  .main{
    margin-top: 41px;
    .cinema{
      margin-left: 14px;
      padding: 14px 14px 14px 0;
      border-bottom: 1px solid #f2f2f2;
      h3 {
        display: flex;
        align-items: center;
        span {
          color: #f03d37;
          font-size: 18px;
        }
        div{
          color: #f03d37;
          font-size: 14px;
        }
        h3{
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 240px;
        }
      }
      p{
        font-size: 14px;
        color: #666;
        height: 16px;
        overflow: hidden;
        // 不换行
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .tag{
        display: flex;
        margin-top: 8px;
        div {
          padding: 0 2px;
          font-size: 12px;
          border: 1px solid #a8ccd5;
          border-radius: 6px;
          margin-right: 4px;
          color: #a8ccd5;
        }
        .bor {
          border-color: #ffca7b;
          color: #ffca7b;
        }
      }
      .tag2 {
        display: flex;
        color: #999;
        font-size: 12px;
        align-items: center;
        margin-top: 8px;
        img {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
</style>