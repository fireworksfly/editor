<template>
  <div class="titleBar">
    <div class="titleMessage">LUNA输入助手</div>
  </div>
</template>

<script>
export default {
  name: "TitleBar"
}
</script>

<style scoped>
.titleBar  {
  position: relative;
  width: 1020px;
  height: 40px;
  border-radius: 10px 10px 0 0;
  background: #3E89E0;
}

.titleMessage {
  font-size: 20px;
  position: absolute;
  left: 510px;
  top: 8px;
  color: aliceblue;
}
</style>