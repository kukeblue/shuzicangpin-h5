<template>
    <div class="signIn-page">
        <div class="signIn-block">
            <div class="first-row">
                <div class="info">
                    <p>我的魔果:</p> <span class="number"> 19</span>
                    <div class="moguo-block"><img src="/images/signin/moguo.png" class="moguo"></div>
                </div>
                <div>查看></div>
            </div>
            <div class="card-row">
                <div class="sigin-card">
                    <div class="card-unactive">
                        <img src="/images/signin/moguo.png" class="card-moguo-unactive">
                        <p class="add-num-unactive">+2</p>
                    </div>
                    <p class="date-active"> 今日 </p>
                </div>


                <div class="sigin-card">
                    <div class="card">
                        <img src="/images/signin/moguo.png" class="card-moguo">
                        <p class="add-num">+2</p>
                    </div>
                    <p class="date"> 第2天 </p>
                </div>
                <div class="sigin-card">
                    <div class="card">
                        <img src="/images/signin/moguo.png" class="card-moguo">
                        <p class="add-num">+2</p>
                    </div>
                    <p class="date"> 第3天 </p>
                </div>
                <div class="sigin-card">
                    <div class="card">
                        <img src="/images/signin/moguo.png" class="card-moguo">
                        <p class="add-num">+2</p>
                    </div>
                    <p class="date"> 第4天 </p>
                </div>
                <div class="sigin-card">
                    <div class="card">
                        <img src="/images/signin/moguo.png" class="card-moguo">
                        <p class="add-num">+2</p>
                    </div>
                    <p class="date"> 第5天 </p>
                </div>
                <div class="sigin-card">
                    <div class="card">
                        <img src="/images/signin/moguo.png" class="card-moguo">
                        <p class="add-num">+2</p>
                    </div>
                    <p class="date"> 第6天 </p>
                </div>
            </div>
            <div class="signin-button">
                明日签到 +3<img src="/images/signin/moguo.png" class="moguo">
            </div>
        </div>

        <div class="task-block">
            <div class="title-row">
                <img src="/images/signin/line.png" class="line">
                <p class="title"> 任务列表 </p><img src="/images/signin/line.png" class="line">
            </div>
            <div class="underline"></div>
            <div class="taskrow">
                <div class="task-info">
                    <div class="task-name">
                        <p class="name">邀请好友</p>
                        <div class="moguo-block"><span class="number"> +10</span><img src="/images/signin/moguo.png"
                                class="moguo1"></div>
                    </div>
                    <div class="task-des">
                        每邀请一位好友可得10个魔果
                    </div>
                </div>
                <div class="task-button">
                    立即邀请
                </div>
            </div>
            <div class="underline"></div>
            <div class="taskrow">
                <div class="task-info">
                    <div class="task-name">
                        <p class="name">购买藏品/盲盒(每满1元)</p>
                        <div class="moguo-block"><span class="number">+1</span><img src="/images/signin/moguo.png"
                                class="moguo1"></div>
                    </div>
                    <div class="task-des">
                        <p>购买藏品/盲盒可获得与实际支付金额
                            (小数点前整数)相同数量的魔果</p>
                    </div>
                </div>
                <div class="task-button">
                    立即邀请
                </div>
            </div>
            <div class="underline"></div>
            <div class="taskrow">
                <div class="task-info">
                    <div class="task-name">
                        <p class="name">购买藏品</p>
                        <div class="moguo-block"><span class="number"> +5</span><img src="/images/signin/moguo.png"
                                class="moguo1"></div>
                    </div>
                    <div class="task-des">
                        完成实名认证后可得5个魔果
                    </div>
                </div>
                <div class="task-button">
                    立即购买
                </div>
            </div>
            <div class="underline"></div>
             <div class="taskrow">
                <div class="task-info">
                    <div class="task-name">
                        <p class="name">注册账号</p>
                        <div class="moguo-block"><span class="number"> +1</span><img src="/images/signin/moguo.png"
                                class="moguo1"></div>
                    </div>
                    <div class="task-des">
                        注册账号可得1个魔果
                    </div>
                </div>
                <div class="task-button">
                    立即购买
                </div>
            </div>
            <div class="underline"></div>
            
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
.signIn-page {
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255, 144, 0);

    .moguo {
        width: 0.4rem;
        height: 0.4rem;
    }

    .signIn-block {
        background-color: white;
        margin: 0.5rem 0.3rem 0.5rem 0.3rem;
        width: 9rem;
        height: 6.3rem;
        border-radius: 0.3rem;
        padding: 0.2rem 0.3rem 0.2rem 0.3rem;
        display: flex;
        flex-direction: column;

        .first-row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0.2rem 0.1rem 0.1rem 0.1rem;
            font-size: 0.4rem;
            height: 1rem;
            color: rgb(126, 126, 126);

            .info {
                height: 2rem;
                display: flex;
                flex-direction: row;

                .number {
                    font-size: 0.45rem;
                    color: black;
                    font-weight: bold;
                    margin-left: 0.1rem;
                }

                .moguo-block {
                    margin-top: 0.05rem;
                }
            }
        }

        .card-row {
            display: flex;
            flex-direction: row;

            .sigin-card {
                display: flex;
                flex-direction: column;
                align-items: center;

                .date {
                    font-size: 0.35rem;
                    color: rgba(67, 67, 67, 1);
                }

                .date-active {
                    font-size: 0.35rem;
                   
                    color: rgba(204, 20, 20, 1);
                }

                .card {
                    width: 1.4rem;
                    height: 2rem;
                    border-radius: 0.2rem;
                    background: linear-gradient(to right, rgb(252, 220, 101), rgb(250, 161, 6));
                    margin-right: 0.1rem;
                    margin-bottom: 0.1rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    .card-moguo {
                        width: 0.9rem;
                        height: 0.9rem;
                        margin-bottom: 0.1rem;
                    }

                    .add-num {
                        color: rgba(187, 53, 0, 1);
                        font-size: 0.4rem;
                        font-weight: bold;
                    }
                }

                .card-unactive {
                    width: 1.4rem;
                    height: 2rem;
                    border-radius: 0.2rem;
                    background: RGBA(221, 221, 221, 1);
                    margin-right: 0.1rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 0.1rem;

                    .card-moguo-unactive {
                        width: 0.9rem;
                        height: 0.9rem;
                        margin-bottom: 0.1rem;
                    }

                    .add-num-unactive {
                        color: rgba(142, 142, 140, 1);
                        font-size: 0.4rem;
                        font-weight: bold;
                    }
                }
            }
        }

        .signin-button {
            margin: 1em 0 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 8rem;
            height: 1.3rem;
            align-self: center;
            background-color: RGBA(237, 237, 237, 1);
            border-radius: 1rem;

            color: rgba(187, 53, 0, 1);
            font-size: 0.4rem;
        }


    }

    .task-block {
        background-color: white;
        margin: 0.2rem 0.1rem 0.5rem 0.1rem;
        width: 9.2rem;
        height: 9rem;
        border-radius: 0.3rem;
        padding: 0.4rem 0.2rem 0.2rem 0.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .taskrow {
            width: 9rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.2rem;

            .task-button {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 2.8rem;
                height: 0.95rem;
                background-color: white;
                border-style: solid;
                border-radius: 1.5rem;
                border-width: 0.03rem;
                border-color: rgba(224, 148, 27, 1);
                color: rgba(224, 148, 27, 1);
                font-size: 0.45rem;
            }
            .task-info {
                display: flex;
                flex-direction: column;
                width: 7.5rem;
                .task-name {
                    display: flex;
                    flex-direction: row;
                    margin-bottom: 0.1rem;
                    .name {
                        font-weight: bold;
                        font-size: 0.45rem;
                    }
                    .number {
                        font-size: 0.45rem;
                        color: rgba(255, 114, 0, 1);
                        font-weight: bold;
                        margin-left: 0.1rem;

                    }
                    .moguo-block {
                        margin-top: 0.05rem;
                        .moguo1 {
                            width: 0.42rem;
                            height: 0.4rem;
                        }
                    }
                }
                .task-des {
                    color: rgba(147, 147, 147, 1);
                    font-size: 0.3rem;
                }
            }
        }
        .underline {
            width: 9rem;
            height: 0.03rem;
            background-color: rgba(246, 246, 246, 1);
            margin-top: 0.2rem;
        }

        .title-row {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;

            .line {
                width: 1.5rem;
                height: 0.15rem;
            }

            .title {
                font-size: 0.45rem;
                margin: 0 0.3rem 0 0.3rem;
            }
        }
    }

}
</style>
