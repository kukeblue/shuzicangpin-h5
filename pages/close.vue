<template>
    <div class="page">
         <div class="img_warp">
            <img class="img_notfound" src='~/assets/images/notfound.png'/>
            <div class='message'>{{$route.query.text || '活动已关闭'}}</div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'noLoginLayout', // you can set a custom layout for the error page
    data() {
        return {
        };
    },
    methods: {
    },
    destroyed() {
    }
};
</script>

<style>
::-webkit-scrollbar{display:none}
html,body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.img_warp {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.img_notfound {
    width: 100px;
    height: auto;
}
.message {
    margin-top: 5px;
    color: #999;
}
.list-item {
    font-size: 32px;
}
.__layout {
    width: 100%;
    height: 100%;
    position: relative;
}
.page {
    width: 100%;
    height: 100%;
}
.img_warp {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
</style>
