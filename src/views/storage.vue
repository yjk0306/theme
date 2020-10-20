<template>
    <div>
        <button @click="click">点击</button>
    </div>
</template>

<script>
    export default {
        name: "storage",
        methods:{
            click(){
                this.$storage.emit("get",111111111111)
            }
        },
        mounted() {
            this.$storage.on("get",function () {
                    console.log("okkkkkkkkkkk")
            })
        },


    }
</script>

<style scoped>

</style>
