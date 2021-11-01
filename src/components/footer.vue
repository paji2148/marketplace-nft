<template>
  <div class="footer">
    <div class="footer_menu">
      <div class="col_1">
        <div class="title">
          Company
        </div>
        <ul>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="col_3">
        <div class="title">
          Services
        </div>
        <ul>
          <li><a href="#">Business Consultancy</a></li>
        </ul>
      </div>
      <div class="col_4">
        <div class="title">
          Solutions
        </div>
        <ul>
          <li><a href="#">Team</a></li>
        </ul>
      </div>
    </div>
    <div class="social_media">
      <ul>
        <li><a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a class="instagram" href="#"><i class="fab fa-instagram"></i></a></li>
        <li><a class="whatsapp" href="#"><i class="fab fa-whatsapp"></i></a></li>
      </ul>
      <p>Copyright © CRL</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  data: () => ({
  }),
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

.footer{
  background: #222222;
  padding: 50px;
}

.footer .footer_menu{
  max-width: 1000px;
  width: 100%;
  display: flex;
  margin: 0 auto 25px;
  justify-content: space-between;
}

.footer .footer_menu .title{
  margin-bottom: 10px;
  color: #adadad;
}

.footer .footer_menu ul li a{
  display: block;
  margin-bottom: 6px;
  color: #fff;
}

.footer .footer_menu ul li a:hover{
  text-decoration: underline;
}

.footer .partners{
  margin-bottom: 25px;
}

.footer .partners ul{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.footer .partners li a{
  background: url('http://localhost:8080/1a.png') no-repeat 0 0;
  width: 101px;
  height: 100px;
  display: block;
  margin: 0 5px;
}

.footer .partners li a.partner1{
  background-position: 0 0;
  width: 100px;
  height: 100px;
}
.footer .partners li a.partner2{
  background-position: 0 -108px;
  width: 100px;
  height: 101px;
}
.footer .partners li a.partner3{
  background-position: 0 -216px;
  width: 100px;
  height: 101px;
}
.footer .partners li a.partner4{
  background-position: 0 -325px;
  width: 100px;
  height: 101px;
}
.footer .partners li a.partner5{
  background-position: 0 -446px;
  width: 100px;
  height: 100px;
}

.footer .social_media{
  text-align: center;
}

.footer .social_media ul{
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.footer .social_media ul li a{
  display: block;
  margin: 0 5px;
  color: #fff;
  font-size: 24px;
  width: 50px;
  height: 50px;
  background: #fff;
  color: #222222;
  line-height: 50px;
  border-radius: 3px;
}

.footer .social_media ul li a:hover{
  color: #fff;
}

.footer .social_media ul li a.facebook:hover{
  background: #3b5998;
}

.footer .social_media ul li a.twitter:hover{
  background: #1da1f2;
}

.footer .social_media ul li a.instagram:hover{
  background: #c32aa3;
}

.footer .social_media ul li a.whatsapp:hover{
  background: #25d366;
}

.footer .social_media{
  color: #adadad;
}

@media (max-width:768px) {
  .wrapper .navbar .logo{
    font-size: 20px;
  }
  .main_container {
    padding: 25px;
  }
  .main_container .item{
    flex-direction: column;
  }
  .main_container .item .img_holder{
    max-width: 750px;
    width: 100%;
  }
  .main_container .item .item_info{
    margin-left: 0;
    width: 100%;
    margin-top: 10px;
    text-align: center;
  }
  .footer .footer_menu{
    flex-direction: column;
    width: 220px;
    margin: 0 auto 25px;
  }
  .footer .footer_menu > div{
    margin: 10px 0;
  }
  .footer .partners ul li a{
    margin: 5px;
  }
}
</style>
