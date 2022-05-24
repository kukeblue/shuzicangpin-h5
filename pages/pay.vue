<template>
    <div class="pay-page">

        <div class="back-area">
            <img class="logo" src="images/pay/logo.png" alt="">
            <img class="background" src="images/pay/background.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    layout: 'noLoginLayout', // you can set a custom layout for the error page
    data() {
        return {

        }
    },
    methods: {

    },

};
</script>

<style lang='scss'>
.pay-page {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    background-color: #333;
    height: calc(100vh);
    background-image: linear-gradient(90deg, #292B2B, #1E2020);
    display: flex;

    .back-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .logo{
            position: absolute;
            top: 1rem;
            width: 5.5rem;
            height: 1.5rem;
        }
        .background {
            width: 100%;
            height: 4rem;
        }
    }
}
</style>
