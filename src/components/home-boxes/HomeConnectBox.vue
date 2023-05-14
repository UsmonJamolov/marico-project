<script setup>
import SButton from '../ui/SecondaryButton.vue';
import CHPuthImg from '../../../public/img/image.png'
</script>

<template>
    <div class="connect">
        <div class="connect-box">
            <span>STEP 1</span>
            <h1>Connect Your Content</h1>
            <p>Bring all of your content together and get a Homepage that
                automatically updates whenever you create anywhere online.
            </p>
            <SButton>
                View Avaliable Sources
            </SButton>
        </div>
        <div class="connect-box2">
            <div class="connect-box2__item-left">
                <p>Your Homepage</p>
                <h2>Your Content. <br> All in <span>One Spot</span></h2>
                <div class="info">
                    <div class="info_item">
                        <span>1</span>
                        <p>Bring all of your content together into one homepage</p>
                    </div>
                    <div class="info_item">
                        <span>2</span>
                        <p>Your page automatically updates whenever you create.</p>
                    </div>
                </div>
                <div class="connect-box2__item-buttons">
                    <a href="#" class="btn btn-primary">
                        Get Started Now
                    </a>
                    <a href="#" class="btn">
                        View A Demo
                    </a>
                </div>
            </div>
            <div class="connect-box2__item-right">
                <div class="img">
                    <img :src="CHPuthImg" alt="CHarlie Puth">
                </div>
                <div class="white_box"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .connect {
        width: 1440px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .connect-box {
        width: 929px;
        min-height: 342px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 100px;
    }

    .connect-box span {
        font-size: 25px;
        color: #3D82F2;
    }

    .connect-box h1 {
        font-size: 75px;
        color: white;
        font-weight: bold;
        margin-top: 25px;
        text-align: center;
    }

    .connect-box p {
        font-size: 28px;
        color: #707070;
        text-align: center;
        margin-bottom: 30px;
    }

    .connect-box2 {
        min-height: 400px;
        width: 100%;
        height: 615px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
    }

    .connect-box2__item-left {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .connect-box2__item-left p:first-child {
        font-size: 28px;
        color: white;
    }

    .connect-box2__item-left h2 {
        font-size: 65px;
        font-weight: bold;
        color: white;
        margin-top: 25px;
    }

    .connect-box2__item-left h2 span {
        color: #3C82F4;
        font-weight: bold;
    }

    .info {
        margin: 25px 0;
    }

    .info_item {
        display: flex;
        gap: 10px;
    }

    .info_item span {
        background-color: #2d2d2d;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 50%;
    }

    .info_item p {
        color: white;
        font-size: 21px;
    }

    .connect-box2__item-buttons {
        display: flex;
        gap: 15px;
    }

    .connect-box2__item-buttons a {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid;
        padding: 15px 25px;
        border-radius: 8px;
    }

    .connect-box2__item-buttons a:first-child {
        border: none;
    }

    .connect-box2__item-buttons a:last-child {
        padding: 15px 35px;
        color: #707070;
    }

    .connect-box2__item-buttons a:last-child:hover {
        color: #3C82F4;
    }

    .connect-box2__item-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        height: 600px;
    }

    .connect-box2__item-right .img {
        width: 780px;
        height: 510px;
        position: relative;
        top: 60px;
        right: -38px;
    }

    .connect-box2__item-right .img img {
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    .connect-box2__item-right .white_box {
        width: 253px;
        height: 240px;
        background-color: #8B8B8B;
        position: relative;
        
        left: 135px;
        z-index: 1;
    }

    @media (max-width: 1200px) {
        .connect-box2 {
            flex-direction: column;
        }
    }

    @media (max-width: 821px) {
        .connect {
            width: 100%;
        }
        .connect-box {
            width: 100%;
        }
        .connect-box2 {
            display: none;
        }
    }

    @media (max-width: 376px) {
        .connect {
            width: 100%;
        }
        .connect-box {
            width: 100%;
            gap: 20px;
        }

        .connect-box h1 {
            font-size: 45px;
            width: 330px;
            text-align: center;
        }
        .connect-box p {
            font-size: 20px;
            width: 330px;
            text-align: center;
        }

        .connect-box2 {
            display: none;
        }
    }
</style>