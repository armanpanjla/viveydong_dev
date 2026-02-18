import api from './axios'


export const subscribeToNewsletter = (emailData) => {
    return api.post('/subscribe', emailData);
};

export const loginUser = (loginData) => {
    return api.post("/login", loginData)
} 

export const newUser =(newuserData) =>{
    return api.post("/signup", newuserData)
}
