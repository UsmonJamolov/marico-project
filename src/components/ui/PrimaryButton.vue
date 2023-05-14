<script setup>
  import {RouterLink} from 'vue-router'
</script>

<template>
    <RouterLink to="/sing-up" class="btn btn-primary">
        <slot></slot>
    </RouterLink>
</template>

<style scoped>
 a {
    width: 290px;
    height: 67px;
    font-size: 20px;
    transition: all .2s;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>