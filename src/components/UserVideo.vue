<template>
  <div class="video-wrapper">
    <div class="user-video">
      <div class="user-video-top">
        <div class="portrait">
          <img src="../assets/img/dd22.jpeg" alt="" />
        </div>
        <div class="user-infos">
          <div class="user-infos-top">
            <span class="user-name">木林森</span>
            <div class="authentication">
              <span class="iconfont icon-renzheng1"></span>
              <span>已认证</span>
            </div>
          </div>
          <div class="user-info-bottom">
            <p>智能办公指数815 规模201-500人</p>
          </div>
        </div>
      </div>
      <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="user-video-wrapper">
              <video controls src="../assets/video/sdahjsdv.mp4"></video>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="user-video-wrapper">
              <video controls src="../assets/video/1049_A0102928000BvtJD01Jccw1000308912.f30.mp4"></video>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="user-video-wrapper">
              <video controls src="../assets/video/1049_M21184000033Witq1G9a3e1001541636.f30.mp4"></video>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
Swiper.use([Autoplay, Pagination]);
export default {
  methods: {
    initSwiper() {
      new Swiper(this.$refs.swiper, {
        loop: false,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    },
  },
  created() {
    setTimeout(() => {
      this.initSwiper();
    }, 500);
  },
};
</script>

<style lang="sass" scoped>
.user-video
    width: 100%
    padding: 0.32rem
    .portrait
        width: 0.80rem
        height: 0.80rem
        border-radius: 5px
        overflow: hidden
        img
            width: 100%
            height: 100%
    .user-video-top
        width: 100%
        height: 0.8rem
        display: flex
        align-items: center
        .user-name
            font-size: 0.24rem
        .authentication
            display: flex
            align-items: center
            margin-left: 0.15rem
            font-size: 0.18rem
            color: #ff9337

        .user-infos
            display: flex
            flex-direction: column
            justify-content: center
            margin-left: 0.2rem
            height: 0.8rem
            .user-infos-top
                display: flex
                align-items: center
            .user-info-bottom
                font-size: 0.18rem
                color: #bdbec0
    .user-video-wrapper
        margin-top: 0.30rem
        video
            width: 100%
            border-radius: 5px
</style>