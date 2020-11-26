<template>
  <div class="videos">
    <div class="video" v-for="video in videos" :key="video.id">
      <img v-bind:src="video.snippet.thumbnails.default.url" alt="">
      <span>{{video.snippet.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      videos:null
    }
  },
  mounted:function(){
    fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&key=AIzaSyAKtftWPNZ3SoK_5j1RJ3-nTDqBFGmWDSE')
    .then((response)=>{
      return response.json();
    })
    .then((myJson)=>{
      console.log(myJson);
      this.videos = myJson.items;  
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}
.videos{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
.video{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding:10px;
}
.video img{
  width:200px;
}
.video span{
  width:200px;
  align-self: flex-end;
}
</style>
