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

            api.defaults.headers.authorizations = `Bearer ${token}`;
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

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token");
        const user = localStorage.getItem("@foodexplorer:user");

        if(token && user) {
            api.defaults.headers.authorizations = `Bearer ${token}`;

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