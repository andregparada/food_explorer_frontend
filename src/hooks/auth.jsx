import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContexxt = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {

        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodexplorer:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token })

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar.")
            }
        }

    }

    function signOut() {
        localStorage.removeItem("@foodexplorer:token");
        localStorage.removeItem("@foodexplorer:user");

        setData({})
    }

    // async function addDish({ dish, imageFile }) {
    //     try { 
    //         const fileUploadForm = new FormData();
    //         fileUploadForm.append("image", imageFile);
            
    //         const response = await api.patch("/dishes", fileUploadForm)
    //         dish.image = response.data.image

    //         await api.post("/dishes", dish);
            
    //         alert("Prato criado com sucesso!");

    //     } catch (error) {
    //         if(error.response) {
    //             alert(error.response.data.message);
    //         } else {
    //             alert("Não foi possível adcionar prato.")
    //         }
    //     }

        

    //     alert("Prato criado com sucesso!");
    //     navigate("/");
    // }


    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token");
        const user = localStorage.getItem("@foodexplorer:user");

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }

    }, []);

    return (
        <AuthContexxt.Provider value={{ 
            signIn,
            signOut,
            // addDish,
            user:data.user 
        }}>
            {children}
        </AuthContexxt.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContexxt);

    return context;
}

export { AuthProvider, useAuth };