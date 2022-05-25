<template>
    <div class="pay-page">
        <div class="back-area">
            <img class="logo" src="images/pay/logo.png" alt="">
            <img class="background" src="images/pay/background.png" alt="">
            <div class="title">二次元数字藏品聚合平台</div>
            <div class="product-card">
                <div class="product-row">
                    <div class="img"></div>
                    <div class="product-info-column">
                        <div class="product-title">三世佛</div>
                        <div class="product-infoRow">
                            <div class="circle-img"></div>
                            <div class="sub-title">次元岛</div>
                        </div>
                    </div>
                </div>
                <div class="underline"></div>
                <div class="buyInfo-row ">
                    <div class="info-title">商品总额</div>
                    <div class="info-number">￥9</div>
                </div>
                <div class="underline"></div>
                <div class="buyInfo-row ">
                    <div class="info-title">数量</div>
                    <div class="info-number">x1</div>
                </div>
                <div class="underline"></div>
                <div class="buyInfo-row ">
                    <div class="info-title">合计</div>
                    <div class="info-number-all">￥9</div>
                </div>
            </div>
            <div class="pay-card">
                <div class="pay-title">支付方式</div>
                <template v-for="(item, index) in payImage">
                    <div class="pay-row">
                        <div class="flex-row-align">
                            <img class="pay-img" v-bind:src="item.img">
                            <div class="pay-row-title">{{ item.name }}</div>
                        </div>
                        <img class="select-button"
                            v-bind:src="currentIndex == index ? 'images/pay/select.png' : 'images/pay/unselect.png'"
                            v-on:click="currentIndex = index;">
                    </div>
                    <div class="underline"></div>
                </template>
            </div>
            <div class="submit-row">
                <div class="submit-info-number">￥9</div>
                <button type="submit" value="Submit" class="submit">
                    确认支付
                </button>
            </div>
        </div>


    </div>

</template>

<script>

export default {

    layout: 'noLoginLayout', // you can set a custom layout for the error page
    data() {
        return {
            currentIndex: 1,
            payImage: [

                { img: "images/pay/weixin.png", name: "微信" }, { img: "images/pay/zhifubao.png", name: "支付宝" }, { img: "images/pay/yue.png", name: "余额" },
            ]
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
    background-color: black;
    height: calc(100vh);
    display: flex;

    .underline {
        width: 8.5rem;
        height: 0.01rem;
        background-color: grey;
        margin-top: 0.35rem;
    }

    .back-area {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        .product-card {
            position: relative;
            top: -1.5rem;
            width: 8.5rem;
            height: 6.8rem;
            background-color: RGBA(41, 43, 42, 1);
            margin: 0 0.1rem 0rem 0.1rem;
            border-radius: 0.5rem;
            display: flex;
            flex-direction: column;
            padding: 0.4rem 0.4rem 0.4rem 0.4rem;

            .product-row {
                display: flex;
                flex-direction: row;
                height: 2.5rem;
                margin-bottom: 0.15rem;

                .img {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 0.2rem;
                    background-color: #5C5C5C;
                }

                .product-info-column {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin: 0.15rem 0 0.15rem 0.3rem;
                    justify-content: space-between;

                    .product-title {
                        color: white;
                        font-size: 0.5rem;
                    }

                    .product-infoRow {
                        display: flex;
                        flex-direction: row;
                        align-items: center;

                        .circle-img {
                            width: 0.7rem;
                            height: 0.7rem;
                            border-radius: 50%; //圆角百分比
                            background-color: #5C5C5C;
                            margin-right: 0.2rem;
                        }

                        .sub-title {
                            font-size: 0.38rem;
                            color: #5C5C5C
                        }
                    }
                }
            }

            .buyInfo-row {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-end;
                height: 1rem;
                width: 8.5rem;

                .info-title {
                    font-size: 0.4rem;
                    color: grey;
                }

                .info-number {
                    color: white;
                    font-size: 0.4rem;
                }

                .info-number-all {
                    color: #F46464;
                    font-size: 0.4rem;
                }
            }
        }

        .pay-card {
            position: relative;
            top: -1.1rem;
            width: 8.5rem;
            height: 5.8rem;
            background-color: RGBA(41, 43, 42, 1);
            margin: 0 0.1rem 0.1rem 0.1rem;
            border-radius: 0.5rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0.4rem 0.4rem 0.4rem 0.4rem;

            .pay-title {
                font-size: 0.4rem;
                color: grey;
                margin-bottom: 0.1rem;
            }

            .pay-row {
                width: 8.5rem;
                height: 1.3rem;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-end;

                .pay-row-title {
                    font-size: 0.4rem;
                    color: grey;
                }

                .select-button {
                    width: 0.8rem;
                    height: 0.8rem;
                }

                .pay-img {
                    width: 1rem;
                    height: 1rem;
                    background-color: grey;
                    border-radius: 0.3rem;
                    margin-right: 0.2rem;
                }
            }
        }

        .submit-row {
            position: relative;
            top: -1.95rem;
            width: 9rem;
            margin: 1rem 0.5rem 1rem 0.5rem;
            padding: 0.35rem 0.5rem 0.7rem 0.5rem;
            background-color: #292B2A;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .submit-info-number {
                font-size: 0.5rem;
                color: #F46464;
            }
            .submit {
                width: 3.5rem;
                height: 1.1rem;
                text-align: center;
                font-size: 0.45rem;
                line-height: 0.44rem;
                border-radius: 0.5rem;
                color: black;
                background-color: #78EFF1;
                border: none;
            }
        }

        .title {
            position: absolute;
            top: 2.0rem;
            color: white;
            font-size: 0.5rem;
            letter-spacing: 0.05rem
        }

        .logo {
            position: absolute;
            top: 0.5rem;
            width: 5rem;
            height: 1.25rem;
        }

        .background {
            width: 100%;
            height: 4.5rem;
        }
    }
}
</style>
