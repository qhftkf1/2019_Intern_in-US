<template>
    <div class = "inputBox shadow">
      <span class = "addContainer">
        <i class="fas fa-plus addBtn" v-on:click="change"></i>
      </span>
    </div>
</template>

<script>
export default {
  props: ['propsdata'],
  data () {
    return {
      newBoardItem: ''
    }
  },
  methods: {
    addBoardItem () {
      if (this.newBoardItem !== '') {
        const obj = {completed: false, item: this.newBoardItem}
        localStorage.setItem(this.newBoardItem, JSON.stringify(obj))
        this.newBoardItem = ''
      }
    },
    change () {
      this.propsdata = !this.propsdata
      this.$emit('changed', this.propsdata)
    }
  }
}
</script>

<style lang="css" scoped>
input:focus{
  outline: none;
}
.inputBox {
  background: linear-gradient(to right, black, white);
  height:50px;
  line-height: 50px;
  border-radius: 5px;
  text-align: center;
}
.inputBox input {
  border-style: none;
  font-size:0.9rem;
  width:80%;
  height: 100%;
}

.addContainer {
  float:right;

  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  /* height:100%; */

}

.addBtn {
  color:black;
  vertical-align: middle;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
}

</style>
