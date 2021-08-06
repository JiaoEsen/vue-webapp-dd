<template>
    <div class="zc-container">
        <van-nav-bar
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="phone">
            <h1>{{ phonepwd }}</h1>
            <p>认证服务由中国移动提供</p>
        </div>
        <button class="yjzc" @click="yjzc">一键注册</button>
        <button class="qtzc" @click="qizc">其他手机号注册</button>
        <div class="yd">
            <div>
                <van-radio-group v-model="radio">
                    <van-radio name="1" icon-size="15px">我已阅读并同意：服务协议,隐私权政策,法律声明</van-radio>
                </van-radio-group>
            </div>
            <p></p>
        </div>
        <my-loading :show="showLoading" />
        <!-- <van-loading type="spinner" /> -->
        <!-- <van-dialog v-model="show" confirmButtonText="此手机号已注册，前往登录"  show-confirm-button>
        </van-dialog> -->
    </div>
</template>

<script>
import MyLoading from '../../components/MyLoading.vue';
import { Dialog } from 'vant';
export default {
     components: {
        [Dialog.Component.name]: Dialog.Component,
        MyLoading
    },
    data() {
        return {
            radio: '1',
            phone: '18210614234',
            phonepwd: '',
            show: false,
            showLoading: false
        }
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        },
        // 一键注册
        yjzc() {
            const access = localStorage.getItem('access') || '';
            if (access === this.phone) {
                this.show = true

                Dialog.confirm({
                    message: '此手机号已注册，前往登录',
                    showCancelButton: false,
                    confirmButtonText: '立即登录'
                })
                .then(() => {
                    // on confirm
                    this.showLoading = true;
                    setTimeout(() => {
                        this.$router.push('/home');
                        this.showLoading = false;
                    },2000)
                })
                .catch(() => {
                    // on cancel
                });
                return;
            }
            localStorage.setItem('access', this.phone);

        },
        qizc() {
            this.$router.push('/login/zcdd');
        }
    },
    created() {

        var reg=/(\d{3})\d{4}(\d{4})/;
        var tel1 = this.phone.replace(reg, "$1****$2")
        console.log(tel1)
        this.phonepwd = tel1
    }
}
</script>

<style lang="sass" scoped>
@import '../../assets/style/zc.sass'
</style>