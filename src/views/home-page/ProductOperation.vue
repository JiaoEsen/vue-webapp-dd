<template>
    <div class="wrappera" ref="wrappera">
        <div class="productOperation-container">
            <div class="proOpe-top">
                <img src="../../assets/img/dd19.png" alt="">
            </div>
            <div class="job-item">
                <h2 class="job-name">商家运营实习生(2019届)</h2>
                <p class="job-price">2000-5000元/月</p>
                <p class="job-address">杭州市·本科及以上·产品运营设计</p>
                <div class="job-information">
                    <div class="job-left">
                        <div class="portrait"><img src="../../assets/img/dd22.jpeg" alt=""></div>
                        <div class="publisher">
                            <span>侯一·招聘者</span>
                            <span>回复率10%刚刚活跃</span>
                        </div>
                    </div>
                    <div class="job-detail" @click="job">职位详情</div>
                </div>
                <div class="left-line"></div>
            </div>
            <div class="publishing-works">
                <user-video />
                <user-video />
            </div>
            <job-detail :isShow="show"></job-detail>
        </div>
    </div>
</template>

<script>
import UserVideo from '../../components/UserVideo.vue';
import BScroll from 'better-scroll';
import JobDetail from '../../components/JobDetail.vue';
export default {
    components: {
        UserVideo,
        JobDetail
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
        initScroll() {
            this.$bscroll = new BScroll(this.$refs.wrappera, {
                click: 3
            });
        },
        job() {
            // console.log();
            this.show = true
        }
    },
    mounted() {
        setTimeout(() => {
            this.initScroll();
        },500)
    },
    beforeDestroy() {
        this.$bscroll && this.$bscroll.destory();
    }
}
</script>

<style lang="sass" scoped>
.wrappera
    width: 100%
    height: calc( 100vh - 178px )
    overflow: hidden 
.productOperation-container
      
    .proOpe-top
        width: 100%
        img
            width: 100%
    .job-item
        box-sizing: border-box
        padding: 0 0.32rem
        .job-name
            font-size: .34rem
        .job-price
            line-height: 0.60rem
            font-size: .22rem
            color: #fc8e35
        .job-address
            font-size: 0.28rem
        .job-information
            display: flex
            justify-content: space-between
            margin-top: 0.20rem
            .job-left
                display: flex
                align-items: center
                
                .portrait
                    width: 0.5rem
                    height: 0.5rem
                    border-radius: 50%
                    overflow: hidden
                    img
                        width: 0.5rem
                        height: 0.5rem
                .publisher
                    margin-left: 0.20rem
                    font-size: 0.22rem
                    span
                        display: block
                        line-height: 0.22rem
                    & span:nth-child(2)
                        margin-top: 0.12rem
                        font-size: 0.16rem
                        line-height: 0.16rem
                        color: #868a8d
            .job-detail
                font-size: 0.24rem
                padding: 0.14rem 0.24rem
                color: #4da0ff
                border: 1px solid #4da0ff
                border-radius: 3px
        .left-line
            width: 0.8rem
            height: 1px
            margin: 0.40rem 0
            background: #d8d8d8
</style>