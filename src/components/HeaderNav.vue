<template>
    <div class="header-nav-container">
        <div class="wrapper" ref="wrapper">
            <ul class="content" ref="content">
                <router-link tag="li" to="/home/collection">附近</router-link>
                <router-link tag="li" to="/home/nearby">收藏</router-link>
                <router-link tag="li" to="/home/productDevelopment">精选实习</router-link>
                <router-link tag="li" to="/home/productOperation">产品运营</router-link>
                <router-link tag="li" to="/home/selectedPractice">产品开发</router-link>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
   
}
</script>

<style lang="sass" scoped>
.header-nav-container
    .wrapper
        width: 100%
        overflow-x: scroll
        white-space: nowrap
        border-bottom: 1px solid #ececec 
        .content
            font-size: 0
            li
                position: relative
                display: inline-block
                padding: 0 0.45rem
                font-size: 0.28rem  
                line-height: 0.80rem
            li::after
                content: ""
                display: block
                position: absolute
                bottom: 0
                left: 0
                width: 100%
                height: 3px
                background: #3292f0
                display: none
            li.router-link-active
                color: #3292f0
                &::after
                    display: block

    .wrapper::-webkit-scrollbar
        display: none
</style>