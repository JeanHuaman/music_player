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
        <button @click="play" ><i class="fas fa-play"></i></button>
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
import {useStore} from "vuex"
import {computed, ref} from "vue"
export default {
  name:"Player",
  setup(){
    const store = useStore()
    const url = computed(()=>{
      return store.state.audio
    })
    const audio= new Audio(store.state.audio)
    
    
    const play = ()=>{
      audio.play()
    }
    return {url,play}
  }
}
</script>
