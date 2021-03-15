import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export const app = axios.create({
    baseURL:'http://localhost:8081/api/'
})