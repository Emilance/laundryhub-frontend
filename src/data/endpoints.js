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
export const deleteUser = async(param) =>{
    const resp = await http.delete(`/user/${param}`)
   
    return resp
}

export const makePayment = async(param) =>{
    const resp = await http.post("/payment", param)
   
    return resp
}

export const getMyOrders = async () =>{
    const resp = await http.get("/order/myorders")
   
    return resp
}
export const updateOrder = async (param, body) =>{
    const resp = await http.patch(`/order/${param}`, body )
   
    return resp
}


export const getAllUsers = async () =>{
    const resp = await http.get("/user")
    return resp
}

export const getAllBookings = async () =>{
    const resp = await http.get("/booking")
    return resp
}
export const getAllOrders = async () =>{
    const resp = await http.get("/order")
    return resp
}

export const getAllRatings = async () =>{
    const resp = await http.get("/order/rating")
    return resp
}