<template>
  <div class="home-page">
    <h1>Selamat Datang di Halaman Home</h1>
    <p>Ini adalah halaman utama portofolio Anda.</p>
    <th>Hy</th>
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
h1, p {
  color: #333;
}
</style>