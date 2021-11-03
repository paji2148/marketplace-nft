<template>
  <div>
    <footer class="footer-basic-centered">
      <div class="footer-container">
        <div class="footer-row">
        <a href="https://www.twitter.com/" target="_blank">
          Quick Links
        </a>
        </div>
        <div class="footer-row">
          <a href="https://www.twitter.com/" target="_blank">
            <img src="http://localhost:8080/twitter.png" style="width: 35px;height: 35px" alt="logo">
          </a>
        </div>
        <div class="footer-row">
          <a href="https://www.twitter.com/" target="_blank">
            <img src="http://localhost:8080/twitter.png" style="width: 35px;height: 35px" alt="logo">
          </a>
        </div>
        <div class="footer-row">
          <a href="https://www.twitter.com/" target="_blank">
            <img src="http://localhost:8080/telegram.png" style="width: 35px;height: 35px" alt="logo">
          </a>
        </div>

      </div>

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
.footer-basic-centered {
  background-color: #9E9E9E;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
  text-align: center;
  padding: 20px;
  bottom: 0;
  margin: 0 auto;
  position: absolute;
}



.footer-container{
  display: flex;
  justify-content: space-between;
}

.footer-container::before {
  content: "";
}

.footer-container::after {
  content: "";
}

.footer-row a {
  color: black;
}

@media (max-width: 600px) {
  .footer-basic-centered {
    padding: 35px;
  }


  .footer-row a {
    display: block;
    text-decoration: none;
  }
}

</style>
