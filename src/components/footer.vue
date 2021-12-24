<template>
  <div>
    <footer id="footer">
        <section class="footer">
            <div class="social">                
                <a href="#"><i class="fab fa-twitter"></i>
                <img src="http://localhost:8080/twitter.png" style="width: 35px;height: 35px" alt="logo"> 
                </a>
                <a href="#"><i class="fab fa-reddit"></i>
                <img src="http://localhost:8080/twitter.png" style="width: 35px;height: 35px" alt="logo">
                </a>
                <a href="#"><i class="fab fa-discord"></i>
                <img src="http://localhost:8080/telegram.png" style="width: 35px;height: 35px" alt="logo">
                </a>
            </div>

            <ul class="list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy Policy</a></li>

                <p class="copyright">Duneslide @ 2021</p>
            </ul>
        </section>
    </footer>
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
.footer {
    background-color:black;
    padding: 40px 0;
    text-align: center;
    position:relative;
    bottom:0;
    width:100%;
    height: 300px;
    /* margin-top:-300px;  */
    clear:both;
}

.footer .social {
text-align: center;
padding-bottom: 25px;
}

.footer ul{text-align:center}


.footer .social a {
    font-size:33px;
    line-height: 38px;
    display: inline-block;
    text-align: center;
    margin:10px;
    padding: 10px;
}

.footer ul li a {
text-decoration:none;
background-color:black;
color:white;
}

.footer ul li {
display:inline-block;
padding:0 15px;
color:white;
}

.footer ul li a:hover {
opacity:1;
}

.footer .copyright{
    margin-top: 15px;
    text-align:center;
    color:#aaa
}
</style>
