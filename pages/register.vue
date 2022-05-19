<template>
    <div class="login-page">
        <div class="app">
            <img class="logo" src="images/register/icon_download_logo.png" alt="">
            <div class="logon">
                <div class="form-box">
                    <div class="form-item"> <input type="tel" name="phone" autocomplete="off" placeholder="请输入手机号"
                            class="">

                    </div>
                    <div class="form-item form-code">
                        <input type="tel" name="code" maxlength="6" autocomplete="off" placeholder="请输入验证码">
                        <div class="code">
                            获取验证码
                        </div>
                    </div>
                    <div class="form-item">
                        <input type="password" name="password" autocomplete="off" placeholder="请输入密码">
                    </div>
                    <div class="form-item">
                        <input type="password" name="password" autocomplete="off" placeholder="请确认密码">
                    </div>
                    <div class="form-item">
                        <input type="text" name="invite_code" disabled="disabled" maxlength="6" autocomplete="off"
                            placeholder="请输入邀请码" value="0GUYHG">
                    </div>
                    <div class="form-item">
                        <div class="submit" style="background-color: rgb(80, 82, 82); color: rgb(181, 182, 189);">
                            立即注册
                        </div>
                    </div>
                    <div class="form-item">
                        <a class="download-submit" href="/download">
                            立即下载
                        </a>
                    </div>
                </div>
            </div>
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

<style lang='scss'>
.login-page {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    background-color: #333;
    height: calc(100vh);
    .app {
        width: 100%;
        height: 100%;
        background: url("static/images/register/img_download_bg.png") no-repeat center top;
        background-size: 100% auto;


        .logo {
            display: block;
            width: 23.7%;
            margin: 0.8rem auto 0;
            margin-bottom: 2rem;
        }

        .logon {
            width: 91.6%;
            margin: 0.55rem auto 0.35rem;


            .form-box {
                width: 100%;
                overflow: hidden;
                /* background-color: #fff; */
                border-radius: 15px;

                .form-item {
                    width: 100%;
                    height: 1.2rem;
                    margin-bottom: 0.5rem;

                    .download-submit {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 99.5%;
                        height: 100%;
                        text-align: center;
                        font-size: 0.18rem;
                        line-height: 0.44rem;
                        border-radius: 0.5rem;
                        color: #6EEEFC;
                        background-image: url("static/images/register/btn_download.png");
                        background-size: 100% 100%;
                    }
                }

                .submit {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    font-size: 0.18rem;
                    line-height: 0.44rem;
                    border-radius: 0.5rem;
                    color: #B5B6BD;
                    background: #505252;
                }

                input {
                    border:none;
                    width: 95%;
                    height: 100%;
                    background-color: #363737;
                    font-size: 0.14rem;

                    border-radius: 15px;
                    padding: 0 0.16rem;
                    color: #ffffff;
                }
            }

            .form-code {
                display: flex;
                justify-content: space-around;

                .code {
                    margin-left: 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 32%;
                    height: 100%;

                    vertical-align: center;
                    text-align: center;
                    font-size: 0.14rem;

                    border-radius: 0.5rem;
                    color: #1E2020;
                    background: linear-gradient(90deg, #F7AAF0, #0FF8EE);
                }
            }
        }
    }
}
</style>