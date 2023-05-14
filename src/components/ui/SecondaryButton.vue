<script setup>
  import {RouterLink} from 'vue-router'
</script>

<template>
    <RouterLink to="/login" class="btn btn-secondary">
        <slot></slot>
    </RouterLink>
</template>

<style scoped>
 a {
    width: 290px;
    height: 67px;
    font-size: 20px;
    border-radius: 8px;
    color: #707070;
    border: 1px solid #707070;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }

 a:hover {
    color: #326CF9;
    border-color: #326CF9;
  }

  .btn-secondary {
    background-color: transparent;
  }
</style>