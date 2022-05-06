<template>
    <div class="download-page">
        <div class="content flex-column-center">

        </div>
    </div>
</template>

<script>
export default {
    layout: "noLoginLayout", // you can set a custom layout for the error page
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang='scss'>
.download-page {
    width: 100%;
    height: 100%;
    overflow: auto;

    .content {
        margin: 2em, 1em, 1.5em, 1em
    }
}
</style>
