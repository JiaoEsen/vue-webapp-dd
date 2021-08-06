<template>
    <transition>
        <div class="job-detail-container" v-show="isShow"></div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            isShow: false
        }
    }
}
</script>

<style lang="sass" scoped>
.job-detail-container
    position: fixed
    top: 0
    left: 0
.v-enter
    transform: 100%
.v-enter-active
    transition: 1s
</style>