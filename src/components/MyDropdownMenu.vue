<template>
  <div class="dropDownMenu-container">
    <van-dropdown-menu class="my-dropdown-menu">
        <van-dropdown-item v-model="value1" :options="homeOption" />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 0,
            homeOption: [
                {
                    text: '新校招',
                    value: 0
                },
                {
                    text: '新校招',
                    value: 1
                },
                {
                    text: '新校招',
                    value: 2
                },
            ]
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../assets/style/myDropdownMenu.sass'
</style>