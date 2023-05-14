<script setup>
import FooterNav from "./views/FooterNav.vue";
import Nav from "./views/Nav.vue"
import {RouterView} from 'vue-router'
</script>

<template>
  <div class="container">
    <header>
      <Nav />
    </header>
    
    <main>
      <RouterView />
    </main>
  
    <footer>
      <FooterNav />
    </footer>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 30px;
  padding-left: 2%;
  padding-right: 2%;
  background-color: #000;
}
header, main, footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  width: 100%;
}


@media (max-width: 1680px) {
  .container {
    width: 1680px !important;
  }
}

@media (max-width: 1380px) {
  .container {
    width: 1380px !important;
  }
}

@media(max-width: 376px) {
  .container {
    width: 375px !important;
  }
}
</style>
