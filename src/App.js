import React, { useState } from 'react';
import './App.css';
import Home from './components/screens/Home';
import { Route, Redirect, Switch } from 'react-router-dom';
import SignUpPage from './components/screens/SignUpPage';
import SignInPage from './components/screens/SignInPage';
import { firebaseApp } from './firebase';
import Loader from './components/Loader/Loader';

export const GlobalContext = React.createContext(null);

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [initialLoading, setInitailLoading] = useState(true);
    const toggleModal = () => {
        setIsOpen((prevState) => !prevState);
    };
    const [user, setUser] = useState(null);
    firebaseApp.auth().onAuthStateChanged((user) => {
        setInitailLoading(false);
        setUser(user);
    });
    if (initialLoading) return <Loader />;

    return (
        <GlobalContext.Provider value={{ isOpen, toggleModal, user }}>
            {!user && <Redirect from="/" to="/signup" />}
            {!user && <Redirect from="/home" to="/signUP" />}
            {user && <Redirect from="/signin" to="/home" />}
            {user && <Redirect from="/signup" to="/home" />}
            <Switch>
                <Route path="/home">
                    <Home clicked={toggleModal} />
                </Route>
                <Route path="/signUp">
                    <SignUpPage />
                </Route>
                <Route path="/signIn">
                    <SignInPage />
                </Route>
            </Switch>
        </GlobalContext.Provider>
    );
}

export default App;
