<script setup>
    import logo from '../../public/img/Company_logo.png'
    import {RouterLink} from 'vue-router'
    import LogoBig from '../../public/img/logo-big.png'
    import PrimaryButton from '../components/ui/PrimaryButton.vue';
</script>

<template>
    <div class="container">
        <div class="footer">
            <img :src="LogoBig" alt="">
            <h2>Get Started Now</h2>
            <p>Setup is easy and takes under 5 minutes.</p>
            <PrimaryButton>
                Get Started Now
            </PrimaryButton>
            <div class="creators-box">
                <span class="online-circle"></span>
                <span>1000+</span>
                <span>creators have already started</span>
            </div>
        </div>
        <nav>
            <div class="logo-box">
                <RouterLink to="/" class="link"><img :src="logo" class="logo" alt=""></RouterLink>
                <RouterLink to="/" class="link">info@marico.co</RouterLink>
            </div>
            <ul>
                <li><RouterLink to="/about" class="link">About</RouterLink></li>
                <li><RouterLink to="/pricing" class="link">Pricing</RouterLink></li>
                <li><RouterLink to="/blog" class="link">Blog</RouterLink></li>
                <li><RouterLink to="/login" class="link">Sing in</RouterLink></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    .container {
        width: 100%;
    }

    nav {
        width: 100%;
        min-height: 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-box {
        display: flex;
        flex-direction: column;
    }

    .logo {
        height: 56px;
        width: 196px;
    }

    h1 {
        font-size: 25px;
    }

    ul {
        display: flex;
        gap: 25px;
        justify-content: center;
        align-items: center;
        max-width: 400px;
        max-height: 32px;
    }

    li {
        text-align: center;
        list-style-type: none;
    }
    
    .link {
        text-decoration: none;
        transition: all .2s;
        color: #707070;
    }

    .link:nth-child(2) {
        font-size: 25px;
    }

    .link:hover {
        color: #3C82F4;
    }
    .footer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 100px;
    }
    .footer img {
        width: 100px;
    }
    .footer h2 {
        font-size: 65px;
        color: white;
        font-weight: bold;
    }

    .footer p {
        font-size: 25px;
        color: white;
    }
    .creators-box {
        width: 496px;
        height: 38px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    
      .online-circle {
        width: 20px;
        height: 20px;
        background-color: #0fc65c;
        display: inline-block;
        border-radius: 50%;
        box-shadow: 0 0 0 5px rgba(15, 198, 92, .5);
        position: relative;
        bottom: 5px;
      }
    
      .creators-box span:nth-child(2) {
        font-size: 25px;
        font-weight: 900;
        color: #fff;
      }
    
      .creators-box span:nth-child(3) {
        font-size: 25px;
        color: #707070;
      }

      @media (max-width: 1200px) {
        .footer {
            display: none;
        }
    }

    @media (max-width: 376px) {
        nav {
            flex-direction: column;
            margin-bottom: 200px;
            margin-top: 150px;
        }

        .link:last-child {
            text-align: center;
        }
        .footer {
            display: none;
        }
    }
</style>