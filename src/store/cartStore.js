import {defineStore} from 'pinia'
import { useProductStore } from './productStore';
import {useToast} from "vue-toastification";

const CART_STORAGE = 'CART_STORAGE'
const toast = useToast()

export const useCartStore = defineStore('cart', {
    state: CartState => ({
        contents: JSON.parse(localStorage.getItem(CART_STORAGE)) ?? {},
    }),

    getters: {
        count() {
            return Object.keys(this.contents).reduce((acc, id) => {
                return acc + parseInt(this.contents[id].quantity);
            }, 0);
        },
        total() {
            const products = useProductStore();
            return Object.keys(this.contents).reduce((acc, id) => {
                return acc + products.items[id].price * this.contents[id].quantity;
            }, 0);
        },

        listCart() {
            const products = useProductStore();

            if (!products.loaded) return [];

            return Object.keys(this.contents).map((productId) => {
                const purchase = this.contents[productId];

                return {
                    id: purchase.productId,
                    thumbnail: products.items[purchase.productId].thumbnail,
                    name: products.items[purchase.productId].name,
                    quantity: purchase.quantity,
                    price: products.items[purchase.productId].price,
                    cost: purchase.quantity * products.items[purchase.productId].price,
                };
            });
        },
    },

    actions: {
        add(productId) {
            if (this.contents[productId]) {
                this.contents[productId].quantity += 1;
            } else {
                this.contents[productId] = {
                    productId,
                    quantity: 1,
                };
            }
            toast.success('Thêm giỏ hàng thàng công')
        },
        updateQuantity(productId, quantity) {
            this.contents[productId].quantity = quantity
            if (quantity <= 0) {
                delete this.contents[productId];
            }
        },
        remove(productId) {
            if (!this.contents[productId]) {
                return;
            }
            delete this.contents[productId];
        },
    }
})
