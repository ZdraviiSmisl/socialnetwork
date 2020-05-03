import axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {"API-KEY": "9afe52b8-8bdf-4340-bf02-6f9a020ad3e6"}
})

export const userApi = {
  getUsers(currentPage = 1, pageSize = 40) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`
    ).then(response => response.data)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {})
  },

  getUserProfile(userId) {
    console.warn('Obsolete method.Please,use profileApi object');
    return profileApi.getUserProfile(userId);

  }
}
export const profileApi = {
  getUserProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId){
    return instance.get(`profile/status` + userId)
  },
  updateStatus(status){
    return instance.put(`profile/status`,{status})
  }

}

export const authApi = {

  me() {
    return instance.get(`auth/me`)
  },
}
