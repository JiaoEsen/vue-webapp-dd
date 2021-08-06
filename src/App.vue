<template>
  <div id="app">
    <!-- <div>
      <video controls src="./assets/video/sdahjsdv.mp4"></video>
    </div> -->
    <main id="app-main">
        <router-view/>
    </main>
    <div class="tabTab-box">
      <my-tab-bar />
    </div>
  </div>
</template>

<script>
import MyTabBar from './components/MyTabBar.vue';
export default {
  components: {
    MyTabBar
  }
}
</script>

<style lang="sass" scoped>
#app
  width: 7.5rem
  margin: 0 auto
  #app-main
    overflow: hidden
  .tabTab-box
    width: 100%
    position: fixed
    bottom: 0
  
</style>
