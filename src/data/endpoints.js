import http from "../utils/http"

export const  createUser = async (param) => {
    const resp = await http.post('/user/signup',  param)

    return resp
}
export const  login = async (param) => {
    const resp = await http.post('/user/login',  param)

    return resp
}


export const getMyBooking = async() =>{
    const resp = await http.get("/booking/mybookings")
   
    return resp
}
export const createBooking = async(param) =>{
    const resp = await http.post("/booking", param)
   
    return resp
}

export const deleteBooking = async(param) =>{
    const resp = await http.delete(`/booking/${param}`)
   
    return resp
}

export const makePayment = async(param) =>{
    const resp = await http.post("/payment", param)
   
    return resp
}


