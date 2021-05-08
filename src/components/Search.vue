<template>
  <section class="search">
      <form class="search_form">
          <input type="search" placeholder="Buscar" v-model="name" >
          <button @click.prevent="getApi">
              <i class="fas fa-search"></i>
          </button>
      </form>
      {{name}}
      
      <div class="search_user">
        <span><i class="fas fa-user"></i></span>
        <h1>Jean Huaman</h1>
      </div>  
  </section>
</template>

<script>
import {useStore} from "vuex";
import {ref,onMounted} from "vue";
export default {
  name:"Search",
  setup(){
    const store = useStore()
    const name = ref("")
    onMounted(()=>{

      store.dispatch("getApi")
      
    })





// const get = async ()=>{
  //    const res = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${name}&index=0&limit=8`, {
  //       "method": "GET",
  //       "headers": {
  //           "x-rapidapi-key": "9cd7dcd2admsh5fd701ca0fa161cp11bbd2jsn921584877b1b",
  //           "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
  //       }
  //   });
  //   array.value = await res.json();
  //   store.dispatch("catchAudio",array.value.data[0].preview)
    
  //   // const audio= new Audio(array.value.data[0].preview)
  //   // audio.play()
  //   console.log(array.value)
  //   console.log(store.state.audio)
    
  // }
  
    return {name}
  }

 
  }
</script>

