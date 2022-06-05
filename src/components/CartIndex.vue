<template>
  <div class="containerCart">
    <div v-if="listCart.length !== 0">
      <div class="headerListCart">
        <div class="titlePage">
          <h2>Cart</h2>
        </div>
        <div class="checkOut">
          <button class="btn checkOutBtn">Check out</button>
        </div>
      </div>
      <div class="bodyListCart">
        <div class="productCart" v-for="product in listCart" :key="product.id">
          <div class="imageCart">
            <img src="/public/thumbnails/product1.jpg" alt="Product 1">
          </div>
          <div class="describeProduct">
            <h2>{{ product.name }}</h2>
            <p class="priceProduct">{{ product.price }}$</p>
          </div>
          <div class="quantityCart">
            <p>Quantity</p>
            <input type="number" id="quantity" min="0" name="quantity" @change="updateQuantity($event, product.id)"
                   :value="product.quantity">
          </div>
          <div class="totalCart">
            <p>Sub Total</p>
            <p class="priceProduct">{{ product.cost }}$</p>
          </div>
          <div class="actionCart">
            <button class="deleteBtn" @click="cartStore.remove(product.id)">
              <img src="@/assets/trash.svg" alt="Trash">
            </button>
          </div>
        </div>
        <div class="totalCost">
          <div>
            <h2>Total {{ cartStore.total }}$</h2>
            <div>
              <button class="btn checkOutBtn">Check out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 v-else-if="listCart.length === 0">Giò hàng trống</h2>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useCartStore} from "../store/cartStore";

const cartStore = useCartStore();

const listCart = computed(() => cartStore.listCart)
const updateQuantity = (event, productId) => {
  cartStore.updateQuantity(productId, event.target.value)
}
</script>

<style scoped>
.containerCart {
  display: flex;
  place-content: center;
  flex-direction: column;
  margin: 3rem 10rem 0 10rem;
}

.headerListCart {
  width: 100%;
  display: flex;
  align-content: space-between;
  margin-bottom: 1rem;
}

.productCart {
  display: flex;
  flex-direction: row;
  border-top: #c3cfd9 2px solid;
  border-right: #c3cfd9 2px solid;
  border-left: #c3cfd9 2px solid;
}

.productCart:nth-last-child(2) {
  border-bottom: #c3cfd9 2px solid;
  margin-bottom: 1rem;
}

.productCart > div {
  margin: 0 auto 0 auto;
  padding-top: 1rem;
}

.imageCart {
  height: 100%;
  width: auto;
  padding: 2rem;
}

.imageCart img {
  height: 7rem;
  object-fit: contain;
  width: auto;
}

.describeProduct {
  width: 40%;
}

.checkOut {
  margin-left: auto;
  text-align: right;
}

.totalCost {
  text-align: right;
}

.checkOutBtn {
  padding: 0 45px;
}

.titlePage {
  display: flex;
  place-items: center;
}

#quantity {
  height: 40px;
  width: 100px;
  border: 2px #c5ced6 solid;
  border-radius: 2px;
  padding-left: 10px;
  font-size: 16px;
}
.actionCart {
  padding-top: 2.1rem !important;
}

.deleteBtn {
  height: 40px;
  width: 40px;
  background-color: white;
  border: 2px #c7c3fb solid;
  border-radius: 5px;
  padding: 4px;
}

.deleteBtn > img {
  display: block;
  margin: auto;
}
</style>
