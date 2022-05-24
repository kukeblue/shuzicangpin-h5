<script src="https://cdn.jsdelivr.net/npm/vue-demi"></script>
<script src="https://cdn.jsdelivr.net/npm/@vuelidate/core"></script>
<script src="https://cdn.jsdelivr.net/npm/@vuelidate/validators"></script>
<template>
    <div class="login-page">
        <div class="app">
            <img class="logo" src="images/register/icon_download_logo.png" alt="">
            <div class="logon">
                <form @submit="checkForm" class="form-box">
                    <div class="form-item">
                        <input prop="phone" v-model="formData.phone" type="tel" autocomplete="off" placeholder="请输入手机号"
                            @focus="cleanErrorText('phoneError')" />
                        <p v-show="errors.phoneError" class="errorText">{{ errors.phoneError }}</p>
                    </div>
                    <div class="form-item form-code">
                        <input type="tel" prop="code" v-model="formData.code" maxlength="6" autocomplete="off"
                            placeholder="请输入验证码" @focus="cleanErrorText('codeError')" />
                        <div class="code">
                            获取验证码
                        </div>

                    </div>
                    <p v-show="errors.codeError" style="color: red;
                        padding-left: 0.2rem;" class="errorText">{{ errors.codeError }}</p>
                    <div class="form-item">
                        <input type="password" v-model="formData.pwd" autocomplete="off" placeholder="请输入密码"
                            @focus="cleanErrorText('pwdError')" />
                        <p v-show="errors.pwdError" class="errorText">{{ errors.pwdError }}</p>
                    </div>
                    <div class="form-item">
                        <input type="password" name="confirmpwd" v-model="formData.confirmpwd" autocomplete="off"
                            placeholder="请确认密码" @focus="cleanErrorText('confirmpwdError')">
                        <p v-show="errors.confirmpwdError" class="errorText">{{ errors.confirmpwdError }}</p>
                    </div>
                    <div class="form-item">
                        <input type="text" name="invite_code" v-model="formData.invite_code" disabled="disabled"
                            maxlength="6" autocomplete="off" placeholder="请输入邀请码"
                            @focus="cleanErrorText('inviteCodeError')">
                        <p v-show="errors.inviteCodeError" class="errorText">{{ errors.inviteCodeError }}</p>
                    </div>
                    <div class="form-item">
                        <button type="submit" value="Submit" class="submit"
                            style="background-color: rgb(80, 82, 82); color: rgb(181, 182, 189);">
                            立即注册
                        </button>
                    </div>
                    <div class="form-item">
                        <a class="download-submit" href="/download">
                            立即下载
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'noLoginLayout', // you can set a custom layout for the error page
    data() {
        return {
            formData: {
                phone: "",
                code: "",
                pwd: "",
                confirmpwd: "",
                invite_code: "",
            },
            errors: {
                phoneError: null,
                codeError: null,
                pwdError: null,
                confirmpwdError: null,
                inviteCodeError: null

            },
            
        };
    },
    methods: {
        cleanErrorText: function(errorFiled){
            this.errors[errorFiled] = null
            this.errors = Object.assign({}, this.errors)
        },
        checkForm: function (e) {
            this.errors = [];
            if (this.formData.phone=="") {
                this.errors.phoneError = "号码不能为空"
            }
            if (this.formData.code=="") {
                 this.errors.codeError = "验证码不能为空"
            } if (this.formData.pwd=="") {
                this.errors.pwdError='密码不能为空';
            }
            if (this.formData.confirmpwd==""||this.formData.confirmpwd!=this.formData.pwd) {
                this.errors.confirmpwdError='请输入确认密码';
            }
            if (this.formData.invite_code=="") {
                this.errors.inviteCodeError='请输入邀请码';
            }

            e.preventDefault();
        },
        destroyed() {
        }
    }
}
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
    background-image: linear-gradient(90deg, #292B2B, #1E2020);

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
            width: 89%;
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

                    .errorText {
                        color: red;
                        padding-left: 0.2rem;

                    }

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
                    text-align: center;
                    font-size: 0.18rem;
                    line-height: 0.44rem;
                    border-radius: 0.5rem;
                    color: #B5B6BD;
                    background: #505252;
                    border: none;
                }

                input {
                    border: none;
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
                    width: 34%;
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