import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
const hostname = window.location.hostname
export const app = axios.create({
    baseURL: 'http://' + hostname+':8081/api/'
})