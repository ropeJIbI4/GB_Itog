<template>
  <div class="header center">
    <div class="header__nav">
      <div>
        <img class="header__logo" src="/assets/Logo_header.png" alt="">
      </div>
      <div class="header__link">
        <router-link to="/">Home</router-link>
        <router-link to="/Catalog">Catalog</router-link>
        <router-link class="link" to="/Favorite">Favorites ({{ itemsInLiked }})</router-link>
        <router-link to="/Cart">Cart ({{ itemsInCart }})</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "navBar",
  computed: {
    ...mapGetters(["itemsInCart", "itemsInLiked"]),
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: flex-end;
}
.menu > div {
  margin-right: 20px;
  margin-bottom: 20px;
}
.router-link {
  text-decoration: none;
  padding: 10px;
}

.router-link-exact-active {
  color: #CDA274;
}
a {
  text-decoration: none;
  color: black;
}

.center {
  padding-left: calc(50% - 560px);
  padding-right: calc(50% - 560px);
}

.header__nav {
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
}

.header__link {
  display: flex;
  padding-top: 15px;
  gap: 15px;
}

.header__logo {
  width: 176px;
}
</style>
