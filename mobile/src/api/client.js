import { API_URL } from "~/api/constants"
import { create } from "apisauce"

const config = {
    baseURL: API_URL,
    headers: {
        accept: '*/*'
    }
}

//const customAxiosInstance = axios.create(config)

//const apiClient = create({ axiosInstance: customAxiosInstance })

const apiClient = create( config )

  
export default apiClient;