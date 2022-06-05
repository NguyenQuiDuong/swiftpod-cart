import { defineStore } from 'pinia';
import { default as dataProduct } from '../assets/products.json'

export const useProductStore = defineStore('products',{

  state: ProductState =>({
    items: {},
    ids: [],
  }),

  getters: {
    list() {
      return this.ids.map((i) => this.items[i]);
    },

    loaded() {
      return this.ids.length > 0;
    },
  },

  actions: {
    async fetchAll() {
      const data = dataProduct;
      this.ids = data.map((product) => {
        this.items[product.id] = product;
        return product.id;
      });
    },
  },
});
