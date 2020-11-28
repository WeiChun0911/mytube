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
  name: 'VideosArea',
  props:{
    currentPage: Number
  },
  computed:{
    videos: function () {
      if(this.APIResponse[this.currentPage]) return this.APIResponse[this.currentPage].items;
      return this.APIResponse[0].items;
    }
  },
  data(){
    return {
      APIResponse:[
        {
          "nextPageToken": null,
          "prevPageToken": null,
          "items": null
        }
      ]
    }
  },
  methods: {
    durationParser: function(duration){
      return durationParser(duration);
    }
  },
  mounted: function(){
    fetch('https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Csnippet&chart=mostPopular&maxResults=12&key=AIzaSyAKtftWPNZ3SoK_5j1RJ3-nTDqBFGmWDSE')
    .then((response)=>{
      return response.json();
    })
    .then((json)=>{
      let response = {
        "nextPageToken": json.nextPageToken,
        "prevPageToken": null,
        "items": json.items
      };
      this.APIResponse.push(response);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
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
