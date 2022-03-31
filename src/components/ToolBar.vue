<template>
  <div class="toolBar">
    <div id="foreSetTotal" @click="foreSetClick" @mouseover="changeStyle">
    <div :class = "{fontStyle:foreSetColor}" id="foreSet">预设</div>
    <caret-bottom v-bind:class="foreSetColor ? 'svgBottom1_active':'svgBottom1'"/>
    </div>
    <div id="signTotal"  @click="signClick" @mouseover="changeStyle">
    <div  :class = "{fontStyle:signColor}" id="sign">符号</div>
      <caret-bottom v-bind:class="signColor ? 'svgBottom2_active':'svgBottom2'"></caret-bottom>
    </div>
    <div id="equationTotal" @click="equationClick" @mouseover="changeStyle">
    <div  :class = "{fontStyle:equationColor}" id="equation">算式</div>
    <caret-bottom v-bind:class="equationColor ? 'svgBottom3_active':'svgBottom3'" />
    </div>
    <div id="startTotal" @click="startClick" @mouseover="changeStyle">
      <div  :class = "{fontStyle:startColor}" id="start">开始</div>
      <caret-bottom v-bind:class="startColor ? 'svgBottom4_active':'svgBottom4'" />
    </div>
    <div id="equationBar" v-if="signColor">
       <div class="sign" @click="sendPlus"> + </div>
       <div class="sign" @click="sendMinus"> - </div>
       <div class="sign" @click="sendMul"> × </div>
       <div class="sign" @click="sendDiv"> ÷ </div>
       <div class="sign" @click="sendEqual"> = </div>
       <div class="sign" @click="sendMore"> &gt; </div>
       <div class="sign" @click="sendLess"> &lt; </div>
       <button id="signPull" @click="showSignMore"></button>
    </div>
    <div id="signMore" v-show="signMore">
      <ul class="pullList">
        <li @click="sendPlus">+</li>
        <li @click="sendMinus">-</li>
        <li @click="sendMul">×</li>
        <li @click="sendDiv">÷</li>
        <li @click="sendEqual">=</li>
        <li @click="sendMore"> &gt;</li>
        <li @click="sendLess">&lt;</li>
        <li @click="sendDiv">÷</li>
        <li @click="sendEqual">=</li>
        <li @click="sendMore"> &gt;</li>
        <li @click="sendLess">&lt;</li>
        <li @click="sendLess">&lt;</li>
        <li @click="sendDiv">÷</li>
        <li @click="sendEqual">=</li>
        <li @click="sendMore"> &gt;</li>
        <li @click="sendLess">&lt;</li>
        <li @click="sendMore"> &gt;</li>
        <li @click="sendLess">&lt;</li>
        <li @click="sendLess">&lt;</li>
        <li @click="sendDiv">÷</li>
        <li @click="sendEqual">=</li>
        <li @click="sendMore"> &gt;</li>
        <li @click="sendLess">&lt;</li>
        <li @click="sendLess">&lt;</li>
        <li @click="sendLess">&lt;</li>
        <li @click="sendDiv">÷</li>
        <li @click="sendEqual">=</li>
        <li @click="sendMore"> &gt;</li>
        <li @click="sendLess">&lt;</li>
        <li @click="sendMore"> &gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { CaretBottom } from '@element-plus/icons'



export default {
  name: "ToolBar",
  components:{CaretBottom},
  data() {
    return {
      foreSetColor: false,
      signColor: false,
      equationColor: false,
      signMore:false,
      startColor:false,
    }
  },
  methods:{
    signClick() {
        this.signColor = !this.signColor;
        this.foreSetColor = false;
        this.equationColor = false;
    },
    foreSetClick() {
      this.foreSetColor = !this.foreSetColor;
      this.signColor = false;
      this.equationColor = false;
    },
    equationClick() {
      this.equationColor = !this.equationColor;
      this.foreSetColor = false;
      this.signColor = false;
    },
    startClick() {
      this.startColor = !this.startColor;
      this.foreSetColor = false;
      this.signColor = false;
      this.equationColor = false;
    },
    changeStyle() {
      document.getElementById('foreSetTotal').style.cursor = 'pointer';
      document.getElementById('signTotal').style.cursor = 'pointer';
      document.getElementById('equationTotal').style.cursor = 'pointer';
      document.getElementById('startTotal').style.cursor = 'pointer';
    },
    showSignMore(){
      this.signMore = !this.signMore
    },
    sendPlus(){
      this.$emit('receivePlus')
    },
    sendMinus(){
      this.$emit('receiveMinus')
    },
    sendMul(){
      this.$emit('receiveMul')
    },
    sendDiv(){
      this.$emit('receiveDiv')
    },
    sendEqual(){
      this.$emit('receiveEqual')
    },
    sendMore(){
      this.$emit('receiveMore')
    },
    sendLess(){
      this.$emit('receiveLess')
    }
  }
}
</script>
<style scoped>
.toolBar {
  position: relative;
  width: 1020px;
  height: 70px;
  background-color: gainsboro;
  z-index: 0;
}

.fontStyle {
  font-weight: bold;
}
#foreSet {
  position: absolute;
  font-size: 12px;
  top: 8px;
  left: 76px;
}

#sign {
  position: absolute;
  font-size: 12px;
  top: 8px;
  left: 132px;
}

#equation {
  position: absolute;
  font-size: 12px;
  top: 8px;
  left: 188px;
}
#start{
  position: absolute;
  font-size: 12px;
  top: 8px;
  left: 244px;
}
.svgBottom1 {
  position: absolute;
  width: 15px;
  height: 15px;
  top:  23px;
  left: 80px;
}

.svgBottom1_active {
  position: absolute;
  color: blue;
  width: 15px;
  height: 15px;
  top:  23px;
  left: 80px;
}
.svgBottom2 {
  position: absolute;
  width: 15px;
  height: 15px;
  top:  23px;
  left: 135px;
}

.svgBottom2_active {
  position: absolute;
  color: blue;
  width: 15px;
  height: 15px;
  top:  23px;
  left: 135px;
}

.svgBottom3 {
  position: absolute;
  width: 15px;
  height: 15px;
  top:  23px;
  left: 191px;
}
.svgBottom3_active {
  position: absolute;
  color: blue;
  width: 15px;
  height: 15px;
  top:  23px;
  left: 191px;
}
.svgBottom4 {
  position: absolute;
  width: 15px;
  height: 15px;
  top:  23px;
  left: 247px;
}
.svgBottom4_active {
  position: absolute;
  color: blue;
  width: 15px;
  height: 15px;
  top:  23px;
  left: 247px;
}

#equationBar {
  position: absolute;
  display: flex;
  left: 83px;
  top: 42px;
}
.sign {
  font-size:20px;
  margin-right:16px;
  flex:1;
  cursor: pointer
}
#signPull{
  background: url("../assets/images/open.png") no-repeat;
  width: 20px;
  height: 20px;
  background-size: 100%;
  border: none;
  cursor: pointer;
}

#signMore{
}
.pullList{
  list-style-type: none;
  position: absolute;
  top: 55px;
  left: 80px;
  padding: 5px 0 0 5px;
  width:200px;
  border:solid 1px black;
  border-top: none;
  text-align:left;
  vertical-align: middle;
  background-color: white;
  max-height: 60px;
  overflow: auto;
}

.pullList li {
  width:30px;
  height:30px;
  display:inline-block;
  margin-bottom: 10px;
  /*margin-right: 5px;*/
  color: black;
  font-size:20px;
  cursor: pointer;
  z-index: 2;
}
</style>