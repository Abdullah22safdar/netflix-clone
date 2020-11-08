import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {BROWSE, HOME, SIGN_IN, SIGN_UP} from "./constants/routes";
import {Browse, Home, SignIn, SignUp} from "./pages";
import {IsUserRedirect, ProtectedRoute} from "./helpers/routes";
import {useAuthListener} from './hooks';

const App = () => {
 const {user}= useAuthListener();
    return (
        <Router>
            <Switch>
            <IsUserRedirect user={user} exact loggedInPath={BROWSE} path={SIGN_IN}>
                <SignIn/>
            </IsUserRedirect>
            <IsUserRedirect user={user}exact loggedInPath={SIGN_UP} path={SIGN_UP}>
                <SignUp/>
            </IsUserRedirect>
            <IsUserRedirect exact loggedInPath={HOME} path={HOME}>
                <Home/>
            </IsUserRedirect>
            <ProtectedRoute user={user}  path={BROWSE}>
                <Browse/>
            </ProtectedRoute>
            </Switch>
        </Router>
    )
}

export default App