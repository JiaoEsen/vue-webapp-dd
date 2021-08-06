<template>
  <div class="home-container">
    <home-c/>
    <router-view></router-view>
  </div>
</template>

<script>
// import './1.js';
import HomeC from '../components/HomeC.vue';

export default {
    components: {
      HomeC
    },
}
</script>


