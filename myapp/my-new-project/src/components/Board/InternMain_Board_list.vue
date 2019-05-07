<template>
<transition name="slide-fade">
  <div v-if="propsdata">
    <ul>
      <li v-for="(boardItem, index) in this.boardItems" v-bind:key= "boardItem" class="shadow">
        <!-- {{boardItem.content}}
          <span class= "addContainer" v-on:click="removeBoard(boardItem, index)">
            <i class="fas fa-trash"></i>
          </span> -->
          <span class ="contentText">{{ boardItem }} : {{ boardItem.content }}</span>
          <span class="removeBtn" v-on:click="removeBoard(boardItem, index)">
              <i class="fas fa-trash"></i>
          </span>
      </li>
    </ul>
  </div>
</transition>
</template>

<script>
export default {
  props: ['propsdata'],
  data: function () {
    return {
      boardItems: []
    }
  },
  methods: {
    removeBoard: function (boardItem, index) {
      console.log(boardItem, index)
      localStorage.removeItem(boardItem)
      this.boardItems.splice(index, 1)
    }
  },
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.boardItems.push(localStorage.key(i))
        }
      }
    }
  }
}
</script>

<style scoped>
ul{
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: center;
}
li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rm;
  background: white;
  border-radius: 5px;

}
.addContainer{
  float:right;
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  /* height:100%; */

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
.removeBtn {
    margin-left: auto;
    color: #de4343;
    padding-right: 20px;
}
.contentText{
  padding-left: 20px;
}
</style>
