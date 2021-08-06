<template>
    <div class="code-container">
        <van-nav-bar
        left-arrow
        @click-left="$router.back()"
        />
        <div class="code-top">
            <h1>验证码已发送至手机</h1>
            <p>+86 18210614234</p>
        </div>
        <div class="code-content">
            <p>
                <span>请输入验证码</span>
                <span>收不到验证码?</span>
            </p>
            <ul>
                <li><input type="text"></li>
                <li><input type="text"></li>
                <li><input type="text"></li>
                <li><input type="text"></li>
            </ul>
            <p class="b">
                <span>00:30</span>重发验证码 或 通过其他途径验证
            </p>
        </div>
        <button class="confirm" @click="confirm">确认</button>
    </div>
</template>

<script>
export default {
    methods: {
        confirm() {
            this.$router.push('/login/setPwd');
        }
    }
}
</script>

<style lang="sass" scoped>
.code-container
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100vh
    background: #fff
    z-index: 99
    .code-top
        padding: 0.80rem 0.65rem
        font-size: .40rem
        h1
            font-weight: bold
        p
            font-size: .28rem
    .code-content
        padding: 0 0.65rem
        font-size: .22rem
        ul
            display: flex
            justify-content: space-between
            li
                width: calc( 90% / 4 )
            input
                width: 100%
                height: 1.2rem
                border-bottom: 1px solid #e7e7e7
        .b
            margin-top: .28rem
    .confirm
        display: block
        margin-top: 2rem
        width: 6rem
        height: .9rem
        color: #fff
        margin: 2rem auto 0
        border-radius: 10px
        background: #0088fe
</style>