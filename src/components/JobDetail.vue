<template>
    <transition>
        <div class="job-detail-container" v-show="isShow">

        </div>
    </transition>
</template>

<script>
export default {
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="sass" scoped>
.job-detail-container
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: skyblue
    z-index: 99
.v-enter
    transform: translateX(100%)
.v-enter-active
    transition: 1s
</style>