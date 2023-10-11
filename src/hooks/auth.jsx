import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

export const AuthContexxt = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {

        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

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

    return (
        <AuthContexxt.Provider value={{ signIn, user:data.user }}>
            {children}
        </AuthContexxt.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContexxt);

    return context;
}

export { AuthProvider, useAuth };