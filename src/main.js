import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import Toast from 'vue-toastification'
import "vue-toastification/dist/index.css";

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    toastClassName: "my-custom-toast-class",
    maxToasts: 20,
    position: "top-right",
    timeout: 2000,
    closeOnClick: true,
    closeButton: false,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    icon: true,
    rtl: false
})

app.mount('#app')
