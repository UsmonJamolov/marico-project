<script setup>
    import items from "../../db.json"
</script>

<template>
    <div class="question-box">
        <h2>Why Creators Love Marico</h2>
          <div class="question__item-box">
            <div class="item" v-for="item in items" :key="item.id">
              <div>
                <img :src="item.src" alt="">
                <h4>{{item.title}}</h4>
              </div>
              <p>{{ item.descr }}</p>
            </div>
          </div>
      </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.question-box {
    width: 1350px;
    min-height: 271px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 100px;
    gap: 50px;
  }

  .question-box h2 {
    font-size: 75px;
    font-weight: 900;
    color: #fff;
  }

  .question__item-box {
    width: 100%;
    min-height: 95px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 443px;
    gap: 10px;
  }

  .item div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .item h4 {
    font-size: 35px;
    font-weight: bold;
    color: #fff;
  }

  .item p {
    color: #707070;
    font-size: 20px;
  }

  @media (max-width: 1200px) {
    .question-box {
      margin-top: 100px;
      width: 100% !important;
    }
    .question-box h2 {
      font-size: 45px;
      width: 80%;
      text-align: center;
    }
    
    .question__item-box {
      width: 100% !important;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    
    .item {
      width: 100%;
    }
    
    .item div h4 {
      font-size: 40px;
    }
    
    .item p {
      text-align: center;
    }
  }

  @media(max-width: 376px) {
    .question-box h2 {
      width: 330px;
      text-align: center;
    }

    .question__item-box {
      width: 100% !important;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .item div h4 {
      font-size: 30px;
    }

    .item p {
      width: 350px;
      text-align: center;
    }
  }
</style>