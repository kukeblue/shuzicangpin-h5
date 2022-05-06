<template>
    <div class="user-agreement-page">
        <div class="title flex-center">用户协议</div>
        <div class="content">
            <h2>一、协议的范围</h2>
            <p />
            <p>1.1 协议适用主体范围</p>
            <p>
                本协议是你与腾讯之间关于你下载、安装、使用、复制本软件，以及使用腾讯相关服务所订立的协议。
            </p>
            <p>1.2 协议关系及冲突条款</p>
            <p>
                本协议被视为《腾讯服务协议》的补充协议，是其不可分割的组成部分，与其构成统一整体。本协议与上述内容存在冲突的，以本协议为准。
            </p>
            <p>
                本协议内容同时包括腾讯可能不断发布的关于本服务的相关协议、业务规则等内容。上述内容一经正式发布，即为本协议不可分割的组成部分，你同样应当遵守。
            </p>
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
.user-agreement-page {
    width: 100%;
    height: 100%;
    overflow: auto;
    .title {
        padding: 0.2rem;
        font-size: 0.5rem;
    }
    .content {
        font-size: 0.35rem;
        text-align: left;
    }
}
</style>
