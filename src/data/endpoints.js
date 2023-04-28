import http from "../utils/http"

export const  createUser = async (param) => {
    const resp = await http.post('/user/signup',  param)

    return resp
}
export const  login = async (param) => {
    const resp = await http.post('/user/login',  param)

    return resp
}
export const signInWithGoogle = async() =>{
    const resp = await http.get("/auth/google")
   
    return resp
}


