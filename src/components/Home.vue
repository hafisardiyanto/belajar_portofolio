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
  background: linear-gradient(135deg,rgb(97, 87, 54) 40%);
}

h1 {
  color: #333;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  animation: slide-right 8s linear infinite;
   background: linear-gradient(90deg, #ff512f, #dd2476, #1fa2ff, #12d8fa, #a6ffcb);
}

 


@keyframes slide-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100vw);
  }
}

h2 {
  animation: colorChange 15s infinite;

  @keyframes colorChange {
  40% {
    color: #ff0000; /* Warna 1: Merah */
  }
  33.33% {
    color: #00ff00; /* Warna 2: Hijau */
  }
  66.66% {
    color: #0000ff; /* Warna 3: Biru */
  }
  100% {
    color: #ff0000; /* Kembali ke Warna 1: Merah */
  }
}
}

.bouncing-ball {
            width: 100px;
            height: 100px;
            background-color: #ff6347; /* Warna merah tomat */
            border-radius: 50%; /* Membuat bentuk lingkaran */
            position: relative; /* Penting untuk animasi 'top' */
            animation: bounce 5s infinite ease-in-out; /* Animasi pantul */
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-family: sans-serif;
            font-weight: bold;
            font-size: 1.2em;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Efek bayangan */
        }

        /* Definisi animasi pantulan */
        @keyframes bounce {
            0% {
                top: 0; /* Posisi awal, di tengah secara vertikal */
                transform: scale(1); /* Ukuran normal */
            }
            50% {
                top: -50px; /* Bergerak 50px ke atas */
                transform: scale(1.05); /* Sedikit membesar di puncak pantulan */
            }
            100% {
                top: 0; /* Kembali ke posisi awal */
                transform: scale(1); /* Kembali ke ukuran normal */
            }
        }



h3 {
  animation: colorChange 10s infinite;
}
@keyframes colorChange {
    0% {
    color:rgb(12, 243, 4); /* Warna 1: Merah */
  }
  33.33% {
    color:rgb(255, 126, 5); /* Warna 2: Hijau */
  }
  }


ul {
   animation: colorChange 10s infinite;
  text-align: left;
  margin: 1em auto;
  max-width: 350px;

  @keyframes colorChange {
    0% {
    color:rgb(248, 15, 143); /* Warna 1: Merah */
  }
  33.33% {
    color:rgb(202, 255, 9); /* Warna 2: Hijau */
  }
  66.66% {
    color: #0000ff; /* Warna 3: Biru */
  }
  100% {
    color: rgb(248, 15, 143); /* Kembali ke Warna 1: Merah */
  }
  }
}

</style>