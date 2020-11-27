<template>
  <div class="Navigation">
    <ul>
        <li>1</li>
        <li v-text="'<<'"></li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li v-text="'>>'"></li>
        <li>{{200%12+1}}</li>
    </ul>
  </div>
</template>

<script>
export default {  
  name: 'PageNavigation'
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
