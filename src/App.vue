<template>
  <Navbar></Navbar>
  <Search></Search>
  <Detail></Detail>
  <Results></Results>
  <Player></Player>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
    import Navbar from '@/components/Navbar'
    import Search from '@/components/Search'
    import Detail from '@/components/Detail'
    import Results from '@/components/Results'
    import Player from '@/components/Player'
export default {
  name: 'App',
  components: {
    Navbar,
    Search,
    Detail,
    Results,
    Player
  }
}
</script>

<style>

</style>
