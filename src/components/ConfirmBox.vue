<template>
    <transition name="confirmBox">
        <div class="confirm-box" v-show="show">
        <van-nav-bar
        title="请选择"
        left-arrow>
            <template #left>
                <van-icon name="arrow-left" size="20" @click.self="back" />
            </template>
        </van-nav-bar>

        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <div class="add-item">
            <van-icon name="add" size="40" color="#0088fe" />
            <div class="add-item-pic">
                <p class="fontSize32">添加更多成员</p>
                <p class="fontSize26">邀请或者添加不在企业通讯录内的成员</p>
            </div>
        </div>
        <div class="select-item">
            <van-checkbox v-model="checked">全选</van-checkbox>
        </div>
        <div class="select-item">
            <!-- <van-checkbox v-model="checked"></van-checkbox> -->
            
            <van-checkbox-group v-model="result" @change="checkChange">
                <van-checkbox name="a" style="margin-bottom: 0">
                    <div class="ab">
                        <div class="name">意森</div>
                        <p class="name-text">焦意森</p>
                    </div>
                </van-checkbox>
            </van-checkbox-group>
        </div>
    </div>
    </transition>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            value: '',
            checked: false,
            result: [],
            list: [
                {
                    id: 'a',
                    name: '意森',    
                },
                {
                    id: 'b',
                    name: '伟华'
                }
            ]
        }
    },
    methods: {
        back() {
            this.$emit('gb');
        },
        checkChange(event) {
            const data = this.list.filter(i => i.id === event[0]);
            this.back();
            this.$emit('data', data);
        }
    }
}
</script>

<style lang="sass" scoped>
.confirm-box
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #f6f6f6
    z-index: 3
    .add-item
        padding: 0 0.40rem
        height: 1.5rem
        display: flex
        align-items: center
        background: #fff
        .add-item-pic
            margin-left: .20rem
    .select-item
        display: flex
        align-items: center
        padding: 0.30rem 0.20rem
        background: #fff
        margin: 0.30rem 0
        .ab
            display: flex
            align-items: center
        ::v-deep .van-checkbox-group .van-checkbox
            // margin-bottom: 0.20rem
            // margin-bottom: 0.20rem
        div.name
            width: 1rem
            height: 0.95rem
            text-align: center
            line-height: 0.95rem
            margin-left: 0.2rem
            background: #0088fe
            border-radius: 5px
            color: #fff
        .name-text
            margin-left: .2rem
    .fontSize32
        font-size: .32rem
    .fontSize26
        font-size: .26rem
.confirmBox-enter
    transform: translateX(100%)
.confirmBox-enter-active
    transition: .5s
.confirmBox-leave-to
    transform: translate(100%)
.confirmBox-leave-active
    transition: .5s 
</style>