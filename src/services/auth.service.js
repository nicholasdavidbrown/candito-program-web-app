import React, { useEffect, useState } from "react";
import app from "../config/fire";
import Loader from '../components/Loader/index'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            let authUser
            try {
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
            } catch (e) {
                console.log('Error logging from Auth Service')
                console.error(e)
            }
            setCurrentUser(user)
            setPending(false)
        });
    }, []);

    if (pending) {
        return <Loader />
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