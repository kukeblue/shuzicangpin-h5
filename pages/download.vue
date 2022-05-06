<template>
    <div class="download-page">

        <img class="logo" src='/images/download/logo.jpg'></img>
        <div class="content ">
            <div class="title">
                <p>次元岛数藏</p>
                <p>文创加密收藏</p>
            </div>
            <div class="subtitle">
                <p>致力于二次元文化的奇妙之旅</p>
            </div>
            <div class="smalltitle">
                <p>来次元岛数藏数字藏品平台，</p>
                <p> 发现您喜欢的数字藏品。</p>
            </div>
            <img class="ciyuandao" src='/images/download/ciyuandao.png'></img>
            <div class="download-button">
                立即下载
            </div>
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
    background: url('/images/download/background.jpg');
    background-size: 100% 100%;
  
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    padding: 1.5rem 1rem 1.5rem 1rem;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    

    .logo {
        border-radius: 1rem;
        width: 3.5rem;
        height: 3.5rem;
        text-align: center;
        margin: 0 0 1rem 0;
    }

    .content {
        width: 100%;
        height: 100%;
        
        flex-direction: column;
        display: flex;
        align-self: flex-start;

        .title {
            color: rgba(120, 239, 241, 1);
            font-size: 0.8rem;
            letter-spacing: 0.05rem
        }

        .subtitle {
            margin: 0.8rem 0 0 0;
            color: rgba(255, 255, 255, 1);
            font-size: 0.5rem;
        }

        .smalltitle {
            margin: 2em 0 0 0;
            color: rgba(148, 148, 148, 1);
            font-size: 0.35rem;
            line-height: 0.5rem;
        }

        .ciyuandao {
            width: 3.0rem;
            height: 0.85rem;
            text-align: center;
            margin: 3rem 0 0.2rem 0;
        }

        .download-button {
            margin: 1em 0 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 8rem;
            height: 1.2rem;
            font-size: 0.4rem;
            background-color: rgba(120, 239, 241, 1);
            border-radius: 1rem;
            box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
        }
    }


}
</style>
