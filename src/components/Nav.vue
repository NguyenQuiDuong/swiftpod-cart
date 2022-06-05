<script setup>
import { useCartStore } from "../store/cartStore";
const cartStore = useCartStore();
</script>

<template>
  <div class="nav">
    <div class="logo">
      <h2>SWIFTPOD</h2>
    </div>
    <div class="menu">
    <span>
      <router-link to="/">Home</router-link>
    </span>
      <span>
      <a>Product</a>
    </span>
      <span>
      <router-link to="/cart">Cart</router-link>
    </span>
    </div>
    <div class="cart">
      <div class="cartIcon">
        <div class="icon-badge">{{cartStore.count}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
.nav {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: inline-grid;
  grid-template-columns: auto auto auto;
  width: 100%;
  background-color: #f7f9fa;
  color: #293845;
}

.nav > div {
  text-align: center;
}



.menu > span {
  padding: 0 50px;
  margin: 0 auto;
  display: inline-block;
  vertical-align: middle;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
.cartIcon{
  background-image: url("@/assets/shopping-cart.png");
  background-size: 35px 35px;
  width: 36px;
  height: 36px;
  margin:auto;
}

.icon-badge {
  background-color: #e9a2ad;
  border: 2px #d3455b solid;
  font-size: 12px;
  color: white;
  text-align: center;
  width: 20px;
  height: 20px;
  border-radius: 35%;
  position: absolute;
  right: -6px;
}
</style>
