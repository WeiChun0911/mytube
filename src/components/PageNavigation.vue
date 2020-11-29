<template>
  <div class="Navigation">
    <ul>
      <li v-on:click="currentPage = 1">1</li>
      <li v-on:click="previousPage(currentPage)" v-text="'<<'"></li>
      <li v-bind:class="{isCurrentPage: isCurrentPage(firstNumber)}" v-on:click="setCurrentPage($event)">{{firstNumber}}</li>
      <li v-bind:class="{isCurrentPage: isCurrentPage(secondNumber)}" v-on:click="setCurrentPage($event)">{{secondNumber}}</li>
      <li v-bind:class="{isCurrentPage: isCurrentPage(thirdNumber)}" v-on:click="setCurrentPage($event)">{{thirdNumber}}</li>
      <li v-bind:class="{isCurrentPage: isCurrentPage(forthNumber)}" v-on:click="setCurrentPage($event)">{{forthNumber}}</li>
      <li v-bind:class="{isCurrentPage: isCurrentPage(fifthNumber)}" v-on:click="setCurrentPage($event)">{{fifthNumber}}</li>
      <li v-on:click="nextPage(currentPage)" v-text="'>>'"></li>
      <li v-on:click="currentPage = totalPage">{{totalPage}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PageNavigation',
    data() {
      return {
        currentPage: 1,
        totalVideo: 200,
        videoPerPage: 12
      }
    },
    computed: {
      totalPage: function () {
        return (this.totalVideo % this.videoPerPage) + 1
      },
      firstNumber: function () {
        if (this.currentPage >= 3 && this.currentPage <= this.totalPage - 2) {
          return this.currentPage - 2;
        }
        if (this.currentPage >= this.totalPage - 2) {
          return this.totalPage - 4;
        }
        return 1;
      },
      secondNumber: function () {
        if (this.currentPage >= 3 && this.currentPage <= this.totalPage - 2) {
          return this.currentPage - 1;
        }
        if (this.currentPage >= this.totalPage - 2) {
          return this.totalPage - 3;
        }
        return 2;
      },
      thirdNumber: function () {
        if (this.currentPage >= 3 && this.currentPage <= this.totalPage - 2) {
          return this.currentPage;
        }
        if (this.currentPage >= this.totalPage - 2) {
          return this.totalPage - 2;
        }
        return 3;
      },
      forthNumber: function () {
        if (this.currentPage >= 3 && this.currentPage <= this.totalPage - 2) {
          return this.currentPage + 1;
        }
        if (this.currentPage >= this.totalPage - 2) {
          return this.totalPage - 1;
        }
        return 4;
      },
      fifthNumber: function () {
        if (this.currentPage >= 3 && this.currentPage <= this.totalPage - 2) {
          return this.currentPage + 2;
        }
        if (this.currentPage >= this.totalPage - 2) {
          return this.totalPage;
        }
        return 5;
      },
    },
    methods: {
      isCurrentPage: function (number) {
        return this.currentPage == number;
      },
      previousPage: function (currentPage) {
        if (currentPage <= 1) return;
        this.currentPage = currentPage - 1;
        this.$emit('pageChanged', this.currentPage);
      },
      nextPage: function (currentPage) {
        if (currentPage >= this.totalPage) return;
        this.currentPage = currentPage + 1;
        this.$emit('pageChanged', this.currentPage);
      },
      setCurrentPage: function (event) {
        this.currentPage = parseInt(event.target.innerText);
        this.$emit('pageChanged', this.currentPage);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    box-sizing: border-box;
  }

  .Navigation {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 4;
  }

  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    padding: 1em;
    margin: 5px;
    border: 1px black solid;
  }

  .isCurrentPage {
    background: black;
    color: cornsilk;
  }
</style>