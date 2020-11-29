<template>
    <div id="app">
        <img alt="MyTube logo" src="./assets/logo.png">
        <ContentSwitcher />
        <VideosArea v-bind:currentPage="currentPage" />
        <PageNavigation v-on:pageChanged="setCurrentPage" />
    </div>
</template>

<script>
    import VideosArea from './components/VideosArea.vue';
    import PageNavigation from './components/PageNavigation.vue';
    import ContentSwitcher from './components/ContentSwitcher.vue';

    export default {
        name: 'App',
        components: {
            VideosArea,
            PageNavigation,
            ContentSwitcher
        },
        data: function () {
            return {
                currentPage: 1
            }
        },
        methods: {
            setCurrentPage: function (page) {
                this.currentPage = page;
            }
        }
    }
</script>

<style scoped>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #app{
        display: grid;
        grid-template-columns: 100px 1fr 100px;
        grid-template-rows: 200px 1fr 200px;
    }
    img{
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 2;
        grid-column-end: 3;
        align-self: center;
        justify-self: center;
    }
</style>