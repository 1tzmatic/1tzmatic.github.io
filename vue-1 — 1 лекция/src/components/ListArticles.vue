<template>
    <main class="list-articles">
      <div class="list-articles__container">
        <div class="list-articles__list">
            <CardArticle
          v-for="item in newsList"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          class="list-articles__card"
        />
        </div>
      </div>
    </main>
  </template>
  
<script>
import CardArticle from "@/components/card/CardArticle.vue";
import newsList from "@/json/news.json";

export default {
  components: {
    CardArticle
  },
  data() {
    return {
      newsList: newsList,
    };
  },
};
</script>

<style lang="less">
.list-articles {
  &__container {
    .container();
  }
  &__card {
    margin-bottom: 15px;
  }
}

</style>