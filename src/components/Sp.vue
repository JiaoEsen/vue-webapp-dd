<template>
    <transition>
        <div class="sp-container" v-show="showsp">
        <van-nav-bar
        title="我"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="sp-top">置顶我的会话,方便快速保存和查找内容</div>
        <div class="sp-wrapper">
            <div class="sp-item">
                <span>17:18</span>
                <div class="sp-box">
                    <div class="avator">{{ obj.sName }}</div>
                    <div class="sp-i">
                        <span class="fontSize34" style="color: #d4b982">审批</span>
                        <p class="fontSize26" style="color: #000">{{ obj.sName }}提交的请假</p>
                        <p>请假类型：<span>{{ obj.name }}</span></p>
                        <p>开始时间：<span>{{ obj.qdate }}</span></p>
                        <p>结束时间：<span>{{ obj.jdate }}</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tag">
            <div class="a">
                <div><van-icon name="notes-o" color="#16b264" /><span>文件</span></div>
                <div><van-icon name="notes-o" color="#16b264" /><span>文件</span></div>
                <div><van-icon name="notes-o" color="#16b264" /><span>文件</span></div>
                <div><van-icon name="notes-o" color="#16b264" /><span>文件</span></div>
            </div>
            <div class="b">
                <van-icon name="smile-o" />
                <van-search v-model="value" placeholder="请输入搜索关键词" />
                <van-icon name="smile-o" />
                <van-icon name="smile-o" />
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
export default {
    props: {
        showsp:  {
            type: Boolean,
            default: false
        },
        obj: {
            type: Object,
            default() {
                return{}
            }
        }
    },
    data() {
        return {
            // showsp: false
            value: ''
        }
    },
    methods: {
        onClickLeft() {
            this.$emit('gb');
        }
    },
    created() {
        console.log(this.obj);
    }
}
</script>

<style lang="sass" scoped>
.v-enter,.v-leave-to
    transform: translateX(100%)
.v-enter-active, .v-leave-active
    transition: .5s
.sp-container
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #f1f2f4
    z-index: 10
    .tag
        position: fixed
        bottom: 0
        left: 0
        width: 100%
        // background: skyblue
        z-index: 99
        .a
            display: flex
            div
                padding: 0 0.15rem
                height: 0.60rem
                border-radius: 0.30rem
                line-height: 0.60rem
                border: 1px solid #e4e5e7
                font-size: 0.25rem
                margin-left: 0.14rem
                display: flex
                align-items: center
                margin-bottom: 0.2rem
                span
                    margin-left: 0.1rem
        .b
            display: flex
            align-items: center
            padding: 0 0.25rem
            height: .9rem
            background: #edf1f4
            border-top: 1px solid #dee2e3
            border-bottom: 1px solid #dee2e3
            ::v-deep .van-search
                padding: 0
                flex: 1
                background: #fff
                padding: 0 0.2rem
                border-radius: 0.17rem 
                margin: 0 0.2rem    
                .van-search__content
                    padding: 0
                    background: unset
    .sp-top
        line-height: .7rem
        text-align: center
        background: #d3e6f4
        color: #0882d5
        font-size: .26rem
    .sp-wrapper
        width: 100%
        display: flex
        flex-direction: row-reverse
        justify-content: right
        .sp-item
            width: 100%
            &>span
                display: block
                width: 1.15rem
                margin: 0 auto
                padding: 0.10rem 0
                text-align: center
                color: #828282
                font-size: 0.22rem
                background: #fff
                margin: 0.40rem auto 0.40rem
                border-radius: 5px
            .sp-box
                // transform: translateX(100%)
                display: flex
                justify-content: right
                flex-direction: row-reverse
                width: 100%
                .sp-i
                    background: #fff
                    text-align: left
                    padding: 0.30rem
                    border-radius: 10px
                    font-size: 0.30rem
                    p
                        text-align: left
                        color: #a9a9a9
                        font-size: 0.22rem
                        span
                            color: #555658
                            font-size: 0.22rem

                .avator
                    margin: 0 0.2rem
                    margin-left: 0.27rem
                    width: 1rem
                    height: 1rem 
                    text-align: center
                    color: #fff
                    line-height: 1rem
                    background: #0088fe  
                    border-radius: 8px
            p
                text-align: center
.fontSize26   
    font-size: 0.26rem
</style>