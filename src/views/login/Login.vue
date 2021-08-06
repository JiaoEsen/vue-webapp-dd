<template>
    <div class="login-container">
        <div class="avator">意森</div>
        <h1 class="login-name">你好，焦意森</h1>
        <!-- <form> -->
            <label for="">
                <p class="input-title">手机号码</p>
                <div class="form-item">
                    <span>+86</span>
                    <input class="ml60" type="text" v-model="phone" placeholder="请输入手机号" name="" id="">
                </div>
            </label>
            <label for="">
                <p class="input-title">密码</p>
                <div class="form-item">
                    <input type="password" v-model="pwd" placeholder="请输入密码" name="" id="">
                </div>
            </label>
            <button class="to-login" @click="login">登录</button>
        <!-- </form> -->
        <p class="w-pwd">忘记密码</p>
        <div class="yd animate__animated" :class="{'animate__rubberBand': isClass}">
            <van-radio-group v-model="radio">
                <van-radio name="1" icon-size="15px">我已阅读并同意：服务协议,隐私权政策,法律声明</van-radio>
            </van-radio-group>
            <p></p>
        </div>
        <div class="qt">
            <p>支付宝登录</p>
            <ul>
                <li>学生号登录</li>
                <li @click="targetZc">注册账号</li>
                <li @click="showPopup">更多选项</li>
            </ul>
            <div>收到一个入会号？加入会议</div>
        </div>
        <van-popup v-model="show">
            <ul>
                <li>专属账号</li>
                <li>阿里国际站账号登录</li>
                <li>账号挂失</li>
                <li>取消</li>
            </ul>
        </van-popup>
        <my-loading :show="showLoading" :text="text"/>
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import MyLoading from '../../components/MyLoading.vue';
export default {
  components: { MyLoading },
    // comments: {
    //     MyLoading
    // },  
    data() {
        return {
            radio: false,
            show: false,
            pwd: '',
            phone: '',
            text: '跳转中...',
            isClass: false,
            showLoading: false
        }
    },
    methods: {
        showPopup() {
            this.show = true;
        },
        targetZc() {
            this.$router.push('/login/zc');
        },
        login() {
            const access = JSON.parse(localStorage.getItem('info'));
            console.log(access);
            console.log(access);
            if (this.phone === '') {
                this.$notify('请输入账号');
                return;
            } 
            if (!this.isPoneAvailable(this.phone)) {
                this.$notify('输入正确的手机号');
                return;
            }
            if (this.pwd === ''){
                this.$notify('请输入密码');
                return;
            }
            if (!this.radio) {
                console.log('请选择');
                this.isClass = true
                return;
            }
            if(this.phone === access.account && this.pwd === access.password) {
                console.log('success');
                this.showLoading = true
                setTimeout(()=> {
                    this.$router.push('/home');
                    this.showLoading = false
                },2000)
            }else {
                if(!this.isPoneAvailable(this.phone)) {
                    alert('请输入手机号');
                    return;   
                }else {
                    // console.log(1);
                    this.$notify('账号或密码错误');
                }
            }
        },
        isPoneAvailable(val) {
            var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(val)) {
                return false;
            } else {
                return true;
            }
         }
    }
}
</script>

<style lang="sass" scoped>
@import '../../assets/style/login.sass'
</style>