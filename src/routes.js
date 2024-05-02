import React from "react";
import { Redirect, Routes, Route, Router } from "react-router-dom";
import RouteGuard from "./components/RouteGuard"

//history
import { history } from './helpers/history';

//pages
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/Login"
import Projects from "./pages/Projects"

const MyRoutes = () => {
    return (
        <Router history={history}>
            <Routes>
                <RouteGuard
                    exact
                    path="/"
                    component={HomePage}
                />
                <RouteGuard
                    exact
                    path="/dashboard"
                    component={Projects}
                />
                <Route
                    path="/login"
                    component={LoginPage}
                />
                <Redirect to="/" />
            </Routes>
        </Router>
    );
};

export default MyRoutes
