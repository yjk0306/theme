<template>
  <div class="box">
   <h1>page1111</h1>
   <h2>h2</h2>
   <!-- <img src="../assets/logo.png" alt=""> -->
   <button @click="changeColor('#333444')">红色</button>
   <button @click="changeColor('#efefef')">绿色</button>
   <!-- <button @click="goto">跳转</button> -->
  </div>
</template>

<script>
  import { changeThemeColor, initThemeColor } from '../theme/index'
  export  default  {
     data(){
       return{

       }
     },
    mounted() {
      // initThemeColor()
    },
    methods:{
        changeColor(newColor) {
        
          changeThemeColor(newColor)
        

        },
        goto() {
            this.$router.push({
              path:"/list"
            })
        },
        handle(e) {
          console.log(e)

        }
    }
  }

</script>
<style scoped lang="scss">
  @import "../css/index.scss";

  button {
    margin:  10px;
  }
  h1{
    color: $--color-primary;
  }
  h2{
    color: $--color-default;
  }
</style>