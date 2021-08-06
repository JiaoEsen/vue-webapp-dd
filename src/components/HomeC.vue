<template>
    <div class="home-top-container">
        <my-dropdown-menu ref="menu" />
        <d-search-input ref="search" />
        <header-nav ref="nav" />
        <router-view />
        <!-- <div id="main" ref="wrapper">
            <div class="container">
                <router-view />
            </div>
        </div> -->
    </div>
</template>

<script>
import MyDropdownMenu from './MyDropdownMenu.vue';
import DSearchInput from './DSearchInput.vue';
import HeaderNav from './HeaderNav.vue';
export default {
    components: {
        MyDropdownMenu,
        DSearchInput,
        HeaderNav
    }
}
</script>

<style lang="sass" scoped>
.home-top-container
    // #main
    //     height: calc( 100vh - 178px )
    //     overflow: hidden
</style>