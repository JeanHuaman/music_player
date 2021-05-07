import { createStore } from 'vuex'

export default createStore({
  state: {
    
  },
  mutations: {
  },
  actions: {
    async getMusic(name){
      try {
        const res = await fetch(`https://api.deezer.com/search?q=${name}`);
        console.log(res)
        
      } catch (error) {
        
      }

    }
  },
  modules: {
  }
})
