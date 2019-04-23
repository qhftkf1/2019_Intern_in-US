<template>
  <div class="line col-md-3 component2">
    <div class="panel panel-info resources">
     <div class="panel-heading">Resources</div>
     <div class="panel-body">
        <table align="center">
          <tr>
            <th>Nodes</th>
            <th>1</th>
          </tr>
          <tr>
            <th>CPU</th>
            <th>1</th>
          </tr>
          <tr>
            <th>RAM</th>
            <th>16GB</th>
          </tr>
          <tr>
            <th>Storage</th>
            <th>5 TB</th>
          </tr>
          <tr>
            <th>Disks</th>
            <th>5</th>
          </tr>
          <tr>
            <th>Alarms</th>
            <th>None</th>
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
