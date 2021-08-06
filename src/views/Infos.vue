<template>
    <div class="infos-container">
        <div class="wrapper" ref="wrapper">
            <ul class="list">
                <li v-for="d,i in 100" :key="i">{{ i }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    mounted() {
        
    },
    created() {
        console.log(1);
        this.$nextTick(()=> {
            new BScroll(this.$refs.wrapper, {});
        });
    }
}
</script>

<style lang="sass" scoped>
.wrapper
    width: 200px
    height: 100px
    overflow: hidden
    .list
        li
            height: 20px   
</style>