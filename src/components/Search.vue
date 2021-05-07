<template>
  <section class="search">
      <form class="search_form">
          <input type="search" placeholder="Buscar" v-model="name" >
          <button @click="getMusic(name)">
              <i class="fas fa-search"></i>
          </button>
      </form>
      
      <div class="search_user">
        <span><i class="fas fa-user"></i></span>
        <h1>Jean Huaman</h1>
      </div>  
  </section>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name:"Search",
  data(){
    return{
      name:""
    }
  },
  methods:{
    // ...mapActions(["getMusic"]),
  
     async getMusic(){
      try {
        const res = await fetch(`https://api.deezer.com/user/2529/playlists&output=json`);
        if(!res.ok) throw {error : "mensaje error"}
        console.log(res)
        
      } catch (error) {
        console.log(error.error)
      }

    }
  }

}
</script>

