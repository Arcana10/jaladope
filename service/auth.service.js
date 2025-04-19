import { ENDPOINT } from "../API/api";

export const serviceLogin = async (formData) => {

    try {
    
        const response = await fetch(`${ENDPOINT}auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        
        if (!response) {
            throw new Error('Credenciales inválidas.');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        return { ok: false, message: error.message }
    }
}

export const serviceAuthenticated = async (token) => {

    try {
     
        const formData = { token: token }
        const response = await fetch(`${ENDPOINT}auth/authenticate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
    
        if (!response) {
            throw new Error("Error al autenticar en el server.");
        }

        const data = await response.json();

        console.log(data);
        

        return data;
        
    } catch (error) {
        return { ok: false, message: error.message }
    }
}