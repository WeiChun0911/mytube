<template>
    <div>
        <ContentSwitcher/>
    </div>
</template>

<script>
    import ContentSwitcher from './components/ContentSwitcher.vue';
    export default {
        name: 'Favorite',
        components: {
            ContentSwitcher
        }
    }
</script>

<style scoped>
    div{
        margin-top: 60px;
        display: grid;
        grid-template-columns: 100px 1fr 100px;
        grid-template-rows: 200px 1fr 200px;
    }
</style>