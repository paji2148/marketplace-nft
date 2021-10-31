<template>
  <header class="d-block w-100">
    <div class="header d-none d-lg-block">
      <div class="header__container">
        <div class="header__nav header__nav--left">
          <div class="nav__item">
            <a class="nav__link first" href="#">About</a>
          </div>
          <div class="nav__item">
            <a class="nav__link " href="#">Browse</a>
          </div>
          <div class="nav__item">
            <a class="nav__link " href="#">Events</a>
          </div>
        </div>
        <div class="header__logo">
          <a href="/" style="color: #000000; font-size: 44px;font-weight:700;">
            <img src="http://localhost:8080/background.png" width="40px" height="40px" alt="logo">
          </a>
        </div>
        <div class="header__nav header__nav--left">
          <div class="nav__item ml-auto">
            <p class="nav__link wallet active">
              CRG World
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data: () => ({
  }),
}
</script>

<style>
header{display:block;}
a{color:#007bff;text-decoration:none;background-color:transparent;}
a:hover{color:#0056b3;text-decoration:underline;}
img{border-style:none;}
img{vertical-align:middle;}
.d-none{display:none!important;}
.d-block{display:block!important;}
@media (min-width:992px){
  .d-lg-block{display:block!important;}
}
.ml-auto{margin-left:auto!important;}
.w-100{width:100%!important;}
.header__nav{width:calc(50% - 227px);min-width:calc(50% - 227px);max-width:calc(50% - 227px);display:flex;}
.header__logo{width:340px;min-width:340px;}
.header__logo img{width:100%;}
.header__container{display:flex;align-items:center;justify-content:space-between;width:100%;max-width:1440px;height:70px;margin:0;}
.nav__item{position:relative;}
@media screen and (min-width:992px){
  .nav__item{display:flex;}
}
.nav__link{color:#fff;padding:20px;font-size:22px;}
@media screen and (min-width:992px){
  .nav__link:hover{text-decoration:none;color:#fff;background-image:url(http://localhost:8080/design.png);background-size:100% 100%;background-repeat:no-repeat;}
}
header .m-header img{width:70%;}

</style>
