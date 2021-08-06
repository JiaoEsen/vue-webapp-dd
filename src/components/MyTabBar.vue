<template>
    <div class="tabBar-container">
        <ul class="tabBar-wrapper">
            <router-link 
                v-for="d in pathList" 
                :key="d.path"
                tag="li" 
                :to="d.path"
            >
                <span class="iconfont" :class="d.icon"></span>
                <span>{{ d.name }}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pathList: [{
                path: '/infos',
                name: '消息',
                icon: 'icon-xiaoxi'
            }, {
                path: '/ding',
                name: 'DING',
                icon : 'icon-M_dingding2'
            }, {
                path: '/home',
                name: '',
                icon: 'icon-caidan'
            }, {
                path: '/mailList',
                name: '通讯录',
                icon: 'icon-tongxunlu'
            }, {
                path: '/my',
                name: '我的',
                icon: 'icon-wode'
            }]
        }
    }
}
</script>

<style lang="sass" scoped>
.tabBar-container
    height: 1.10rem
    background: #fff
    border-top: 1px solid #e6e6e6
    .tabBar-wrapper
        display: flex
        font-size: .18rem
        li
            position: relative
            flex: 1
            height: 1.10rem
            text-align: center
            display: flex
            flex-direction: column
            justify-content: center
            color: #a4a5a9
            &.router-link-active
                color: #3baef6
            &:nth-child(3).router-link-active 
                color: #fff
                span::before
                    position: relative
                    z-index: 2
                span::after
                    content: ""
                    display: block
                    position: absolute
                    top: 50%
                    left: 50%
                    transform: translate(-50%, -50%)
                    width: 0.60rem
                    height: 0.60rem
                    background: #3baef6
                    border-radius: 50%
                    z-index: 1
</style>