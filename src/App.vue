<template>
   <!-- </div> -->
  <div id="main">
    <router-view :cityip="cityip" :cityname="cityname" @setcity="setcity"></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cityip:20,
      cityname:"广州",
    }
  },
  methods:{
    setcity(obj){
      let cname = obj.cname;
      let cip = obj.cip;
      this.cityip = cip;
      this.cityname = cname;
    }
  },
}
</script>

<style lang="less">
@import "./assets/css/base.css";
</style>
