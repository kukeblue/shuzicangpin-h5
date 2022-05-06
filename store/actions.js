import { Dialog, Toast } from "@nutui/nutui"
import utils from "../utils/common"
import { loginErrorHandle } from "../utils/errorHandle"

export default {
    /**
     *  接口:微信登录相关
     */
    async getWeChatSign({commit, state }) {
        const res = await this.$axios.$post('/api/activity/get_sign_package', {url: location.href})
        if(res.status === 1) {
            // console.log('debug: getWeChatSign', location.href);
            return res.data
            // if(res.data.closedActivity) {
            //     // 活动关闭的一些设置
            //     res.data.openNotice = false
            //     // res.data.topicBgPic = null
            //     // res.data.topicMusic = null
            // }
            // res.data.TopicMenu = JSON.stringify(res.data.TopicMenu)
            // commit('setPageInfoSetting', {pageInfoSetting: res.data})
        }
    },
    /**
     * 接口: 微信登录接口
     */
    async doLogin({ commit, state, dispatch }, {code, activity_id}) {
        commit('setActivity_id', activity_id)
        const res = await this.$axios.$post('/api/wechat/get_user_openid', {
            activity_id: activity_id,
            code: code,
        })
        if(res.status == 1) {
            commit('setWechatUser', res.data)
            await dispatch('fetchActivityNews')
            await dispatch('fetchActivityData')
            await dispatch('fetchPageInfoSetting')
            await dispatch('fetchGroups')
            // await dispatch('fetchRank')
            // await dispatch('fetchVerifyApply')
            await dispatch('fetchActivityStyle')
            return res.data
        }
        return res
    },
    
    /**
     *  必杀绝技服务端初始化
     */
    async nuxtServerInit ({dispatch, state, commit }, {params, req}) {
        //  x-real-ip 通过nginx配置添加
        const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
        utils.ip = ip
    }
}