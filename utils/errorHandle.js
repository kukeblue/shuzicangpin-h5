import { Dialog } from "@nutui/nutui"
import utils from "./common"

const ErrorHandle = {
    loginErrorHandle(res, that) {
        if(res.status == 2 && res.msg == '请先登陆') {
            that.$dialog({
                noCancelBtn: true,
                // noOkBtn:true,
                title: "微信登录过期，请重新登录",
                okBtnTxt: "重新登录",
                onOkBtn:()=>{
                    utils.wxloginHandle({activity_id: that.$store.state.activity_id})
                }
            });
            return true

        }else {
            return false
        }
    }
}

export default ErrorHandle 