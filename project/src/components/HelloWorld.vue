<template>
  <div class="helloWorld">
      <div class="container-fluid">
      <div class="row">
              <div class="col-xs-4 strap" v-for="(item,index) in list" :key="index">
                  <img :src="item.img_url">
              </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      list: []
    }
  },
  created(){
    this.getData()
  },
  methods: {
    getData(){
      var url = "http://vue.studyit.io/api/getnewslist";
      this.$https.get(url).then(res => {
        this.list = res.data.message;
      })
    }
  }
}
</script>

<style scoped>
.helloWorld {
  margin: 5px;
}
 .strap {
  height: 300px;
  padding: 2px;
 }
  img {
    padding: 5px;
    border: 2px solid #ccc; 
     width: 100%;
     height: 100%;
   }
</style>
