<template>
  <div class="containerProduct">
    <div class="headerListProduct">
    <h1>Feature Product</h1>
      </div>
    <div class="listProduct">
      <Product v-for="product in productStore.items" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script setup>
import Product from "./Product.vue";
import { useProductStore } from "../store/productStore";
import { onBeforeMount } from "vue";

const productStore = useProductStore();

onBeforeMount(() => {
  productStore.fetchAll();
})
</script>

<style scoped>
.containerProduct {
  padding: 1rem;
  max-width: 80rem;
  margin: 0 auto;
}

.listProduct {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.headerListProduct{
  margin: 1rem 0;
  text-align: center;
}
</style>
