<template>
  <div class="home-page">

    <h1>Selamat Datang di Halaman Home portofolio</h1>

    <h2>Halo, Saya Hafis Ardiyanto!</h2>

    <h3>Selamat datang di portofolio saya seorang programmer yang berfokus framework laravel </h3>

    <ul>
      <li>👨‍💻 Pengalaman membangun aplikasi web modern</li>
      <li>🚀 Terbiasa dengan pengembangan Frontend & Backend</li>
      <li>📚 Suka belajar teknologi baru</li>
    </ul>

     <nav>
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
  
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Gradasi cerah */
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
}

h1 {
  color: #333;
}

h2 {
  margin-top: 0;
  color: #ff6a00;
}

ul {
  text-align: left;
  margin: 1em auto;
  max-width: 350px;
  color:rgb(250, 246, 14)
}

</style>