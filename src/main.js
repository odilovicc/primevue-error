import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";
import Button from "primevue/button"
app.component('Button', Button);
const app = createApp(App);
app.use(PrimeVue);
app.use(PrimeVue, { inputStyle: "filled" });
import App from './App.vue'

createApp(App).mount('#app')
