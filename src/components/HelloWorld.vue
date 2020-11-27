<template>
  <div class="videos">
    <div class="video" v-for="video in videos" :key="video.id">
      <div class="videoDuration">{{durationParser(video.contentDetails.duration)}}</div>
      <img v-bind:src="video.snippet.thumbnails.default.url" alt="">
      <div>{{video.snippet.title}}</div>
    </div>
  </div>
</template>

<script>
import durationParser from '../lib/durationParser.js';
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
  methods: {
    durationParser: function(duration){
      return durationParser(duration);
    }
  },
  mounted:function(){
    fetch('https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Csnippet&chart=mostPopular&maxResults=12&key=AIzaSyAKtftWPNZ3SoK_5j1RJ3-nTDqBFGmWDSE')
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
  display: grid;
 grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
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
.video div{
  width:200px;
}
.video .videoDuration{
    position: relative;
    top: 150px;
    display: inline-block;
    text-align: end;
    padding-right: 5px;
    color: white;
}
</style>
