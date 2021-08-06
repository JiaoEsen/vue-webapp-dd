<template>
    <div class="code-container">
        <van-nav-bar
        left-arrow
         @click-left="$router.back()"
        />
        <div class="code-top">
            <h1>请设置密码</h1>
            <p>登录密码用于手机钉钉与电脑钉钉登录</p>
        </div>
        <div class="code-content">
            <p>密码</p>
            <div> 
                <input type="password" v-model="pwd" placeholder="请输入密码" name="" id="">
            </div>
            <p class="info">至少8个字符，不能全是字母或数字</p>
        </div>
        <button class="confirm" @click="confirm">下一步</button>
        <my-loading :show="showLoading" />
    </div>
</template>

<script>
// import { set } from 'vue/types/umd';
// import MyLoading from '../components/MyLoading.vue';
import MyLoading from '../components/MyLoading.vue';
export default {
//   components: { MyLoading },
  components: { MyLoading },
    
    data() {
        return {
            pwd: '',
            showLoading: false
        }
    },
    methods: {
        confirm() {
            var reg= /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
            if(reg.test(reg)) {
                alert(111);
            }else {
                const obj = {
                    password: this.pwd
                }
                this.$store.commit('setPassword', obj.password);
                console.log(this.$store);
                
                console.log(this.$store.state);
                localStorage.setItem('info', JSON.stringify(this.$store.state.info));
                this.showLoading = true;
                setTimeout(() => {
                    this.$router.push('/home');
                    this.showLoading = false;
                }, 2000);
            }
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
        input
            padding: 0.2rem 0
        div
            border-bottom: 1px solid #e6e6e6
        .info 
            padding: .3rem 0
    .confirm
        display: block
        margin-top: .2rem
        width: 6rem
        height: .9rem
        color: #fff
        margin: .2rem auto 0
        border-radius: 10px
        background: #0088fe
</style>