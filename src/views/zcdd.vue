<template>
  <div class="zcdd-container">
    <van-nav-bar left-arrow @click-left="$router.back()" />
    <h1>欢迎注册钉钉</h1>
    <div class="phone">
      <label for="">
        <div class="form-item">
          <span>+86</span>
          <input
            class="ml60"
            type="text"
            v-model="phone"
            placeholder="请输入手机号"
            name=""
            id=""
          />
        </div>
      </label>
    </div>
    <button class="yjzc" @click="ljzc">立即注册</button>
    <div class="yd">
      <div>
        <van-radio-group v-model="radio">
          <van-radio name="1" icon-size="15px"
            >我已阅读并同意：服务协议,隐私权政策,法律声明</van-radio
          >
        </van-radio-group>
      </div>
      <p></p>
    </div>
    <my-loading :show="showLoaing"/>
  </div>
</template>

<script>
import { Dialog } from "vant";
import MyLoading from '../components/MyLoading.vue';
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
    MyLoading
  },
  data() {
    return {
      phone: "",
      radio: "1",
      showLoaing: false
    };
  },
  methods: {
    ljzc() {
      const obj =  {
      account: '',
      name: '',
      password: '',
      phone: ''
    }
      localStorage.setItem('info',JSON.stringify(obj));
      const a = JSON.parse(localStorage.getItem('info'));
      if (!this.isPoneAvailable(this.phone)) {
        this.$notify("请输入正确的手机号");
        return false;
      } else if(this.phone === a.account) {
        Dialog.confirm({
                    message: '此手机号已注册，前往登录',
                    showCancelButton: false,
                    confirmButtonText: '立即登录'
                })
                .then(() => {
                    // on confirm
                    this.showLoaing = true
                    setTimeout(() => {
                        this.$router.push('/login');
                        this.showLoaing = false;
                    },2000)
                })
                .catch(() => {
                    // on cancel
                });
      } else {
        Dialog.confirm({
          title: "确认手机号",
          message: "请确认手机号是否正确 \n+86-18210614234",
          confirmButtonText: "确认",
          cancelButtonText: "重新输入手机号",
        })
          .then(() => {
            // on confirm
            this.$store.commit('setPhone', this.phone);
            this.$store.commit('setAccount', this.phone);
            this.$router.push('/login/verificationCode');
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    isPoneAvailable(val) {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(val)) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.zcdd-container
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100vh
    background: #fff
    z-index: 99
    h1
        font-size: .44rem
        font-weight: bold
        padding: 1.5rem 0.65rem
    .phone
        padding: 0 0.65rem
    .input-title
        font-size: .22rem
        margin-top: .28rem
    .form-item
        padding: 0.30rem 0
        font-size: 0.28rem
        border-bottom: 1px solid #e2e4e4
        span
            margin-right: .3rem
    .yjzc
        display: block
        width: 6rem
        // width: 100%
        height: .90rem
        margin: 0 auto
        color: #fff
        border-radius: 10px
        margin-top: .3rem
        background: #0088fe
    .yd
        width: 6rem
        margin: 0.30rem auto 0
        text-align: center
        font-size: .18rem
        display: flex
        align-items: center
</style>