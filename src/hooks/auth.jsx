import { createContext, useContext } from "react";

export const AuthContexxt = createContext({});

function AuthProvider({ children }) {
    return (
        <AuthContexxt.Provider value={{name: "Andrpe"}}>
            {children}
        </AuthContexxt.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContexxt);

    return context;
}

export { AuthProvider, useAuth };