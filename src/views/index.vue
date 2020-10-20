<template>
  <div class="box">
   <h1>page1111</h1>
   <h2>h2</h2>
   <p>该我的颜色</p>
   <!-- <img src="../assets/logo.png" alt=""> -->
   <button @click="changeColor('#333444', 'light')">红色</button>
   <button @click="changeColor('#efefef', 'default')">绿色</button>
   <!-- <button @click="goto">跳转</button> -->
  </div>
</template>

<script>
  // import { changeThemeColor, initThemeColor } from '../theme/index'
  export  default  {
     data(){
       return{

       }
     },
    mounted() {
      // initThemeColor()
    },
    methods:{
        changeColor(newColor, name) {
          document.body.className = `theme-${name}`
          // changeThemeColor(newColor)
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
  @import "../scss/index.scss";

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