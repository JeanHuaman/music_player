<template>
  <footer class="player">
      <div class="player_user">
          <img src="../assets/user.png" alt="Singer">
      </div>  
      <div class="player_controls_info">
        <h4>Cancion</h4>
        <h5>Artista - Album</h5>
      </div>
      <div class="player_controls_play">
        <button><i class="fas fa-caret-left"></i></button>
        <button><i class="fas fa-play"></i></button>
        <button><i class="fas fa-caret-right"></i></button>
      </div>
      <div class="player_controls_vol">
        <form>
            <input type="range" min="0" max="10" value="5" >
        </form>
        <button><i class="fas fa-volume-off"></i></button>
      </div>
      
  </footer>
</template>

<script>
export default {

}
</script>
