<template>
  <div class="row">
    <div class="col-2 InternMain_side ">
        <InternMainSide>
        </InternMainSide>
    </div>
    <div class="col-10 InternMain_main">
        <InternMainMain>
        </InternMainMain>
    </div>

  </div>

</template>

<script>
import InternMainSide from '@/components/InternMain_Side'
import InternMainMain from '@/components/InternMain_Main'

export default {
  name: 'InternMain',
  components: {
    InternMainSide,
    InternMainMain
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.InternMain_side, .InternMain_main{
  height:1500px;
}
.InternMain_side{
  background-color: #ddd;
}
.InternMain_side_menu{
  margin-top: 100px;

}
.InternMain_side_menu_right{
    padding:0;
}
.InternMain_side_menu_right_select{

}
.InternMain_side_menu_right_select_list{
  margin: 50px 0;
  border: 1px solid grey;
  //border-radius: 10px;
  height: 100%;
  text-align: center;
}
.shadow {
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
}

</style>
