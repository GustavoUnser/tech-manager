import axios from "axios"
import store from "../../store"

const authInterceptor = (request) => {
    let user = store.getState().auth

    if (user.isAuth) {
        request.headers = {
            Authorization: `Bearer ${user.userData.token}`
        }
    }

    return request
}

const createApi = () => {
    let api = axios.create({
        baseURL: 'http://localhost:8080/'
    })

    api.interceptors.request.use(authInterceptor)

    return api
}

const api = createApi()

export default api