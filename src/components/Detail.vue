<template>
  <section class="detail">
      <div class="detail_user">   
          <img src="../assets/user.png" alt="usuario">
      </div>
      <article class="detail_description">
          <h2></h2>
          <div class="detail_description_subtitle">
              <h3>Lo mejor de Adele</h3>
              <small>321,123 seguidores</small>
          </div>
          
          <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur perferendis provident vel culpa quia nisi iusto, numquam sit? Minima nulla iure nostrum magni doloribus, aliquid placeat assumenda aperiam fuga quasi.
          </p>
          <div class="detail_description_button">
              <button class="detail_description_button_play">Reproducir</button>
              <button class="detail_description_button_follow">Seguir</button>
              <span>...</span>
          </div>
      </article>
  </section>
</template>

<script>
import {useStore} from "vuex"
import {ref,computed} from "vue"
export default {
    name:"Detail",
    setup(){
        const store = useStore();
        const artista = ref(store.state.artist)
        
        // console.log(artista.value)
        return {artista}
    }
}
</script>

