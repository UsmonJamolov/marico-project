<script setup>
    import logo from '../../public/img/Company_logo.png'
    import {RouterLink} from 'vue-router'
</script>

<template>
    <nav>
        <RouterLink to="/" class="link"><img :src="logo" class="logo" alt=""></RouterLink>
        <div class="links">
            <ul>
                <li><RouterLink to="/use-cases" class="link"><span>Use Cases</span> <i class="fa-solid fa-chevron-down"></i></RouterLink></li>
                <li><RouterLink to="/about" class="link">About Us</RouterLink></li>
                <li><RouterLink to="/pricing" class="link">Pricing</RouterLink></li>
                <li><RouterLink to="/blog" class="link">Blog</RouterLink></li>
            </ul>
        </div>
            <div class="login-sing-up-box">
                <RouterLink to="/login" class="btn link">Login</RouterLink>
                <RouterLink to="/sing-up" class="btn btn-primary">Sing Up</RouterLink>
            </div>
    </nav>
</template>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    nav {
        width: 100%;
        min-height: 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
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
        width: 400px;
        min-height: 32px;
    }

    ul .link {
        display: block;
        height: 35px;
        width: 120px;
        color: #707070;
    }

    li {
        text-align: center;
        list-style-type: none;
    }

    .link {
        color: #707070;
        text-decoration: none;
        transition: all .2s;
    }

    li .link span {
        margin-right: 5px;
    }

    .fa-chevron-down {
        font-size: 10px;
    }

    .login-sing-up-box .link {
        padding: 5px 25px;
    }

    .login-sing-up-box .btn-primary {
        color: #fff;
        padding: 5px 15px;
    }

    .link:hover {
        color: #3C82F4;
    }

    @media (max-width: 1200px) {
        nav {
            flex-direction: column;
            gap: 25px;
        }
    }

    @media (max-width: 820px) {
        nav {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }
        nav .links {
            display: flex;
            flex-direction: column;
        }
        ul {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        .login-sing-up-box {
            flex-direction: row;
            justify-content: center;
            margin-top: 20px;
        }
    }
    

    @media (max-width: 376px) {
        nav {
            width: 376px;
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        nav div {
            width: 100%;
            flex-direction: column;
        }

        ul {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        .login-sing-up-box {
            flex-direction: row;
            justify-content: center;
            margin-top: 20px;
        }
    }
</style>