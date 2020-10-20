<template>
  <div id="app">
     <!-- shell -->
    <transition :name="transitionName">
      <router-view/>
    </transition>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    methods: {

    },
    watch: {
        $route() {
          // this.transitionName = 'slide-left';
        }
    }
  }
</script>
<style>
*{
  padding: 0;
  margin: 0;
  position: relative;
  box-sizing: border-box;
}

</style>
