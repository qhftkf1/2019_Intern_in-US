<template>
<div class=" row">
  <div class=" col-md-8 title">
    <h1>Select Data Type</h1>
  </div>
  <div class=" col-md-4 select">
    <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Data type
      <span class="caret"></span></button>
      <ul class="dropdown-menu">
        <li><a href="#">Amazon CloudFront</a></li>
        <li><a href="#">Amazon S3 Audit</a></li>
        <li><a href="#">Apache</a></li>
        <li><a href="#">Apache Tomcat</a></li>
        <li><a href="#">Aws CloudTrail</a></li>
        <li><a href="#">Cisco ASA</a></li>
        <li><a href="#">Linux System</a></li>
        <li><a href="#">Mac OS system</a></li>
        <li><a href="#">MySQL</a></li>
        <li><a href="#">Nginx</a></li>
        <li><a href="#">PaloAlto Networks</a></li>
        <li><a href="#">Varnish</a></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style scoped>
.row.content {height:1200px}

.sidenav {
  background-color: #424242;
  height: 100%;
}
h2{
  color:white;
}
.logged_header{
  text-align: right;
}
.nav{
  margin-top: 60px;
}
.nav-pills>li.active>a{
  background-color:#1AB39F;
}
a{
  color:white;
  font-size:18px;
  font-style:bold;
}
@media screen and (max-width: 767px) {
  .sidenav {
    height: auto;
    padding: 15px;
  }
  .row.content {height: auto;}
}
.header{
  padding-left: 0px;
  padding-top:20px;
  padding-bottom:20px;
  margin: 0px;
}
.linebottom{
  border-bottom: 2px solid #bbb;
}
.line{
  border: 2px solid 	#bbb;
}
li{
  border: 1px solid #1AB39F;
  border-radius: 7px;
}
img{

  width: 100px;
  height: 90px;
}


.table{
  width:70%;
}

.item{

}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-container > div {
  background-color: #ffffff;
  width: 200px;
  margin: 10px;
  margin-left: 20px;
  text-align: center;

  height: 200px;
  font-size: 20px;
  padding-top: 20px;
}
.title, .select{
  height:70px;
}
.title{
  padding-left: 30px;
}
.select{
  text-align:right;
  padding-top: 30px;
  padding-right:30px;
  font-weight:bold;
}
.btn{
  background-color: #ffffff;
  color: black;

}
.dropdown-menu{
  float:none;
  position: sticky;
}
.img{
  height: 100px;
}


</style>
