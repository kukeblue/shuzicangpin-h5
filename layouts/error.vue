<template>
  <div class="img_warp">
    <img class="img_notfound" src='~/assets/images/notfound.png'/>
    <div class='message'>record not found</div>
</div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'noLoginLayout' // you can set a custom layout for the error page
}
</script>

<style  lang='scss'>
 ::-webkit-scrollbar{display:none}
        html,body {
            width: 100%;
            height: 100%;
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
</style>