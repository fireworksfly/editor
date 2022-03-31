<template>
  <div id="container">
    <TitleBar></TitleBar>
    <tool-bar @receivePlus="receivePlus" @receiveMinus="receiveMinus" @receiveMul="receiveMul" @receiveDiv="receiveDiv"
    @receiveEqual="receiveEqual"  @receiveMore="receiveMore" @receiveLess="receiveLess">
    </tool-bar>
    <textarea class="text" id="myTextarea"  v-model="textSon" ></textarea>
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar";
import ToolBar from "@/components/ToolBar";
export default {
  name: "EditContainer",
  components: {ToolBar, TitleBar},
  data() {
    return{
      textSon: '',
      modal_loading: false,
      questionImageIsShow: false,
      formItem: {
        d_title: "",
        u_phone: "",

        stateList: [
          {
            value: '0',
            label: '待分配'
          },
          {
            value: '1',
            label: '开发中'
          },
          {
            value: '2',
            label: '已完成'
          },
          {
            value: '3',
            label: '停用'
          },
          {
            value: '4',
            label: '已变更'
          }
        ]
      }

    }
  },
 watch:{
 },
 methods:{
    receivePlus(){
      this.textSon = this.textSon + '+';
    },
   receiveMinus(){
     this.textSon = this.textSon + '-';
   },
   receiveMul(){
     this.textSon = this.textSon + '×';
   },
   receiveDiv(){
     this.textSon = this.textSon + '÷';
   },
   receiveEqual(){
     this.textSon = this.textSon + '=';
   },
   receiveMore(){
     this.textSon = this.textSon + '>';
   },
   receiveLess(){
     this.textSon = this.textSon + '<';
   }
 }
}
</script>

<style scoped>
#container {
  position: relative;
}
.text {
  position: absolute;
  top: 110px;
  left: 0;
  width: 978px;
  height: 400px;
  /*text-align: center;*/
  /*vertical-align: middle;*/
  padding: 20px;
  font-size: 50px;
  z-index: -1;
  /*border-left: black 2px solid;*/
  /*border-right: black 2px solid;*/
  /*border-bottom: black 2px solid;*/
}

.option{
  float:left
}
</style>