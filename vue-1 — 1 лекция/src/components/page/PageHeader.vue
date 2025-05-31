<template>
    <header class="page-header">
      <div class="page-header__container">
        <div class="page-header__logo-wrap">
            <SvgLogo class="page-header__logo" /> 
  
          <h4 class="page-header__logo-text">
            People<span class="page-header__logo-text-red">Live</span>
          </h4>
  
          <div class="page-header__logo-circle"></div>
        </div>
  

        <nav class="page-header__nav">
        <RouterLink
          v-for="tab in tabs"
          :key="tab.path"
          class="page-header__nav-item"
          :to="tab.path"
        >
          {{ tab.title }}
        </RouterLink>
      </nav>
      </div>
    </header>
  </template>

<script>
import SvgLogo from "@/components/svg/SvgLogo.vue";

export default {
  components: {
    SvgLogo,
  },

  data() {
    return {
      tabs: [
  {
    title: "Главная",
    path: "/",
  },
  {
    title: "Правила",
    path: "/rules",
  },
  {
    title: "Контакты",
    path: "/contacts",
    query: {
      address: "Томск, ул. Красноармейская, 146",
      email: "idat@tusur.ru",
      phone: "+79138842715",
    },
  },
],
    };
  },
  methods: {
    setTab(value) {
      this.$emit("setTab"<value);
    }
  }
};
</script>

<style lang="less">
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: @brown;
  z-index: 100;

  &__container {
    .container();
    height: 60px;
    display: flex;
    align-items: center;
  }

  &__logo-wrap {
    display: flex;
    align-items: center;
  }

  &__logo {
    width: 36px;
    color: @light_green;
  }

  &__logo-text {
    margin-left: 10px;
    color: @white;
    font-size: 26px;
    font-family: @font2;
  }

  &__logo-text-red {
    color: @dark_orange;
  }

  &__logo-circle {
    margin-left: 10px;
    width: 15px;
    height: 15px;
    background-color: @dark_orange;
    border-radius: 50%;
    animation: flicker 2s ease infinite;
  }

  &__nav {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  &__nav-item {
    color: @white;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s ease-out;

    & + & {
      margin-left: 20px;
    }

    &:hover {
      @media (hover: hover) {
        color: @light_orange;
      }
    }

    &:active,
    &--active,
    &.router-link-exact-active {
      color: @light_orange;
    }
  }
  &__nav-item {
    //прочие стили
    &:active,
    &--active,
    &.router-link-active {
      color: @light_orange;
    }
  }
}

</style>