<template>
  <div id="app">
    <div class="back">
      <button v-if="isShow" @click="goBack()" type="button" class="pull-left btn btn-success btn-sm">返回</button>
      <h1>helloWorld</h1>
    </div>
   
   <div class="content">
      <router-view/>
   </div>  

    <div class="footer">
        <div class="container-fluid">
          <div class="row">
                <div class="col-xs-3">
                  <router-link to="/loading">
                    <span class="glyphicon glyphicon-heart" aria-hidden="true"></span> <br>
                    love
                  </router-link>
                </div>
                <div class="col-xs-3">
                   <router-link to="/loading">
                    <span class="glyphicon glyphicon-phone" aria-hidden="true"></span> <br>
                    phone
                  </router-link>
                </div>
                <div class="col-xs-3">
                   <router-link to="/loading">
                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span> <br>
                    brother
                  </router-link>
                </div>
                <div class="col-xs-3">
                  <router-link to="/loading">
                    <span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"></span> <br>
                    piggy-bank
                  </router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      isShow:false
    }
  },
  watch: {
        "$route":function(news,old){
            //console.log(news);
            if(news.path == "/"){
                this.isShow = false;
            }else {
                this.isShow = true;
            }
        }
  },
  methods: {
    goBack(){
            this.$router.go(-1);
        }
  }
}
</script>

<style>
 .back {
    width: 100%;
    height: 50px;
    background-color: #0094ff;
    line-height: 50px;
    color: #fff;
    text-align: center;
    position: fixed;  
    top: 0;
    left: 0;
    z-index: 2;
  }
  h1 {
    line-height: 55px;
  }
  .pull-left {
    margin: 10px 0 0 10px;
  }
  .content {
    margin-top: 55px;
    margin-bottom: 55px;
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: #eee;
    text-align: center;
  }
  .footer .row {
    margin-top: 10px;
  }
</style>
