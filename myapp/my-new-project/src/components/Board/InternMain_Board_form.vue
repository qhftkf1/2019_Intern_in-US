<template>
  <transition name="slide-fade">
  <div v-if="!propsdata" class= "formBox">
    <div class="formTitle">
      <h2>Title</h2>
    </div>
    <div class="formInputTitle shadow">
      <input class="formInput " v-model = "title" type="text" name="" value="">
    </div>
    <div class="">
      <h2>Content</h2>
    </div>
    <div class="formTextContent shadow">
      <textarea class="formTextArea "  v-model = "content" rows="8" cols="80"></textarea>
    </div>
    <div class="formAddBtn">
      <span class="addContainer" v-on:click="addBoardItem">
          <i class="fas fa-plus addBtn "></i>
      </span>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  props: ['propsdata'],
  data: function () {
    return {
      title: '',
      content: '',
      i: 1
    }
  },
  created: function () {
  },
  methods: {
    addBoardItem () {
      const obj = {title: this.title, content: this.content}
      localStorage.setItem(this.i++, JSON.stringify(obj))
      this.title = ''
      this.content = ''
    }
  }
}
</script>

<style scoped>
h2{
  color: #2F3853;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}

.formBox {
  margin: 20px;
}
.formInputTitle{
  background: white;
  height:50px;
  font-size: 20px;
  font-weight: bolder;
  line-height: 50px;
  border-radius: 5px;
  text-align: left;
  width:20%;
}
.formInput{
  width:100%;
  height: 100%;
  border-style: none;
  border-radius: 5px;
}

.formTextContent{
  background: white;
  height:300px;
  line-height: 20px;
  border-radius: 10px;
  text-align: left;
  margin: 20px 0;
  width: 60%;

}
.formTextArea{
height:300px;
width: 100%;
border-radius: 10px;
border-style: none;
}
.addContainer {
  float:left;
  text-align: center;
  display: block;
  width: 2rem;
  border-radius: 5px;
  height: 2rem;
  border-style:none;
  background: black;

}
.addBtn {
  margin-top: 20%;
  color:white;
  vertical-align: middle;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
}
.slide-fade-enter-active {
  transition: all .9s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
