<script setup>
    import onlineLink from '../../../public/img/One_link.png'
    import PButton from '../ui/PrimaryButton.vue'
</script>

<template>
    <div class="home-page-box">
        <span>STEP 2</span>
        <h1>Share Your Homepage</h1>
        <p>
            Share your Wavium homepage link with your followers, and
            we'll handle the rest.
        </p>

        <div class="svg-box">
                <div class="svg-box-img">
                    <img :src="onlineLink" class="one-link" alt="">
                </div>
    
                <div class="collect-subcribers">
                    <span>Collect Subscribers</span>
                    <h2>
                        <span>
                            Emails. <br>
                            Phone #s.
                        </span> <br>
                            All Yours.
                    </h2>
                </div>

            </div>
            <PButton>
                Get Started
            </PButton>
    </div>
</template>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .home-page-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 25px;
        margin-bottom: 100px;
    }

    .home-page-box span {
        font-size: 25px;
        color: #3D82F2;
    }

    .home-page-box h1 {
        color: white;
        font-size: 75px;
        font-weight: bold;
        text-align: center;
    }

    .home-page-box p {
        font-size: 28px;
        color: #707070;
        width: 830px;
        text-align: center;
    }

    .svg-box {
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 120px;
    }

    .svg-box-img {
        width: 692px;
        height: 500px;
        overflow: hidden;
    }
    .svg-box-img img {
        width: 800px;
        height: 100%;
    }

    .collect-subcribers {
        width: 692px;
        height: 500px;
        background-color: #0D0D0D;
        display: flex;
        flex-direction: column;
        gap: 70px;
        padding: 20px;
    }

    .collect-subcribers span {
        color: #0FC65C;
        font-size: 25px;
    }

    .collect-subcribers h2 {
        color: white;
        font-weight: bold;
        font-size: 70px;
    }
    .collect-subcribers h2 span {
        font-size: 70px;
        font-weight: bold;
        color: #919191;
    }

    @media (max-width: 1200px) {
        .svg-box {
            flex-direction: column;
        }
    }

    @media (max-width: 821px) {
        .home-page-box {
            width: 100%;
        }
        .home-page-box p {
            width: 100%;
        }
        .svg-box {
            display: none;
        }
    }
    
    @media (max-width: 376px) {
        .home-page-box {
            width: 100% !important;
        }
        .home-page-box h1 {
            font-size: 45px;
            width: 330px;
            text-align: center;
        }
        .home-page-box p {
            font-size: 20px;
            width: 330px;
            text-align: center;
        }
        .svg-box {
            display: none;
        }
    }

</style>