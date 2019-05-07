<template>
<div class="flex-container">
  <div class="line datatype">
    <div class="img">
      <img src="img/chain.png" alt="">
    </div>
    <div class="imgName">
      Your Custom <p>App</p>
    </div>
  </div>
  <div class="line datatype">
    <div class="img">
      <img src="img/AWS(Cloud).png" alt="">
    </div>
    <div class="imgName">
     Amazon <p>CloudFront</p>
    </div>
  </div>
  <div class="line datatype">
    <div class="img">
      <img src="img/AWS(S3).png" alt="">
    </div>
    <div class="imgName">
     Amazon S3<p>Audit</p>
    </div>
  </div>
  <div class="line datatype">
    <div class="img">
      <img src="img/Apache.png" alt="">
    </div>
    <div class="imgName">
       Apache
    </div>
  </div>
  <div class="line datatype">
    <div class="img">
      <img src="img/Tomcat.png" alt="">
    </div>
    <div class="imgName">
       Apache <p>Tomcat</p>
    </div>
  </div>
  <div class="line datatype">
    <div class="img">
      <img src="img/Cisco.png" alt=""style="width:80px; height:80px;">
    </div>
    <div class="imgName" >
     Cisco ASA
    </div>
  </div>
  <div class="line datatype">
    <div class="img">
      <img src="img/Linux.png" alt="">
    </div>
    <div class="imgName">
     Linux System
    </div>
  </div>
  <div class="line datatype">
    <div class="img">
      <img src="img/apple.png" alt="">
    </div>
    <div class="imgName">
     Mac OS <p>System</p>
    </div>
  </div>
  <div class="line datatype">
    <div class="img">
      <img src="img/MySQL.png" alt="">
    </div>
    <div class="imgName">
     MySQL
    </div>
  </div>
  <div class="line datatype">
    <div class="img">
      <img src="img/Nginx.png" alt="">
    </div>
    <div class="imgName">
     Nginx
    </div>
  </div>

  <div class="line datatype">

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
