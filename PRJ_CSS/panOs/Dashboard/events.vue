<template>
<div class="line col-md-12 component5">
  <div class="panel panel-info events ">
   <div class="panel-heading">System events</div>
   <div class="panel-body">
     <table>
         <tr style="border-bottom: 2px solid #ddd">
           <th>Time:</th>
           <th>Event:</th>
           <th>Severity</th>
         </tr>
         <tr>
           <th>2019/21/04:14:55:12</th>
           <th>Lost connection with Splunk source</th>
           <th>High</th>
         </tr>
         <tr>
           <th>2019/19/18:22:01:54</th>
           <th>Transform failed</th>
           <th>Medium</th>
         </tr>
       </table>
   </div>
 </div>
</div>
</template>

<script>

</script>

<style scoped>
  th{
    padding-left:10px;
    padding-right:20px;
  }
  .row{

  }
  .line{
    border:1px solid grey;
  }
  .component1, .component2, .component3{
    height:350px;
  }
  .system{
    width:90%;
    height:100%;
  }
  .panel-default{
    margin-left:5%;
    margin-right:5%;
  }
  .resources{
    width:80%;
    height:100%;
  }
  .storage{
    width:70%;
    height:100%;
  }
  .table{
    margin-top:20%;
    margin-bottom:10%;
  }
</style>
