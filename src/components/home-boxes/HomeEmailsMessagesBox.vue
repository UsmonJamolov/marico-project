<script setup>
    import blackPink from '../../../public/img/image2.png'
    import ExpertsImg from '../../../public/img/image3.jpg'
    import HelpedImg from '../../../public/img/image4.png'
</script>

<template>
    <div class="connect">
        <div class="connect-box">
            <span>STEP 3</span>
            <h1>Send Emails & Text Messages</h1>
            <p>
                No more going through a social platform. Reach and engage
                your audience directly over email and text massage.
            </p>
        </div>
        <div class="connect-box2">
            <div class="connect-box2__item-left">
                <p>Create & Share</p>
                <h2>Reach Your
                    Audience <span>Directly.</span></h2>
                <div class="info">
                    <div class="info_item">
                        <span>1</span>
                        <p>Embed content or create something new to share.</p>
                    </div>
                    <div class="info_item">
                        <span>2</span>
                        <p>Share content over email, text message or your homepage.</p>
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
                    <img :src="blackPink" alt="CHarlie Puth">
                </div>
                <div class="white_box"></div>
            </div>
        </div>
        <div class="experts-agree">
            <h2>Experts Agree</h2>
            <img :src="ExpertsImg" alt="">
        </div>
        <div class="helped-box">
            <h2>
                We've helped over 1,000 creatorsre
                claim control of their audience.
            </h2>
            <img :src="HelpedImg" alt="">
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
        width: 1029px;
        height: 342px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .connect-box span {
        font-size: 25px;
        color: #3D82F2;
    }

    .connect-box h1 {
        font-size: 65px;
        color: white;
        font-weight: bold;
        margin-top: 25px;
        display: flex;
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
        font-size: 20px;
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

    .experts-agree {
        width: 1440px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 40px;
        margin-bottom: 100px;
    }

    .experts-agree h2 {
        font-size: 65px;
        color: white;
        font-weight: bold;
    }

    .experts-agree img {
        width: 100%;
    }

    .helped-box {
        position: relative;
        width: 1518px;
        height: 599px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
    }
    
    .helped-box h2 {
        position: absolute;
        z-index: 1;
        font-size: 60px;
        color: white;
        width: 1200px;
        text-align: center;
    }

    .helped-box img {
        width: 100%;
    }

    @media (max-width: 1200px) {
        .connect-box2 {
            flex-direction: column;
        }
        .experts-agree {
            display: none;
        }
        .helped-box {
            display: none;
        }
    }

    @media (max-width: 821px) {
        .connect {
            margin-bottom: 100px;
        }
        .connect, .connect-box {
            width: 100%;
        }
        .connect-box {
            gap: 25px;
        }
        .connect-box h1, .connect-box p {
            margin: 0;
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