<template>
  <div id="app" >
    <img alt="MyTube logo" src="./assets/logo.png">
    <HelloWorld v-bind:currentPage="currentPage"/>
    <PageNavigation v-on:pageChanged="setCurrentPage"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import PageNavigation from './components/PageNavigation.vue';

export default {
  name: 'App',
  data: function(){
    return {
      currentPage: 1
    }
  },
  components: {
    HelloWorld,
    PageNavigation
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
