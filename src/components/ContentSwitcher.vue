<template>
    <ul>
        <li v-on:click="go('/')">首頁</li>
        <li v-on:click="go('/favorite')">收藏內容</li>
    </ul>
</template>

<script>
    export default {
        name: 'ContentSwitcher',
        methods: {
            go(href) {
                this.$root.currentRoute = href
                window.history.pushState(
                    null,
                    href,
                    href
                )
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        text-align: left;
        padding: 0;
        grid-row-start: 1;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 2;
    }
    li {
        line-height: 100px;
        text-align: center;
        font-weight: bold;
    }
</style>