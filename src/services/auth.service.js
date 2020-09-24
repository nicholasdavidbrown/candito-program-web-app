import React, { useEffect, useState } from "react";
import app from "../config/fire";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            let authUser
            if (user) {
                app.firestore().collection('users').doc(user.uid)
                    .get()
                    .then(snapshot => {
                        const dbUser = snapshot.data();
                        console.log(dbUser)

                        // default empty roles
                        // if (!dbUser.roles) {
                        //     dbUser.roles = {};
                        // }

                        // merge auth and db user
                        authUser = {
                            uid: user.uid,
                            email: user.email,
                            emailVerified: user.emailVerified,
                            providerData: user.providerData,
                            ...dbUser,
                        };

                        setCurrentUser(authUser)
                        setPending(false)
                    });
            }
            setCurrentUser(user)
            setPending(false)
        });
    }, []);

    if (pending) {
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};