import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./services/auth.service";
import './scss/style.scss';

const PrivateRoute = ({ component: TheLayout, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    // console.log(currentUser)
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <TheLayout {...routeProps} />
                ) : (
                        <Redirect to={"/login"} />
                        // <TheLayout {...routeProps} />
                    )
            }
        />
    );
};

{/* <Route path="/apps/email" name="Email App" render={props => <TheEmailApp {...props} />} /> */ }
{/* <Route path="/" name="Home" render={props => <TheLayout {...props} />} /> */ }


export default PrivateRoute