<template>
    <div class="leave-container">
        <div class="leave-top">
            <van-nav-bar
            title="请假"
            >
                <template #left>
                    <van-icon @click.self="onClickLeft" name="arrow-left" />
                    <van-icon name="cross" />
                </template>
            </van-nav-bar>
        </div>
        <div class="leave-content">
            <div class="leave-item" v-for="d in list" :key="d.id" @click="onClick(d)">
                <div>
                    <i :style="`background: ${d.color}`"></i>
                    <span>{{ d.name }}</span>
                </div>
                <div>
                    <span>{{ d.pic }}</span>
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>
        <transition name="leaveDtail">
            <router-view/>
        </transition>

    </div>
</template>

<script>
// import LeaveItem from '../../components/LeaveItem.vue';
export default {
    data() {
        return {
            list: [
                {
                    id: 'q1',
                    color: '#f99847',
                    name: '事假',
                    pic: '按小时请假'
                },
                {
                    id: 'q2',
                    color: '#3894fb',
                    name: '调休',
                    pic: '按小时请假'
                },
                {
                    id: 'q3',
                    color: '#fd513b',
                    name: '病假',
                    pic: '按小时请假'
                },
                {
                    id: 'q4',
                    color: '#1eb884',
                    name: '年假',
                    pic: '按半天请假'
                },
                {
                    id: 'q5',
                    color: '#ffe14d',
                    name: '产假',
                    pic: '按天请假'
                },
                {
                    id: 'q6',
                    color: '#4191f0',
                    name: '陪产假',
                    pic: '按天请假'
                }
            ]
        }
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        },
        onClick(d) {
            console.log(d);
            this.$router.push({ 
                path: '/home/collection/leave/laveDetail' , 
                query: { 
                    name: d.name,
                    pic: d.pic
                } 
            });
        }
    }
}
</script>

<style lang="sass" scoped>
.leave-container
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #f8f8f8
    z-index: 99
    .leaveDtail-enter, .leaveDtail-leave-to
        transform: translateX(100%)
    .leaveDtail-enter-active,.leaveDtail-leave-active
        transition: .5s
    ::v-deep .van-nav-bar .van-icon
        color: #000
    .leave-item
        width: 100%
        display: flex
        align-items: center
        height: .85rem
        padding: 0 .35rem
        background: #fff
        border-top: 1px solid #efefef
        border-bottom: 1px solid #efefef
        margin-bottom: .3rem
        div:nth-child(1)
            display: flex
            align-items: center
            font-size: .28rem
            i
                width: .15rem
                height: .15rem
                background: red
                border-radius: 50%
                margin-right: .15rem
            span
                width: 1.2rem
                // background: green
                border-right: 1px solid #ededed
        div:nth-child(2)
            flex: 1
            display: flex
            align-items: center
            justify-content: space-between
            padding-left: .40rem
            font-size: .24rem
</style>