<template>
  <div id="app" >
    <img alt="MyTube logo" src="./assets/logo.png">
    <VideosArea v-bind:currentPage="currentPage"/>
    <PageNavigation v-on:pageChanged="setCurrentPage"/>
  </div>
</template>

<script>
import VideosArea from './components/VideosArea.vue';
import PageNavigation from './components/PageNavigation.vue';

export default {
  name: 'App',
   components: {
    VideosArea,
    PageNavigation
  },
  data: function(){
    return {
      currentPage: 1
    }
  },
  methods:{
    setCurrentPage: function(page){
      this.currentPage = page;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
