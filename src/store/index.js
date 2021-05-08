import { createStore } from 'vuex'

export default createStore({
  state: {
    audio: "",
    artists:[],
    artist:{}
  },
  mutations: {
    setaudio(state,payload){
      state.audio = payload
    },
    setartists(state,payload){
      state.artists=payload
    },
    setartist(state,payload){
      state.artist=payload
    }
  },
  actions: {
    catchAudio({commit},url){
      commit("setaudio",url) 
    },
    async getApi({commit,state}){
      try{
        const res = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem&index=0&limit=8`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9cd7dcd2admsh5fd701ca0fa161cp11bbd2jsn921584877b1b",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
        }),
        json = await res.json();
       commit("setartists",json.data)
        commit("setaudio",json.data[0].preview)
        
        // console.log(state.artists)
        // console.log(state.audio)
        
        try{
          const res2 = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${json.data[0].album.id}`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "9cd7dcd2admsh5fd701ca0fa161cp11bbd2jsn921584877b1b",
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            },            
          }),
          json2 = await res2.json();
          commit("setartist",json2)         
          
        }catch(error){

        }
      }catch(error){

      }
    }
  },
  modules: {
  }
})
