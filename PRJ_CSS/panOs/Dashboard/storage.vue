<template>
  <div class="line col-md-4 component3">
    <div class="panel panel-info storage">
     <div class="panel-heading">Storage</div>
     <div class="panel-body">
       <table align="center">
         <tr style="border-bottom: 2px solid #ddd">
           <th>Disk</th>
           <th>Capacity</th>
           <th>Status</th>
         </tr>
         <tr>
           <th>Disk1</th>
           <th>1Tb</th>
           <th>Ok</th>
         </tr>
         <tr>
           <th>Disk2</th>
           <th>1Tb</th>
           <th>Ok</th>
         </tr>
         <tr>
           <th>Disk3</th>
           <th>1Tb</th>
           <th>Ok</th>
         </tr>
         <tr>
           <th>Disk4</th>
           <th>1Tb</th>
           <th>Ok</th>
         </tr>
         <tr>
           <th>Disk5</th>
           <th>1Tb</th>
           <th>Ok</th>
         </tr>
       </table>
     </div>
   </div>
  </div>
</template>

<script>

</script>

<style scoped>
p{
  font-size:12px;
}
th{
  padding-left:10px;
  padding-right:20px;
}
.row{

}
.line{
  border:1px solid white;
}
.component1, .component2, .component3{
  height:350px;
}
.component4{
  height:260px;
}
.component5{
  height:200px;
}
.system{
  width:90%;
  height:100%;
}
.panel-info{
  margin-left:20px;
  margin-right:5%;

}
.title{
  backgroud-color:#d1dcfc;
}
.resources{
  width:80%;
  height:100%;
}
.storage{
  width:70%;
  height:100%;
}
.performance{
  margin-top:30px;
  width:91%;
  height:90%;
}
.events{
  margin-top:30px;
  width:91%;
  height:80%;
}
.table{
  margin-top:20%;
  margin-bottom:10%;
}
</style>
