<script setup>
    import PButton from '../ui/PrimaryButton.vue';
    import SButton from '../ui/SecondaryButton.vue';
</script>

<template>
    <div class="certified-box">
        <div class="certified-box_item">
            <p class="p-2">
                Turn your audience into email and
                text message subscribers.
            </p>
            <div class="button-box">
                <PButton>Get Certified Now</PButton>
                <SButton>
                    View A Demo
                </SButton>
            </div>
            <div class="creators-box">
                <span class="online-circle"></span>
                <span>1000+</span>
                <span>creators have already started</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.certified-box {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 306px;
    margin-bottom: 100px;
  }
  
  .certified-box_item {
    width: 634px;
    min-height: 306px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .p-2 {
    font-size: 34px;
    font-weight: 400;
    text-align: center;
    color: rgba(255, 255, 255, .7);
  }

  .button-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 20px;
  }

  .creators-box {
    width: 496px;
    min-height: 38px;
    margin-top: 30px;
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

  .creators-box span {
    text-align: center;
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

  @media(max-width: 376px) {
    .certified-box_item {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .p-2 {
        font-size: 20px;
        text-align: center;
        width: 270px;
    }

    .button-box {
      display: flex;
      flex-direction: column;
      margin: 0;
    }

    .creators-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 20px;
      width: 100% !important;
    }
  }
</style>