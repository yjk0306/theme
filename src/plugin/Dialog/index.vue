<template>
    <transition name="fade">
        <div class="overs" v-if="show">
            <transition name="scale">
                <div class="dialog" v-show="flag">
                    <div class="main">
                        <div> {{title}}</div>
                        <div> {{message}}</div>
                       </div>
                    <div class="action">
                        <div @click="cancel">{{leftbtn}}</div>
                        <div></div>
                        <div @click="confirm">{{rightbtn}}</div>
                    </div>
                </div>
            </transition>

        </div>
    </transition>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                show:false,
                flag:false,

            }
        },
        created() {
        },
        mounted() {

        },
        methods: {
            cancel(){
                this.flag = false;

                this.cancelcb(222222)

            },
            confirm(){
                if (this.async) {
                   this.ok(`111`);
                }else{
                    this.flag = false;
                    this.ok("成功111");
                }



            }
        },
        components: {},
        watch:{
            show:function (val) {
                if(val){
                    this.$nextTick(() => {
                        this.flag = true;
                    })
                }
            },
            flag:function (val) {
                if (!val) {
                    this.$nextTick(() => {
                        this.show = false;
                    })
                }
            }
        }
    }
</script>

<style scoped >
    .overs{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    }
    .dialog{
        position: fixed;
        top: 45%;
        left: 0;
        right: 0;
        margin: auto;

        transform-origin: center center;

        width: 320px;
        overflow: hidden;
        font-size: 16px;
        background-color: #fff;
        border-radius: 16px;

    }
    .main{
        padding:0  24px 24px;
        text-align: center;
    }
    .main>div:first-child{
        height: 50px;
        line-height: 50px;
    }
    .action{
        height: 50px;
        border-top: 1px solid #e5e5e5;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .action>div{
        height: 100%;
        text-align: center;
        line-height: 48px;
    }
    .action>div:nth-child(1){
        flex: 1;
        color: #323233;
    }
    .action>div:nth-child(2){
        width: 1px;
        background: #e5e5e5;
    }
    .action>div:nth-child(3){
        flex: 1;
        color: #1989fa;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }

    .scale-enter-active, .scale-leave-active {
        transform: scale(1);
        transition: 0.4s;
    }
    .scale-enter, .scale-leave-to  {
        transform-origin: center;
        transform: scale(0.5);

    }
    span{

    }

</style>
