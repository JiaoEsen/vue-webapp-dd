<template>
        <div class="leave-detail">
            <van-nav-bar
            title="请假"
            left-text="返回"
            right-text="按钮"
            >
                <template #left>
                    <van-icon @click.self="onClickLeft" name="arrow-left" />
                    <van-icon name="cross" />
                </template>
                <template #right>
                    <span style="margin-right: 0.20rem">编辑</span>
                    <van-icon name="ellipsis" />
                </template>
            </van-nav-bar>
            <div class="leave-detail-container">
                <div class="aa">
                    <van-tabs v-model="activeName">
                    <van-tab title="发起提交" name="a">
                        <div class="qj-item">
                            <h2>请假类型</h2>
                            <van-field
                            readonly
                            clickable
                            :value="value"
                            placeholder="请选择"
                            @click="showPicker = true"
                            />
                            <van-popup v-model="showPicker" round position="bottom">
                            <van-picker
                                show-toolbar
                                :columns="columns"
                                @cancel="showPicker = false"
                                @confirm="onConfirm"
                            />
                            </van-popup>
                        </div>
                        <div class="qj-time">
                            <span>事假余额</span>
                        </div>
                        <div class="qj-item qj-none">
                            <h2>开始时间</h2>
                            <van-cell :title="date1" :value="date1" @click="show1 = true" />
                            <van-calendar v-model="show1" @confirm="onConfirm1" />
                        </div>
                        <div class="qj-item qj-none">
                            <h2>结束时间</h2>
                            <van-cell :title="date2" :value="date2" @click="show2 = true" />
                            <van-calendar v-model="show2" @confirm="onConfirm2" />
                        </div>
                        <div class="qj-item qj-none">
                            <h2>时长（小时）</h2>
                            <input type="text" placeholder="请输入时长" style="font-size: 14px;margin-top: 0.2rem" :value="timer" name="" id="">
                        </div>
                        <div class="qj-time"></div>
                        <div class="qj-item">
                            <h2>请假事由</h2>
                            <textarea   placeholder="请输入理由" name="" id="" cols="30" rows="10" v-model="teatareaa"></textarea>
                        </div>
                        <div class="submit-item">
                            <div>{{ obj[0].name }}</div>
                            <h3>{{ obj[0].name }}</h3>
                            <van-icon name="add-o" size="30" @click="show=true" color="#0088fe" />
                        </div>
                        <div class="submit">
                            <button @click="onSubmit">提交</button>
                        </div>
                    </van-tab>
                    <van-tab title="查看报表" name="b">内容 2</van-tab>
                    <van-tab title="查看数据" name="c">内容 3</van-tab>
                </van-tabs>
                </div>
                
            </div>
            <confirm-box :show="show" @gb="show = false" @data="obj = $event"/>
            <sp :showsp="spShow" @gb="spShow= false" :obj="obj1"></sp>
        </div>
</template>

<script>
import ConfirmBox from '../components/ConfirmBox.vue';
import Sp from '../components/Sp.vue';
export default {
    components: {
        ConfirmBox,
        Sp
    },
    data() {
        return {
            activeName: 'a',
            date1: '请选择',
            date2: '请选择',
            show1: false,
            show2: false,
            show: false,
            value: '',
            showPicker: false,
            columns: ['病假', '事假', '休假', '年假', '产假', '陪产假'],
            obj: [{
                id: '',
                name: ''
            }],
            timer: '',
            obj1: {},
            that: this,
            teatareaa: '',
            spShow: false,
            e: '',
            s: ''
        }
    },
    methods: {
        onClickLeft() {
            console.log(1);
            this.$router.back();
        },
        onClickRight() {

        },
        formatDate(date) {
            console.log(date.getMonth()+1);
            console.log(date.getHours());
            console.log(date.getMinutes());
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getHours()}/${date.getMinutes()}`;
        },
        onConfirm1(date) {
            this.show1 = false;
            this.date1 = this.formatDate(date);
            this.s = date;
        }, 
        onConfirm2(date) {
            this.show2 = false;
            this.date2 = this.formatDate(date);
            this.e = date
            const a = this.getInervalHour(this.s, this.e);
            console.log(a);
            this.timer = a; 
        }, 
        onSubmit() {
            console.log();
            this.spShow = true
            const obj = {
                name: this.$route.query.name,
                qdate: this.date1,
                jdate: this.date2,
                textarea: this.textarea,
                sName: this.obj[0].name
            }

            console.log(obj);
            this.obj1 = obj;
            console.log();
        },
        onConfirm(value) {
            this.value = value;
            this.showPicker = false;
        },
        getInervalHour(startDate, endDate) {
            var ms = endDate.getTime() - startDate.getTime();
            if (ms < 0) return 0;
            return Math.floor(ms/1000/60/60);
        }
    },
    mounted() {
        this.value = this.$route.query.name
    },
    watch: {
        obj: {
            deep: true,
            handler:(newV)=> {
                console.log(newV);
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.leave-detail
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #fff
    z-index: 99
    .aa
        padding-bottom: 2rem
    .leave-detail-container
        height: 100vh
        overflow-y: scroll
    ::v-deep .van-tabs__line
        background-color: #0881ea
    .submit-item
        padding: 0.25rem 0.45rem
        display: flex
        align-items: center
        justify-content: space-between
        div
            width: 1rem
            height: 0.95rem
            text-align: center
            line-height: 0.95rem
            color: #fff
            background: #0088fe
    .qj-item
        width: 100%
        padding: 0.25rem 0.45rem
        h2
            font-size: 0.30rem
        p
            font-size: 0.28rem
    .qj-time
        background: #eee
        padding: 0.25rem 0
        padding-left: 0.45rem
        font-size: 0.12rem
    .submit
        padding: 0 0.30rem
        
        button
            display: block
            width: 100%
            padding: 0.30rem
            background: #0088fe
            color: #fff
            border-radius: 0.50rem
    ::v-deep .van-cell
        padding-left: 0
    ::v-deep .qj-none .van-cell__value
        display: none
    textarea
        width: 100%
        height: 1rem
</style>