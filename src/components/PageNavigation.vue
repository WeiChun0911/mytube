<template>
  <div class="Navigation">
    <ul>
        <li v-on:click="currentPage = 1">1</li>
        <li v-on:click="previousPage(currentPage)" v-text="'<<'"></li>
        <li v-on:click="setCurrentPage($event)">{{firstNumber}}</li>
        <li v-on:click="setCurrentPage($event)">{{secondNumber}}</li>
        <li v-on:click="setCurrentPage($event)">{{thirdNumber}}</li>
        <li v-on:click="setCurrentPage($event)">{{forthNumber}}</li>
        <li v-on:click="setCurrentPage($event)">{{fifthNumber}}</li>
        <li v-on:click="nextPage(currentPage)" v-text="'>>'"></li>
        <li v-on:click="currentPage = totalPage">{{totalPage}}</li>
    </ul>
  </div>
</template>

<script>
export default {  
  name: 'PageNavigation',
  data(){
    return{
        currentPage: 1,
        totalVideo: 200,
        videoPerPage: 12
    }
  },
  computed:{
      totalPage: function(){
          return (this.totalVideo % this.videoPerPage) + 1
      },
      firstNumber: function(){
        if(this.currentPage >= 3 && this.currentPage <= this.totalPage - 2){
            return this.currentPage -2;
        } 
        if(this.currentPage >= this.totalPage - 2){
            return this.totalPage -4;
        }
        return 1;
      },
      secondNumber: function(){
        if(this.currentPage >= 3 && this.currentPage <= this.totalPage - 2){
            return this.currentPage -1;
        } 
        if(this.currentPage >= this.totalPage - 2){
            return this.totalPage -3;
        }
        return 2;
      },
      thirdNumber: function(){
        if(this.currentPage >= 3 && this.currentPage <= this.totalPage - 2){
            return this.currentPage;
        }
        if(this.currentPage >= this.totalPage - 2){
            return this.totalPage -2;
        }
        return 3;
      },
      forthNumber: function(){
        if(this.currentPage >= 3 && this.currentPage <= this.totalPage - 2){
            return this.currentPage +1;
        }
        if(this.currentPage >= this.totalPage - 2){
            return this.totalPage -1;
        }
        return 4;
      },
      fifthNumber: function(){
        if(this.currentPage >= 3 && this.currentPage <= this.totalPage - 2){
            return this.currentPage +2;
        }
        if(this.currentPage >= this.totalPage - 2){
            return this.totalPage;
        }
        return 5;
      },
  },
  methods:{
    previousPage: function(currentPage){
        console.log(currentPage);
        if(currentPage <=1) return;
        this.currentPage = currentPage - 1;
    },
    nextPage: function(currentPage){
        console.log(currentPage);
        if(currentPage >=200%12+1) return;
        this.currentPage = currentPage + 1;
    },
    setCurrentPage: function(event){
        console.log(event.target.innerText);
        this.currentPage = parseInt(event.target.innerText);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}
ul{
    list-style: none;
}
li{
    display: inline-block;
    padding: 1em;
    margin:5px;
    border: 1px black solid;
}

</style>
