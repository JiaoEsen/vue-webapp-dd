<template>
    <div class="my-loading" v-show="show">
        <van-loading size="30px" color="#0088fe" class="mylo">{{ text }}</van-loading>
        <!-- <span>加载中</span> -->
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: '加载中...'
        },
        show: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="sass" scoped>
.my-loading
    position: fixed
    top: 50%
    left: 50%
    width: 3.5rem
    height: 3rem
    transform: translate(-50%, -50%)
    border-radius: 10px
    background: #fff
    box-shadow: 0px 0px 10px 5px rgba(122, 122, 122, 0.24)
    .mylo
        position: absolute
        top: 50%
        left: 50%   
        text-align: center
        transform: translate(-50%, -50%)
</style>