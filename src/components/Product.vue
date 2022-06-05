<template>
  <div class="product">
        <div class="imageProduct">
          <img :src="'/public/thumbnails/'+ product.thumbnail" :alt="product.name">
        </div>
        <div class="contentProduct">
          <div class="describeProduct">
            <div class="priceProduct">
              <span>{{product.price}}$</span>
            </div>
            <div class="nameProduct">
              <span>{{product.name}}</span>
            </div>
          </div>
          <div class="addCart">
            <button class="addCartBtn btn" @click="cartStore.add(product.id)">Add</button>
          </div>
        </div>
      </div>
</template>

<script setup>
import { useCartStore } from "../store/cartStore";
const cartStore = useCartStore();
defineProps(['product'])

</script>

<style scoped>
.product{
  display: flex;
  flex-direction: column;
  border: #c3cfd9 2px solid;
  padding: 1rem;
}

.imageProduct {
  width: 100%;
  padding: 0 2rem;
}

.imageProduct > img {
  width: 100%;
  height: 16rem;
  object-fit: contain;
}

.contentProduct {
  display: flex;
  justify-content: space-between;
}

.nameProduct >span{
  color: #293845;
  font-weight: 500;
  font-size: 20px;
}

.addCartBtn {
  padding: 0 30px;
}
</style>
