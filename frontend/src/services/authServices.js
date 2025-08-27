import { api, requestConfig } from "../utils/config";

// Registrar um usuário
const register = async (data) => {
    const config = requestConfig("POST", data);

    try {
        const res = await fetch(api + "/users/register", config);
        
        // Verifica se a resposta foi um erro do servidor
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.errors ? errorData.errors[0] : "Ocorreu um erro desconhecido.");
        }
        
        const resData = await res.json();
        
        // Se a resposta contiver um token, salva no localStorage.
        if (resData.token) {
            localStorage.setItem("user", JSON.stringify(resData)); // Chave 'user' no singular
        }

        return resData;
    } catch (error) {
        return { errors: [error.message] };
    }
};

// Fazer logout
const logout = () => {
    localStorage.removeItem("user");
};

// Fazer login
const login = async (data) => {
    const config = requestConfig("POST", data);

    try {
        const res = await fetch(api + "/users/login", config);

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.errors ? errorData.errors[0] : "Ocorreu um erro desconhecido.");
        }
        
        const resData = await res.json();
        
        if (resData.token) {
            localStorage.setItem("user", JSON.stringify(resData)); // Chave 'user' no singular
        }

        return resData;
    } catch (error) {
        return { errors: [error.message] };
    }
};

const authServices = {
    register,
    logout,
    login,
};

export default authServices;