<template>
    <div class="leave-item">
        <div>
            <i :style="`background: ${navColor}`"></i>
            <span>{{ name }}</span>
        </div>
        <div>
            <span>{{ types }}</span>
            <van-icon name="arrow" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '事件'
        },
        types: {
            type: String,
            default: '按小时请假'
        },
        navColor: {
            type: String,
            default: '#000'
        }
    }
}
</script>

<style lang="sass" scoped>

</style>