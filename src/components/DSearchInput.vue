<template>
    <div class="d-search-input-container">
        <div class="search-input-wrapper">
            <div class="search-input-item">
                <van-icon class="search-icon" name="search" size="0.32rem" color="#98999d" />
                <input type="text" placeholder="酷公司暑期实习">
            </div>
            <div class="picture">意森</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.d-search-input-container
    position: relative
    height: 0.7rem
    .search-input-wrapper
        position: relative
        display: flex
        justify-content: space-between
        padding: 0 0.32rem
        .search-input-item
            position: relative
            .search-icon
                position: absolute
                top: 50%
                left: 0.20rem
                transform: translateY(-50%)
            input
                box-sizing: border-box 
                display: block
                width: 5.7rem
                height: 0.7rem
                padding-left: 0.55rem
                font-size: 0.25rem
                border: none
                border-radius: 4px
                background: #ededed
        .picture
            width: .7rem
            height: .7rem
            font-size: 0.16rem
            text-align: center
            line-height: .7rem
            border-radius: 50%
            color: #fff
            background: #3396fb
</style>