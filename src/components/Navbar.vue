<template>
<header class="navbar ">
  <div class="logo">
      <img src="../assets/foxbel-music.png" alt="Logo">
  </div>
  <nav class="navigation">
    <section class="library">
      <h2>Mi Librería</h2>
      <ul>
        <li><a href="">Recientes</a></li>
        <li><a href="">Artistas</a></li>
        <li><a href="">Álbums</a></li>
        <li><a href="">Canciones</a></li>
        <li><a href="">Estaciones</a></li>
      </ul>
    </section>
    <section class="playlist">
      <h2>Playlist</h2>
      <ul>
        <li><a href="">Metal</a></li>
        <li><a href="">Para bailar</a></li>
        <li><a href="">Rock 90s</a></li>
        <li><a href="">Baladas</a></li>
      </ul>
    </section>
  </nav>
</header>
  <button @click="active" class="hamburger hamburger--collapse btn-navbar" type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>
</template>

<script>
export default {
  name:"Navbar",
  methods:{
    active(){
      const btn = document.querySelector(".btn-navbar"),
      navbar = document.querySelector(".navbar")

      if(navbar.classList.contains("is-active")){
          navbar.classList.remove("is-active")
          btn.classList.remove("is-active")
      }else{
        navbar.classList.add("is-active")
          btn.classList.add("is-active")
      }
    }
  }
}
</script>

