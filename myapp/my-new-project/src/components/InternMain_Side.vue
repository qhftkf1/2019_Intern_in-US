<template>
  <div class="row InternMain_side_menu">

    <div class="col-12 InternMain_side_menu_right">
      <div v-for="tab in this.$store.state.tabs" class="InternMain_side_menu_right_select shadow" v-bind:key="tab" @click="selectTab(tab)" :style="(tab === selectedTab) ? 'background-color: white; ' :''">
        <div class="InternMain_side_menu_right_select_list ">
            {{ tab }}
          </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'InternMain_side_menu',
  data () {
    return {
      selectedTab: '',
      tabs: ['Home', 'Content', 'Board']
    }
  },
  methods: {
    selectTab (tab) {
      this.$store.commit('selectTab', tab)
      this.selectedTab = this.$store.state.selectedTab
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.InternMain_side, .InternMain_main{
  height:auto;
}
.InternMain_side{
  background-color: #ddd;
}

.InternMain_side_menu{
  margin-top: 100px;

}
.InternMain_side_menu_right{
    padding:0;
    font-size: 20px;
    font-weight: 900;
    font-family: "Comic Sans MS", cursive, sans-serif;
}
.InternMain_side_menu_right_select{

}
.InternMain_side_menu_right_select_list{
  margin: 50px 0;
  /* border: 1px solid grey; */
  border-style: none;
  /* border-radius: 10px; */
  height: 100%;
  text-align: center;

}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
}

</style>
