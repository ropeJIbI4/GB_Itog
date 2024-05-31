<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div id="app" class="container">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;

    padding: 24px;
    box-sizing: border-box;
  }

  html,
  body,
  #app {
    height: 100%;
    width: 1200px;
    margin: 20px auto;
    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;

  }

  a {
    text-decoration: none;
    color: black;
  }

  .center {
    padding-left: calc(50% - 560px);
    padding-right: calc(50% - 560px);
  }

  .router-link-active {
    color:#CDA274;
  }

</style>


