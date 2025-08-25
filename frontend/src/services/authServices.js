import { api , requestConfig } from "../utils/config";

// Register an user
const register = async(data) => {
    const config = requestConfig("POST", data);

    try {
        const res =  await fetch(api + "/users/register", config)
            .then((res) => res.json())
            .catch((err) => err)

        if(res){
            localStorage.setItem("users", JSON.stringify(res));
        }
        
        return res;
    } catch (error) {
        console.log(error);
    }
};

// Logout an user
const logout = () => {
    localStorage.removeItem("user");
};

// Sign in an user
const login = async(data) => {
    const config = requestConfig("POST", data);

    try {
        const res = await fetch(api + "/users/login", config)
                    .then((res) => res.json())
                    .catch((err) => err)

        if(res._id){
            localStorage.setItem("user", JSON.stringify(res));
        }

        return res;
        
    } catch (error) {
        console.log(error)
    }
};

const authServices = {
    register,
    logout,
    login,
}

export default authServices;
