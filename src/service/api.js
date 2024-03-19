// CRIADO PARA ARMAZENAS AS CONFIGS DO AXIOS

import axios from "axios"

export const api = axios.create({
    baseURL: "https://moviesrocket-back.onrender.com"
})
