<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <EditContainer></EditContainer>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'

import EditContainer from "@/components/EditContainer";
export default {
  name: 'App',
  data() {
    return {
      textFather: ''
    }
  },
  components: {
    EditContainer
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*:focus {outline: none;}
</style>
