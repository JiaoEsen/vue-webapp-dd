<template>
    <div class="collection-container">
        <div class="coll-wrapper">
            <div class="coll-title">
                <div>
                    <h3>我的</h3>
                    <h3>全部</h3>
                </div>
                <span>管理</span>
            </div>
            <ul>
                <router-link 
                    v-for="d in list"
                    :key="d.name"
                    tag="li" 
                    :to="d.path">
                    <img :src="d.imgPath" alt="">
                    <span>{{ d.name }}</span>
                </router-link>
            </ul>
            <van-collapse v-model="activeName" accordion>
                <van-collapse-item title="全部" name="1">
                    <ul>
                <router-link 
                    v-for="d in list"
                    :key="d.name"
                    tag="li" 
                    :to="d.path">
                    <img :src="d.imgPath" alt="">
                    <span>{{ d.name }}</span>
                </router-link>
            </ul>
                </van-collapse-item>
                <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
                <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
            </van-collapse>
        </div>
        
        <transition name="r">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName:'1',
            list: [{
                name: '教务管理',
                imgPath: require('../../assets/img/dd1.jpg'),
                path: '/home/collection/checkWorkAttendanc',
            },{
                name: '练习',
                imgPath: require('../../assets/img/dd2.jpg'),
                path: '/home/collection/educationalAdmin',
            },{
                name: '家校通知',
                imgPath: require('../../assets/img/dd3.jpg'),
                path: '/home/collection/homeSchoolNotice',
            },{
                name: '请假',
                imgPath: require('../../assets/img/dd8.jpg'),
                path: '/home/collection/leave'
            },{
                name: '考勤打卡',
                imgPath: require('../../assets/img/dd4.jpg'),
                path: '/home/collection/journal',
            },{
                name: '日志',
                imgPath: require('../../assets/img/dd5.jpg'),
                path: '/home/collection/practice',
            },{
                name: '视频会议',
                imgPath: require('../../assets/img/dd6.jpg'),
                path: '/home/collection/videoconferencing',
            }]
        }
    }
}
</script>

<style lang="sass" scoped>
.collection-container
    height: calc( 100vh - 178px )
    overflow: hidden
    background: #f2f1f6
    padding: 0 0.15rem
    a
        color: blue
    .r-enter
        transform: translateX(100%)
    .r-enter-active
        transition: 0.3s
    .r-leave-to
        transform: translateX(100%)
    .r-leave-active
        transition: 0.3s
    .coll-wrapper
        padding: 0.25rem
        border-radius: 5px
        background: #fff
        .coll-title
            height: .6rem
            line-height: .6rem
            display: flex
            justify-content: space-between
            font-size: .28rem
            // background: red
            color: #bbbdbd
            &>div
                display: flex
                h3
                    padding-right: .15rem
            span
                font-size: .24rem
        ul
            display: flex
            flex-wrap: wrap
            // justify-content: space-between
            // padding-top: .2rem
            li
                display: flex
                flex-direction: column
                width: calc(100%/5)
                padding-top: .2rem
                img
                    display: block
                    width: .95rem
                    height: .95rem
                    margin: 0 auto
                span
                    padding-top: .1rem
                    text-align: center
                    font-size: .22rem
                    color: #828484
</style>