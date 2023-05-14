<script setup>
import HomeCertifiedBox from "../components/home-boxes/HomeCertifiedBox.vue";
import HomeQuestionBox from "../components/home-boxes/HomeQuestionBox.vue";
import HomeConnectBox from "../components/home-boxes/HomeConnectBox.vue";
import HomeHomePageBox from "../components/home-boxes/HomeHomePageBox.vue";
import HomeEmailsMessagesBox from "../components/home-boxes/HomeEmailsMessagesBox.vue";
import HomeFooter from "../components/home-boxes/HomeFooter.vue";
</script>

<template>
    <main>
        <p class="p-1">Own your audience</p>
        <p class="gradient-text">So you don't lose them.</p>
        <HomeCertifiedBox />
        <HomeQuestionBox />
        <HomeConnectBox />
        <HomeHomePageBox />
        <HomeEmailsMessagesBox />
        <HomeFooter />
    </main>
</template>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
    main {
        width: 100%;
        background-color: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .p-1 {
        font-size: 97px;
        font-weight: 900;
        color: #fff; 
        margin-top: 100px;
        line-height: 125px;
    }
    
    .gradient-text {
        background-color: red;
        background-image: linear-gradient(45deg, #FE6783, #FFBF84);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        font-size: 97px;
        font-weight: 900;
        margin-bottom: 100px;
        line-height: 125px;
      }

      @media (max-width: 820px) {
        .p-1, .gradient-text {
            text-align: center;
        }
      }

      @media(max-width: 376px) {
        .p-1, .gradient-text {
            font-size: 65px;
            line-height: 70px;
            text-align: center;
        }
      }
</style>